import { Handler } from '@netlify/functions';

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlaceResponse {
  result: {
    reviews: GoogleReview[];
    rating: number;
    user_ratings_total: number;
  };
  status: string;
}

export const handler: Handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Google Places API key - Netlify Environment Variable'dan alınacak
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    
    // Place ID - Google My Business'tan alınacak (Eryaman veya İvedik şubesi için)
    // Bu değerleri query parameter olarak alabilirsiniz
    const placeId = event.queryStringParameters?.placeId || process.env.GOOGLE_PLACE_ID;

    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Google Places API key is not configured',
          message: 'Lütfen Netlify environment variables\'a GOOGLE_PLACES_API_KEY ekleyin'
        }),
      };
    }

    if (!placeId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Place ID is required',
          message: 'Google Place ID gerekli. Google My Business\'tan alabilirsiniz.'
        }),
      };
    }

    // Google Places API Details endpoint
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=tr`;

    const response = await fetch(apiUrl);
    const data: GooglePlaceResponse = await response.json();

    if (data.status !== 'OK') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: `Google API Error: ${data.status}`,
          message: 'Google Places API\'den veri çekilemedi'
        }),
      };
    }

    // Yorumları formatla
    const formattedReviews = data.result.reviews.map((review) => ({
      id: review.time, // Unique ID olarak timestamp kullan
      name: review.author_name,
      rating: review.rating,
      comment: review.text,
      date: review.relative_time_description,
      avatar: review.author_name.charAt(0).toUpperCase(),
      profilePhoto: review.profile_photo_url,
      time: review.time,
    }));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        reviews: formattedReviews,
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
      }),
    };
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu'
      }),
    };
  }
};


import { Handler } from '@netlify/functions';

interface GooglePlaceSearchResponse {
  candidates: Array<{
    place_id: string;
    name: string;
    formatted_address: string;
  }>;
  status: string;
}

export const handler: Handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const query = event.queryStringParameters?.query || event.queryStringParameters?.address;

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

    if (!query) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Query is required',
          message: 'Adres veya işletme adı gerekli'
        }),
      };
    }

    // Text Search API kullanarak Place ID bul
    // Eğer query "Rose Wedding Hall" içeriyorsa, direkt işletme adını kullan
    let searchQuery = query;
    if (!query.includes('Rose Wedding Hall')) {
      searchQuery = `Rose Wedding Hall ${query}`;
    }
    const encodedQuery = encodeURIComponent(searchQuery);
    
    // Koordinatlar varsa (Eryaman için), location ve radius ekle
    // Eryaman koordinatları: 39.9650801, 32.6056566
    const eryamanCoords = '39.9650801,32.6056566';
    const ivedikCoords = '39.9650801,32.6056566'; // İvedik koordinatlarını da ekleyebiliriz
    
    // Eğer query Eryaman içeriyorsa, o koordinatları kullan
    let locationParam = '';
    if (query.toLowerCase().includes('eryaman') || query.includes('4016')) {
      locationParam = `&location=${eryamanCoords}&radius=1000`;
    } else if (query.toLowerCase().includes('ivedik') || query.includes('1439')) {
      locationParam = `&location=${ivedikCoords}&radius=1000`;
    }
    
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodedQuery}${locationParam}&key=${apiKey}&language=tr&region=tr`;

    const response = await fetch(apiUrl);
    const data: GooglePlaceSearchResponse = await response.json();

    if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: `Google API Error: ${data.status}`,
          message: 'Place ID bulunamadı'
        }),
      };
    }

    if (data.candidates && data.candidates.length > 0) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          placeId: data.candidates[0].place_id,
          name: data.candidates[0].name,
          address: data.candidates[0].formatted_address,
          candidates: data.candidates.slice(0, 5).map(c => ({
            placeId: c.place_id,
            name: c.name,
            address: c.formatted_address
          }))
        }),
      };
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ 
        error: 'Place not found',
        message: 'İşletme bulunamadı'
      }),
    };
  } catch (error) {
    console.error('Error finding Place ID:', error);
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


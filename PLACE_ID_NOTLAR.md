# Place ID Notları

## Bulunan Place ID Bilgileri

Google Maps linkinden çıkarılan bilgiler:
- URL: https://www.google.com/maps/place/Rose+Wedding+Hall/@39.9650801,32.6056566,17z/...
- Koordinatlar: 39.9650801, 32.6056566
- Place Identifier: `0x14d3310014785ee5:0xf44e225c440017f2`
- Google Plus Code: `/g/11y68dlz14`

**Not:** Bu format Google Places API'de direkt kullanılamaz. Google Places API Text Search kullanarak doğru Place ID'yi bulmamız gerekiyor.

## Kullanılacak Yöntem

1. Google Places API Text Search ile "Rose Wedding Hall" ve koordinatları kullanarak arama yapacağız
2. Bulunan sonuçtan gerçek Place ID'yi alacağız
3. Bu Place ID ile yorumları çekeceğiz

## Test İçin

API key ile test URL'si:
```
https://maps.googleapis.com/maps/api/place/textsearch/json?query=Rose%20Wedding%20Hall%20Eryaman&location=39.9650801,32.6056566&radius=500&key=YOUR_API_KEY&language=tr
```


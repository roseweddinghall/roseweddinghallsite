# Google Place ID Bulma Rehberi

Rose Wedding Hall için Google yorumlarını siteye entegre etmek için Place ID'ye ihtiyacınız var. İşte adım adım nasıl bulacağınız:

## Yöntem 1: Google Maps'ten (En Kolay)

1. **Google Maps**'i açın: https://www.google.com/maps
2. İşletmenizi arayın: "Rose Wedding Hall Eryaman" veya "Rose Wedding Hall İvedik"
3. İşletmeye tıklayın
4. Sol panelde "Paylaş" butonuna tıklayın
5. Açılan pencerede "Bir haritaya veya yerleşkeye katıştır" seçeneğini seçin
6. URL'de `place_id=` kısmını bulun. Örnek:
   ```
   https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...&q=place_id:ChIJ...
   ```
7. `place_id:` sonrasındaki kısmı kopyalayın (örn: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

## Yöntem 2: Place ID Finder Aracı

1. [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id#find-id) sayfasına gidin
2. İşletme adını veya adresini girin:
   - **Eryaman:** "Rose Wedding Hall, Yeşilova, 4016. Cad. B Blok No:2/2/13, 06796 Etimesgut/Ankara"
   - **İvedik:** "Rose Wedding Hall, İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121, 06378 Yenimahalle/Ankara"
3. Sonuçlardan doğru işletmeyi seçin
4. Place ID'yi kopyalayın

## Yöntem 3: Google My Business

1. [Google My Business](https://www.google.com/business/) hesabınıza giriş yapın
2. İşletmenizi seçin
3. "Info" sekmesine gidin
4. URL'deki Place ID'yi bulun veya Google Maps linkini kontrol edin

## Yöntem 4: Kod ile Otomatik Bulma

Sitemizde adreslerden otomatik olarak Place ID bulma özelliği var. Ancak bu özellik için Google Places API key gerekiyor.

## Netlify Environment Variables Ekleme

Place ID'leri bulduktan sonra, Netlify Dashboard'da şu environment variable'ları ekleyin:

```
GOOGLE_PLACES_API_KEY = your-api-key-here
REACT_APP_GOOGLE_PLACE_ID_ERYAMAN = ChIJ... (Eryaman Place ID)
REACT_APP_GOOGLE_PLACE_ID_IVEDIK = ChIJ... (İvedik Place ID)
```

## Hızlı Test

Place ID'yi bulduktan sonra, şu URL'yi tarayıcıda açarak test edebilirsiniz:

```
https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=reviews,rating,user_ratings_total&key=YOUR_API_KEY
```

Bu URL size yorumları ve puanı gösterecektir.

## Sorun Giderme

### Place ID bulunamıyorsa:
- İşletmenin Google Maps'te doğru şekilde kayıtlı olduğundan emin olun
- İşletme adını ve adresini tam olarak yazın
- Google My Business hesabınızın aktif olduğundan emin olun

### Yorumlar görünmüyorsa:
- Place ID'nin doğru olduğundan emin olun
- API key'in Places API için etkin olduğunu kontrol edin
- Browser console'da hata mesajlarını kontrol edin

## İki Şube İçin

Eryaman ve İvedik şubeleri için ayrı ayrı Place ID bulmanız gerekiyor. Her iki Place ID'yi de Netlify environment variables'a ekleyin.


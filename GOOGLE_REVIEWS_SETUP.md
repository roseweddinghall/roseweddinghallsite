# Google Yorumları Entegrasyon Rehberi

Bu rehber, Google yorumlarını otomatik olarak sitenize çekmek için gerekli adımları açıklar.

## 🚀 Hızlı Başlangıç

İki seçenek var:

### Seçenek 1: API Key ile (Otomatik - Önerilen)
1. `API_KEY_OLUSTURMA_REHBERI.md` dosyasını takip ederek API key oluşturun
2. Netlify'a `GOOGLE_PLACES_API_KEY` ekleyin
3. Sistem otomatik olarak Place ID'yi bulup yorumları çekecek!

### Seçenek 2: Manuel Place ID (API Key Olmadan)
1. `PLACE_ID_HIZLI_BULMA.md` dosyasını takip ederek Place ID'yi bulun
2. Netlify'a `REACT_APP_GOOGLE_PLACE_ID_ERYAMAN` ve `REACT_APP_GOOGLE_PLACE_ID_IVEDIK` ekleyin
3. Deploy edin

**Not:** API key ile otomatik bulma daha kolay ve hızlıdır!

## Adım 1: Google Cloud Console'da Proje Oluşturma

1. [Google Cloud Console](https://console.cloud.google.com/) adresine gidin
2. Yeni bir proje oluşturun veya mevcut bir projeyi seçin
3. Proje adını girin (örn: "Rose Wedding Hall Reviews")

## Adım 2: Places API'yi Etkinleştirme

1. Sol menüden "APIs & Services" > "Library" seçin
2. "Places API" arayın
3. "Places API" seçeneğine tıklayın
4. "Enable" butonuna tıklayarak API'yi etkinleştirin

**Önemli:** Places API (New) değil, "Places API" seçin!

## Adım 3: API Key Oluşturma

1. "APIs & Services" > "Credentials" sayfasına gidin
2. "Create Credentials" > "API Key" seçin
3. API key'iniz oluşturulacak
4. API key'i kopyalayın (daha sonra kullanmak için)

### API Key Güvenliği (Önerilen)

1. Oluşan API key'in yanındaki "Restrict key" butonuna tıklayın
2. "Application restrictions" altında "HTTP referrers (web sitesi)" seçin
3. Aşağıdaki referrer'ları ekleyin:
   - `https://yourdomain.com/*`
   - `https://*.netlify.app/*`
   - `http://localhost:3000/*` (geliştirme için)
4. "API restrictions" altında "Restrict key" seçin
5. "Places API" seçeneğini işaretleyin
6. "Save" butonuna tıklayın

## Adım 4: Place ID Bulma

Google Place ID'nizi bulmanın birkaç yolu var:

### Yöntem 1: Google My Business
1. [Google My Business](https://www.google.com/business/) hesabınıza giriş yapın
2. İşletmenizi seçin
3. "Info" sekmesine gidin
4. "Add place ID" veya "Get place ID" linkini kontrol edin

### Yöntem 2: Place ID Finder
1. [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id#find-id) aracını kullanın
2. İşletmenizin adını ve adresini girin
3. Place ID'yi kopyalayın

### Yöntem 3: Google Maps'ten
1. Google Maps'te işletmenizi bulun
2. URL'deki Place ID'yi bulun veya developer tools kullanın
3. Örnek URL: `https://www.google.com/maps/place/?q=place_id:ChIJ...`

**Not:** Her şube için ayrı Place ID gerekecek (Eryaman ve İvedik için farklı ID'ler)

## Adım 5: Netlify Environment Variables Ekleme

1. Netlify Dashboard'a gidin
2. Sitenizi seçin
3. "Site settings" > "Environment variables" sayfasına gidin
4. Aşağıdaki environment variable'ları ekleyin:

```
GOOGLE_PLACES_API_KEY = your-api-key-here
GOOGLE_PLACE_ID_ERYAMAN = place-id-for-eryaman
GOOGLE_PLACE_ID_IVEDIK = place-id-for-ivedik
```

5. "Save" butonuna tıklayın

## Adım 6: Netlify Functions Paketini Yükleme

Proje klasöründe terminal açın ve şu komutu çalıştırın:

```bash
npm install @netlify/functions
```

## Adım 7: Deploy

Değişiklikleri commit edip push edin:

```bash
git add .
git commit -m "Add Google Reviews integration"
git push
```

Netlify otomatik olarak deploy edecektir.

## Adım 8: Test Etme

1. Deploy tamamlandıktan sonra sitenize gidin
2. Yorumlar sayfasına gidin (`/yorumlar`)
3. Yorumların otomatik olarak yüklendiğini kontrol edin

## Sorun Giderme

### Yorumlar gelmiyorsa:

1. **API Key kontrolü:**
   - Netlify Environment Variables'da API key'in doğru olduğundan emin olun
   - API key'in Places API için etkin olduğunu kontrol edin

2. **Place ID kontrolü:**
   - Place ID'nin doğru olduğundan emin olun
   - İşletmenizin Google Maps'te görünür olduğunu kontrol edin

3. **API Quota kontrolü:**
   - Google Cloud Console'da API kullanımını kontrol edin
   - Ücretsiz tier'da günlük 1000 istek limiti vardır

4. **CORS hatası:**
   - Netlify Functions'ın doğru çalıştığından emin olun
   - Browser console'da hata mesajlarını kontrol edin

## Maliyet

- **Places API - Details:** Ücretsiz tier'da aylık $200 kredi
- **İstek başına maliyet:** ~$0.017 (Details API)
- **Tahmini kullanım:** Günde 10-20 istek = Ayda 300-600 istek = ~$5-10

**Not:** Çoğu durumda ücretsiz tier yeterli olacaktır. Kullanımı azaltmak için caching kullanılabilir.

## Otomatik Yenileme

Yorumlar otomatik olarak:
- Sayfa yüklendiğinde
- Her 30 dakikada bir (cache ile)
- Kullanıcı sayfayı yenilediğinde

güncellenecektir.

## İki Şube İçin Ayarlama

Eğer iki şubeniz varsa (Eryaman ve İvedik), her iki Place ID'yi de environment variable olarak ekleyin. Kod otomatik olarak her iki şubeden de yorumları çekecektir.


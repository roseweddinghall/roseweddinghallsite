# Google Places API Key Oluşturma Rehberi

Eğer API key oluşturmak isterseniz (otomatik Place ID bulma için), işte adım adım rehber:

**📖 Daha detaylı rehber için:** `GOOGLE_API_KEY_ADIM_ADIM.md` dosyasına bakın.

## Adım 1: Google Cloud Console'a Giriş

1. [Google Cloud Console](https://console.cloud.google.com/) adresine gidin
2. Google hesabınızla giriş yapın
3. Eğer ilk defa kullanıyorsanız, kabul koşullarını onaylayın

## Adım 2: Yeni Proje Oluştur

1. Üst menüden **"Select a project"** dropdown'ına tıklayın
2. **"New Project"** butonuna tıklayın
3. Proje adını girin: **"Rose Wedding Hall Reviews"**
4. **"Create"** butonuna tıklayın
5. Projenin oluşturulmasını bekleyin (birkaç saniye)

## Adım 3: Billing Hesabı Ekleyin (Ücretsiz Tier Var!)

1. Sol menüden **"Billing"** seçin
2. **"Link a billing account"** butonuna tıklayın
3. Billing hesabı oluşturun (kredi kartı gerekli, ancak ücretsiz tier var)
4. **Önemli:** Google aylık $200 ücretsiz kredi veriyor. Bu çoğu durumda yeterli!

## Adım 4: Places API'yi Etkinleştir

1. Sol menüden **"APIs & Services" > "Library"** seçin
2. Arama kutusuna **"Places API"** yazın
3. **"Places API"** seçeneğine tıklayın (Places API New değil!)
4. **"Enable"** butonuna tıklayın
5. API'nin etkinleştirilmesini bekleyin

## Adım 5: API Key Oluştur

1. Sol menüden **"APIs & Services" > "Credentials"** seçin
2. Üstte **"Create Credentials"** butonuna tıklayın
3. **"API key"** seçeneğini seçin
4. API key'iniz oluşturulacak ve gösterilecek
5. **API key'i kopyalayın** (daha sonra kullanmak için)

## Adım 6: API Key Güvenliği (Önerilen)

1. Oluşan API key'in yanındaki **edit (kalem)** ikonuna tıklayın
2. **"Application restrictions"** altında **"HTTP referrers (web sitesi)"** seçin
3. **"Add an item"** butonuna tıklayın ve şu referrer'ları ekleyin:
   - `https://*.netlify.app/*`
   - `http://localhost:3000/*` (geliştirme için)
   - Eğer custom domain varsa: `https://yourdomain.com/*`
4. **"API restrictions"** altında **"Restrict key"** seçin
5. **"Places API"** seçeneğini işaretleyin
6. **"Save"** butonuna tıklayın

## Adım 7: Netlify'a Ekleyin

1. Netlify Dashboard'a gidin
2. Sitenizi seçin
3. **"Site settings" > "Environment variables"** sayfasına gidin
4. **"Add a variable"** butonuna tıklayın
5. Şunu ekleyin:
   - **Key**: `GOOGLE_PLACES_API_KEY`
   - **Value**: Oluşturduğunuz API key
6. **"Save"** butonuna tıklayın

## Adım 8: Deploy

1. Değişiklikleri commit edin ve push edin
2. Netlify otomatik olarak deploy edecek
3. Yorumlar sayfası açıldığında otomatik olarak Place ID'yi bulup yorumları çekecek!

## Maliyet Bilgisi

- **Ücretsiz Tier**: Aylık $200 kredi (genellikle yeterli)
- **Places API - Details**: İstek başına ~$0.017
- **Tahmini Kullanım**: Günde 10-20 istek = Ayda 300-600 istek = ~$5-10
- **Sonuç**: Çoğu durumda ücretsiz tier yeterli!

## Sorun Giderme

### API key çalışmıyor
- API key'in Places API için etkin olduğundan emin olun
- Referrer restrictions'ı kontrol edin
- Billing hesabının aktif olduğundan emin olun

### Yorumlar gelmiyorsa
- Browser console'da hata mesajlarını kontrol edin
- Netlify Function logs'ları kontrol edin
- API key'in doğru olduğundan emin olun


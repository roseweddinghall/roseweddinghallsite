# Google Places API Key Oluşturma - Adım Adım Rehber

Bu rehber, Google Cloud Console'da API key oluşturmanın her adımını detaylı olarak açıklar.

## 📋 Gereksinimler

- Google hesabı (Gmail hesabı yeterli)
- Kredi kartı (ücretsiz tier için, para çekilmez)

---

## ADIM 1: Google Cloud Console'a Giriş

1. Tarayıcınızda şu adresi açın: **https://console.cloud.google.com/**
2. Google hesabınızla giriş yapın (sağ üst köşeden)
3. Eğer ilk defa kullanıyorsanız:
   - Koşulları kabul edin
   - Ülke seçin (Türkiye)
   - Hizmet şartlarını kabul edin

---

## ADIM 2: Yeni Proje Oluşturma

1. Üst menüde (mavi çubukta) **"Select a project"** yazısına tıklayın
2. Açılan pencerede sağ üst köşede **"NEW PROJECT"** butonuna tıklayın
3. Proje bilgilerini girin:
   - **Project name**: `Rose Wedding Hall Reviews` (veya istediğiniz bir isim)
   - **Location**: `No organization` (veya varsa organization'ınızı seçin)
4. **"CREATE"** (Oluştur) butonuna tıklayın
5. Projenin oluşturulmasını bekleyin (5-10 saniye)
6. Proje oluşturulduktan sonra, üst menüden yeni oluşturduğunuz projeyi seçin

**✅ Kontrol**: Üst menüde proje adınız görünüyor mu? Görünüyorsa devam edebilirsiniz.

---

## ADIM 3: Billing Hesabı Bağlama (Ücretsiz Tier!)

**Önemli:** Google aylık $200 ücretsiz kredi veriyor. Bu çoğu durumda yeterli! Para çekilmez, sadece ücretsiz limitiniz dolunca uyarı alırsınız.

1. Sol menüden (üç çizgi ikonu) **"Billing"** seçeneğine tıklayın
2. Eğer billing hesabınız yoksa:
   - **"CREATE BILLING ACCOUNT"** butonuna tıklayın
   - Hesap adını girin: `Rose Wedding Hall`
   - Ülke: `Turkey`
   - Hesaplama yöntemi: Kredi kartı bilgilerinizi girin
   - **"SUBMIT AND ENABLE BILLING"** butonuna tıklayın
3. Billing hesabı oluşturulduktan sonra, projenizi bu hesaba bağlayın:
   - **"LINK A BILLING ACCOUNT"** butonuna tıklayın
   - Oluşturduğunuz billing hesabını seçin
   - **"SET ACCOUNT"** butonuna tıklayın

**✅ Kontrol**: Billing sayfasında "Linked projects" altında projeniz görünüyor mu?

---

## ADIM 4: Places API'yi Etkinleştirme

1. Sol menüden (üç çizgi ikonu) **"APIs & Services"** > **"Library"** seçeneğine tıklayın
2. Arama kutusuna (sayfanın üstünde) **"Places API"** yazın
3. Arama sonuçlarından **"Places API"** seçeneğine tıklayın
   - **⚠️ DİKKAT:** "Places API (New)" değil, sadece **"Places API"** seçin!
4. Açılan sayfada **"ENABLE"** (Etkinleştir) butonuna tıklayın
5. API'nin etkinleştirilmesini bekleyin (birkaç saniye)

**✅ Kontrol**: Sayfada "API enabled" yeşil onay işareti görünüyor mu?

---

## ADIM 5: API Key Oluşturma

1. Sol menüden **"APIs & Services"** > **"Credentials"** seçeneğine tıklayın
2. Sayfanın üstünde **"+ CREATE CREDENTIALS"** butonuna tıklayın
3. Açılan menüden **"API key"** seçeneğine tıklayın
4. API key'iniz oluşturulacak ve bir popup pencerede gösterilecek
5. **API key'i kopyalayın** (daha sonra kullanmak için)
   - Örnek format: `AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
6. Popup'ı kapatın (sağ üstteki X)

**✅ Kontrol**: Credentials sayfasında API key'iniz görünüyor mu? Görünüyorsa kopyalayın!

---

## ADIM 6: API Key Güvenliği Ayarlama (Önerilen)

**Neden gerekli?** API key'inizi herkesin kullanmasını önlemek için.

1. Credentials sayfasında, oluşturduğunuz API key'in yanında **kalem (edit)** ikonuna tıklayın
2. **"Application restrictions"** bölümünde:
   - **"HTTP referrers (web sitesi)"** seçeneğini seçin
   - **"ADD AN ITEM"** butonuna tıklayın
   - Şu referrer'ları ekleyin (her birini ayrı satıra):
     ```
     https://*.netlify.app/*
     http://localhost:3000/*
     ```
     - Eğer custom domain'iniz varsa (örn: roseweddinghall.com):
     ```
     https://roseweddinghall.com/*
     https://www.roseweddinghall.com/*
     ```
3. **"API restrictions"** bölümünde:
   - **"Restrict key"** seçeneğini seçin
   - Açılan listeden **"Places API"** seçeneğini işaretleyin
   - Diğer API'leri kaldırın (eğer varsa)
4. Sayfanın en altında **"SAVE"** (Kaydet) butonuna tıklayın
5. Değişikliklerin kaydedilmesini bekleyin

**✅ Kontrol**: API key'iniz kaydedildi mi? Sayfada görünüyor mu?

---

## ADIM 7: Netlify'a API Key Ekleme

1. **Netlify Dashboard**'a gidin: https://app.netlify.com
2. Giriş yapın
3. Sitenizi seçin (veya yeni site oluşturun)
4. Sol menüden **"Site settings"** seçeneğine tıklayın
5. Açılan menüden **"Environment variables"** seçeneğine tıklayın
6. **"Add a variable"** butonuna tıklayın
7. Şu bilgileri girin:
   - **Key**: `GOOGLE_PLACES_API_KEY`
   - **Value**: Google Cloud Console'dan kopyaladığınız API key
8. **"Save"** butonuna tıklayın

**✅ Kontrol**: Environment variables listesinde `GOOGLE_PLACES_API_KEY` görünüyor mu?

---

## ADIM 8: Deploy ve Test

1. Kodunuzu commit edin ve push edin:
   ```bash
   git add .
   git commit -m "Add Google Places API key"
   git push
   ```
2. Netlify otomatik olarak deploy edecek
3. Deploy tamamlandıktan sonra sitenize gidin
4. **Yorumlar sayfasına** gidin (`/yorumlar`)
5. Yorumların yüklendiğini kontrol edin

**✅ Kontrol**: Yorumlar sayfasında Google yorumları görünüyor mu?

---

## 🎉 Tamamlandı!

Artık Google yorumları otomatik olarak sitenize çekilecek!

### Ne Oldu?
- ✅ Google Cloud Console'da proje oluşturuldu
- ✅ Places API etkinleştirildi
- ✅ API key oluşturuldu ve güvenlik ayarları yapıldı
- ✅ Netlify'a API key eklendi
- ✅ Sistem otomatik olarak Place ID'yi bulup yorumları çekecek

### Sonraki Adımlar
- Yeni yorumlar otomatik olarak gelecek
- İstatistikler otomatik güncellenecek
- Her 30 dakikada bir yorumlar yenilenecek

---

## ❓ Sorun Giderme

### API key çalışmıyor
- API key'in doğru kopyalandığından emin olun
- Netlify'da environment variable'ın doğru yazıldığını kontrol edin
- Deploy'u yeniden yapın

### Yorumlar gelmiyorsa
- Browser console'u açın (F12) ve hata mesajlarını kontrol edin
- Netlify Function logs'ları kontrol edin
- Places API'nin etkin olduğundan emin olun

### Billing hesabı gerekli mi?
- Evet, ancak ücretsiz tier var ($200/ay)
- Para çekilmez, sadece limit dolunca uyarı alırsınız
- Çoğu durumda ücretsiz tier yeterli

---

## 📞 Yardım

Eğer bir adımda takıldıysanız, bana sorun. Adım adım yardımcı olabilirim!


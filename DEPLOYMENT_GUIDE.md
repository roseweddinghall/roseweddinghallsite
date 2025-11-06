# Domain Bağlama Rehberi - GoDaddy Domain ile

## Seçenek 1: Netlify ile Deploy (Önerilen - Ücretsiz)

### Adım 1: Production Build Oluşturma
```bash
npm run build
```
Bu komut `build` klasörü oluşturacak.

### Adım 2: Netlify'da Site Oluşturma
1. https://www.netlify.com adresine gidin ve ücretsiz hesap oluşturun
2. Dashboard'da "Add new site" > "Deploy manually" seçin
3. `build` klasörünü sürükle-bırak yaparak yükleyin
4. Site yayınlanacak ve size bir URL verilecek (örn: `your-site.netlify.app`)

### Adım 3: Domain Bağlama
1. Netlify Dashboard'da sitenize gidin
2. "Domain settings" > "Add custom domain" tıklayın
3. GoDaddy'den aldığınız domain'i girin (örn: `example.com`)
4. Netlify size DNS kayıtlarını gösterecek

### Adım 4: GoDaddy DNS Ayarları
1. GoDaddy hesabınıza giriş yapın
2. "My Products" > "DNS" bölümüne gidin
3. Aşağıdaki DNS kayıtlarını ekleyin/düzenleyin:

**A Kaydı:**
- Type: A
- Name: @
- Value: 75.2.60.5
- TTL: 600

**CNAME Kaydı:**
- Type: CNAME
- Name: www
- Value: your-site.netlify.app
- TTL: 600

**Not:** Netlify size özel IP adresleri verebilir, kontrol edin.

### Adım 5: SSL Sertifikası
Netlify otomatik olarak ücretsiz SSL sertifikası sağlar. Birkaç dakika içinde aktif olur.

---

## Seçenek 2: Vercel ile Deploy (Ücretsiz)

### Adım 1: Vercel'e Giriş
1. https://vercel.com adresine gidin
2. GitHub hesabınızla giriş yapın (veya email ile kaydolun)

### Adım 2: Projeyi Yükleme
1. "Add New Project" tıklayın
2. GitHub repository'nizi bağlayın (veya manuel yükleyin)
3. Build komutu: `npm run build`
4. Output directory: `build`
5. Deploy butonuna tıklayın

### Adım 3: Domain Bağlama
1. Proje ayarlarından "Domains" sekmesine gidin
2. Domain'inizi ekleyin
3. Vercel size DNS kayıtlarını gösterecek

### Adım 4: GoDaddy DNS Ayarları
Vercel'in verdiği DNS kayıtlarını GoDaddy'ye ekleyin.

---

## Seçenek 3: GoDaddy Hosting Kullanma

### Adım 1: GoDaddy Hosting Satın Alma
1. GoDaddy'den hosting paketi satın alın
2. cPanel erişimi alacaksınız

### Adım 2: Build Dosyalarını Yükleme
1. `npm run build` komutu ile build oluşturun
2. `build` klasöründeki TÜM dosyaları seçin
3. FTP veya cPanel File Manager ile `public_html` klasörüne yükleyin

### Adım 3: .htaccess Dosyası Oluşturma
React Router için `public_html` klasörüne `.htaccess` dosyası ekleyin:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

### Adım 4: Domain Ayarları
Domain zaten GoDaddy'de olduğu için otomatik bağlanır.

---

## Önemli Notlar

1. **Build Komutu:** Her değişiklikten sonra `npm run build` çalıştırıp yeni build'i yüklemelisiniz
2. **React Router:** SPA (Single Page Application) olduğu için tüm hosting servislerinde özel yapılandırma gerekebilir
3. **SSL:** Netlify ve Vercel otomatik SSL sağlar, GoDaddy hosting'de SSL sertifikası satın almanız gerekebilir
4. **Performans:** Netlify ve Vercel CDN kullanır, daha hızlı yükleme sağlar

---

## Hızlı Başlangıç (Netlify - En Kolay)

1. Terminal'de: `npm run build`
2. Netlify.com'a git, hesap oluştur
3. `build` klasörünü sürükle-bırak
4. Domain ekle
5. GoDaddy DNS ayarlarını yap
6. 24 saat içinde domain aktif olur

---

## Sorun Giderme

- **Domain çalışmıyor:** DNS değişikliklerinin yayılması 24-48 saat sürebilir
- **404 hatası:** .htaccess veya redirect kurallarını kontrol edin
- **SSL hatası:** Sertifikanın aktif olmasını bekleyin (birkaç dakika)


# Place ID'yi Hızlıca Bulma (API Key Olmadan)

API key olmadan Place ID'yi manuel olarak bulabilirsiniz. İşte en kolay yöntem:

## Adım 1: Google Maps'te İşletmeyi Açın

1. Tarayıcınızda şu linki açın: https://www.google.com/maps
2. Arama kutusuna **"Rose Wedding Hall"** yazın
3. İşletmeye tıklayın (sol panelde görünecek)

## Adım 2: Developer Console Kullanarak Place ID'yi Bulun

1. Google Maps'te işletme açıkken, **F12** tuşuna basın (Developer Tools açılır)
2. **Console** sekmesine tıklayın
3. Şu kodu yapıştırın ve **Enter**'a basın:

```javascript
// Yöntem 1: URL'den Place ID çıkarma
const url = window.location.href;
const match = url.match(/place\/([^\/\?]+)/);
if (match) {
  console.log('Place ID:', match[1]);
  // Place ID'yi kopyalayın
} else {
  console.log('Place ID bulunamadı, alternatif yöntem deneniyor...');
  
  // Yöntem 2: Sayfa içeriğinden çıkarma
  const scripts = Array.from(document.querySelectorAll('script'));
  for (let script of scripts) {
    const content = script.textContent || '';
    const placeIdMatch = content.match(/ChIJ[\w-]+/);
    if (placeIdMatch) {
      console.log('Place ID bulundu:', placeIdMatch[0]);
      break;
    }
  }
}
```

4. Console'da görünen Place ID'yi kopyalayın (genellikle `ChIJ...` ile başlar)

## Adım 3: Alternatif Yöntem - URL'den Direkt

Eğer yukarıdaki yöntem çalışmazsa:

1. Google Maps'te işletme açıkken, tarayıcı adres çubuğundaki URL'yi kopyalayın
2. URL şöyle görünecek:
   ```
   https://www.google.com/maps/place/Rose+Wedding+Hall/@39.96508,32.60565,17z/data=!3m1!4b1!4m6!3m5!1s0x14d3310014785ee5:0xf44e225c440017f2!8m2!3d39.965076!4d32.6082315!16s%2Fg%2F11y68dlz14
   ```
3. URL'de `16s%2Fg%2F` kısmını arayın. Sonrasındaki kısım Place ID olabilir (decode edilmiş hali: `/g/11y68dlz14`)

## Adım 4: Place ID Formatı

Place ID genellikle şu formattadır:
- **Yeni format**: `ChIJ...` (örn: `ChIJN1t_tDeuEmsRUsoyG83frY4`)
- **Plus Code**: `/g/...` (örn: `/g/11y68dlz14`)

**Not:** Plus Code formatı için önce `ChIJ` formatını bulmak daha iyi.

## Adım 5: Place ID'yi Test Edin

Place ID'yi bulduktan sonra test etmek için (API key gerekmez):

1. Şu URL'yi tarayıcıda açın (Place ID'yi değiştirin):
   ```
   https://www.google.com/maps/place/?q=place_id:ChIJ...
   ```
2. Eğer doğru işletmeyi gösteriyorsa, Place ID doğrudur!

## Adım 6: Netlify'a Ekleyin

Place ID'yi bulduktan sonra:

1. Netlify Dashboard → Site settings → Environment variables
2. Şunu ekleyin:
   ```
   REACT_APP_GOOGLE_PLACE_ID_ERYAMAN = ChIJ... (bulduğunuz Place ID)
   ```
3. Deploy edin

## İki Şube İçin

Eryaman ve İvedik şubeleri için ayrı ayrı Place ID bulmanız gerekiyor:

1. **Eryaman Şubesi**: "Rose Wedding Hall Eryaman" ile arama yapın
2. **İvedik Şubesi**: "Rose Wedding Hall İvedik" ile arama yapın
3. Her ikisi için de Place ID'yi bulun
4. Netlify'a ekleyin:
   ```
   REACT_APP_GOOGLE_PLACE_ID_ERYAMAN = ChIJ... (Eryaman Place ID)
   REACT_APP_GOOGLE_PLACE_ID_IVEDIK = ChIJ... (İvedik Place ID)
   ```

## Hızlı Çözüm

Eğer yukarıdaki yöntemler işe yaramazsa, bana Google Maps'te işletmeyi açtığınızda tarayıcı adres çubuğundaki **tam URL'yi** gönderin. Ben Place ID'yi çıkarabilirim.


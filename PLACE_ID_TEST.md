# Place ID Test ve Bulma

Verdiğiniz embed linkinden şu bilgileri çıkarabildim:
- İşletme Adı: Rose Wedding Hall
- Koordinatlar: 39.96508008300705, 32.60565657440811

## Place ID'yi Bulmak İçin:

### Yöntem 1: Google Maps Web Sitesinden
1. https://www.google.com/maps adresine gidin
2. Arama kutusuna "Rose Wedding Hall" yazın
3. İşletmeye tıklayın
4. Tarayıcı adres çubuğundaki URL'yi kontrol edin
5. URL şöyle görünecek: `https://www.google.com/maps/place/Rose+Wedding+Hall/@39.96508,32.60565...`
6. URL'deki `@` işaretinden sonraki koordinatları veya `data-id` parametresini kontrol edin

### Yöntem 2: Developer Tools ile
1. Google Maps'te işletmeyi açın
2. F12 tuşuna basın (Developer Tools)
3. Console sekmesine gidin
4. Şu komutu çalıştırın:
   ```javascript
   document.querySelector('[data-place-id]')?.getAttribute('data-place-id')
   ```
   veya
   ```javascript
   window.google?.maps?.places?.PlaceResult
   ```

### Yöntem 3: Google Places API Text Search (Otomatik)
Kodda otomatik olarak "Rose Wedding Hall" ve adresi ile arama yapıyoruz. Bu şekilde Place ID bulunabilir.

## Test İçin:

Eğer Google Places API key'iniz varsa, şu URL'yi tarayıcıda test edebilirsiniz:

```
https://maps.googleapis.com/maps/api/place/textsearch/json?query=Rose%20Wedding%20Hall%20Yeşilova%204016%20Cad&key=YOUR_API_KEY&language=tr&region=tr
```

Bu URL size Place ID'yi döndürecektir.

## Hızlı Çözüm:

En kolay yol: Google Maps'te işletmeyi açın, URL'yi kopyalayın ve bana gönderin. URL şöyle olmalı:
`https://www.google.com/maps/place/...`


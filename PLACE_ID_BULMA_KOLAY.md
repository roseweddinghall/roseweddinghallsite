# Place ID Bulma - En Kolay Yöntem

Embed linkinden Place ID çıkaramıyoruz. İşte en kolay yöntem:

## Adım Adım:

### 1. Google Maps'te İşletmeyi Açın
1. Tarayıcınızda şu linki açın: https://www.google.com/maps
2. Arama kutusuna "Rose Wedding Hall" yazın
3. İşletmeye tıklayın

### 2. Place ID'yi Bulun
İki yöntem var:

#### Yöntem A: URL'den (En Kolay)
1. Google Maps'te işletme açıkken, tarayıcı adres çubuğundaki URL'ye bakın
2. URL şöyle olacak:
   ```
   https://www.google.com/maps/place/Rose+Wedding+Hall/@39.96508,32.60565,17z/data=!3m1!4b1!4m6!3m5!1s0x14d3310014785ee5:0xf44e225c440017f2!8m2!3d39.96508!4d32.60565!16s...
   ```
3. URL'deki `data=!3m1!4b1!4m6!3m5!1s` kısmından sonra gelen `0x14d3310014785ee5:0xf44e225c440017f2` kısmını kopyalayın

#### Yöntem B: Developer Console (Alternatif)
1. Google Maps'te işletme açıkken, **F12** tuşuna basın (Developer Tools)
2. **Console** sekmesine gidin
3. Şu kodu yapıştırın ve Enter'a basın:
   ```javascript
   window.location.href.match(/place\/([^\/]+)/)?.[1]
   ```
   veya
   ```javascript
   document.querySelector('meta[property="og:url"]')?.content
   ```

### 3. Place ID Formatı
Place ID genellikle şu formatta olur:
- `ChIJ...` (yeni format)
- veya `0x...:0x...` (eski format)

Her iki format da çalışır.

## Hızlı Test

Place ID'yi bulduktan sonra, şu linki tarayıcıda açarak test edebilirsiniz (API key'iniz varsa):

```
https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=reviews,rating,user_ratings_total&key=YOUR_API_KEY
```

## Alternatif: Google Maps Linkini Paylaşın

Eğer yukarıdaki yöntemler işe yaramazsa, Google Maps'te işletmeyi açıp tarayıcı adres çubuğundaki **tam URL'yi** kopyalayıp bana gönderin. Ben Place ID'yi çıkarabilirim.

**Örnek URL formatı:**
```
https://www.google.com/maps/place/Rose+Wedding+Hall/@39.96508,32.60565,17z/...
```


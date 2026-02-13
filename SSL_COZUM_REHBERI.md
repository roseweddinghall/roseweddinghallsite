# SSL Hatası Hızlı Çözüm Rehberi

Siteniz şu an "Bağlantınız gizli değil" hatası veriyor çünkü SSL sertifikasının Netlify üzerinde aktif edilmesi gerekiyor.

### Çözüm Adımları:

1. **Netlify Paneline Girin:** [https://app.netlify.com/](https://app.netlify.com/)
2. **Sitenizi Seçin:** `jovial-capybara-1fbaa2` isimli sitenize tıklayın.
3. **Ayarlara Gidin:** Sol menüden **Domain settings** > **HTTPS** yolunu izleyin.
4. **Sertifikayı Başlatın:** "SSL/TLS certificate" bölümünde mavi renkli **Verify DNS configuration** veya **Provision certificate** butonuna tıklayın.

**Not:** Bu işlemi yaptıktan sonra sitenizin düzelmesi yaklaşık 5-10 dakika sürecektir.

---
**Eğer düzelmezse:** GoDaddy panelinizdeki **A kaydının** değerinin `75.2.60.5` olduğundan emin olun.

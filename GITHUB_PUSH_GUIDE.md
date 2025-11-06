# GitHub'a Push Yapma Rehberi

## Önkoşul: Git Yükleme

Eğer Git yüklü değilse:
1. https://git-scm.com/download/win adresinden Git'i indirin
2. Kurulumu tamamlayın
3. Terminal/PowerShell'i yeniden başlatın

## GitHub'a Push Adımları

### 1. Git Repository'sini Başlat
```bash
git init
```

### 2. Remote Repository Ekle
```bash
git remote add origin https://github.com/roseweddinghall/roseweddinghallsite.git
```

### 3. Tüm Dosyaları Stage'e Ekle
```bash
git add .
```

### 4. İlk Commit Yap
```bash
git commit -m "Initial commit: Rose Wedding Hall website"
```

### 5. Branch'i Main Olarak Ayarla (Eğer master kullanıyorsa)
```bash
git branch -M main
```

### 6. GitHub'a Push Yap
```bash
git push -u origin main
```

## Alternatif: GitHub Desktop Kullanma

1. https://desktop.github.com/ adresinden GitHub Desktop'ı indirin
2. GitHub hesabınızla giriş yapın
3. "File" > "Add Local Repository" seçin
4. Proje klasörünü seçin
5. "Publish repository" butonuna tıklayın
6. Repository adını girin: `roseweddinghallsite`
7. "Publish" butonuna tıklayın

## Sorun Giderme

### Eğer "remote origin already exists" hatası alırsanız:
```bash
git remote remove origin
git remote add origin https://github.com/roseweddinghall/roseweddinghallsite.git
```

### Eğer authentication hatası alırsanız:
- GitHub'da Personal Access Token oluşturun
- Token ile push yapın veya GitHub Desktop kullanın

### Eğer "branch main does not exist" hatası alırsanız:
```bash
git checkout -b main
git push -u origin main
```


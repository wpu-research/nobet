# Nöbet

"Nöbet": gününe, uykuna ve tabağına nöbet tutan bir yapay zekâ hayat koçu için yatırımcı/tanıtım sayfası. Tek sayfalık statik bir sitedir; gerçek bir uygulama arka ucu yoktur.

## Sayfada anlatılanlar

Takvimin hatırlatmasından öte, programa uyumu takip eden asistan fikri; "analize başla" akışı; zaman koçundan hayat koçuna geçiş; plandan alışkanlığa dört adım; kurucunun kendi haftasıyla test; hassas veri ve açık kurallar; ders, rutin, yol, yemek gibi alanlar; freemium abonelik. Solda anlatı, sağda telefon maketi yer alır; dar ekranda telefon üste geçer.

## Dosyalar

| Dosya | Ne var |
| --- | --- |
| `index.html` | Sayfanın tamamı (HTML, CSS, JS) |
| `server.mjs` | `index.html`'i güvenlik başlıklarıyla ve `noindex` ile sunan küçük Node sunucusu |
| `package.json` | `npm start` betiği |

## Teknoloji

Saf HTML/CSS/JS, Node.js >= 20 (yalnız yerleşik `http` modülü, bağımlılık yok). Yazı tipleri Google Fonts'tan yüklenir.

## Kurulum ve çalıştırma

```bash
npm start      # http://localhost:8080
```

## Ortam değişkenleri (yalnız ad)

`PORT` (varsayılan 8080)

## Lisans

Lisans belirtilmemiş.

# Redux Uygulama Projesi

## `Kurulum`
Bos bir klasor olusturun ve klasor adini, projeye vereceginiz isim ile isimlendirin.

Olusturdugunuz klasoru VS Code editoru ile acin.

VS Code icerisinde Terminal penceresini acarak asagidaki komutu calistirin.

Bu komut proje dosyalarinin klasorunuz icerisine klonlanmasini saglayacaktir. 

```
git clone https://github.com/mrtarikozturk/redux-inclass.git .

```

Projeyi klonladiktan sonra asagidaki komutu calistirarak projede kullanilan kutuphanelerin indirilmesini saglayin. Bu komutu calistirmadiginiz surece hata alacaksiniz.
  
```
npm install
```

Bu komut calistirildiktan sonra `package.json` dosyasi icerisinde asagidaki kutuphane isimlerinin olup olmadigini kontrol edin.

## `Kullanilan Kutuphaneler`

- `redux` : 
    State management kutuphanesidir. React'ten bagimsiz olarak baska platformlar ile de kullanilabilir.
- `redux-thunk` : Redux ile birlikte thunk teknolojisini kullanabilmek icin kullanilan kutuphanedir.
- `react-redux` : Redux kutuphanesi ile olusturulan `store` ile React'in haberlesebilmesi icin kullanilan kutuphanedir.
- `axios` : API istekleri yapabilmek icin kullanilan kutuphanedir.
- `react-router-dom` : Proje icerisinde farkli URL'ler olusturup bunlar arasinda gezinebilmeyi saglayan kutuphanedir.

- `@mui/material-ui` 
- `@emotion/react` 
- `@emotion/styled` 
- Bu uc kutuphane de material-ui kullanabilmek icin gerekli kutuphanelerdir.

## Proje Mimarisi
`src` klasoru altinda `pages` ve `router` isimli iki klasor goreceksiniz.

`pages` klasoru altinda uygulama icesindeki sayfalarimiz, `router` klasoru icerisindeki `index` dosyasi icerisinde ise bu sayfalara hangi url ile gidilecegini gosteren router yapisi bulunmaktadir.

- page: Main url: /
- page: News url: /news


Proje mimarisi redux modulu eklenerek gelistirilecek.





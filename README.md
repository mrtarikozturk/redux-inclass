# Redux Nedir, Nasil Uygulanir Projesi

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

## `Proje Mimarisi`
`src` klasoru altinda `pages` ve `router` isimli iki klasor goreceksiniz.

`pages` klasoru altinda uygulama icesindeki sayfalarimiz, `router` klasoru icerisindeki `index` dosyasi icerisinde ise bu sayfalara hangi url ile gidilecegini gosteren router yapisi bulunmaktadir.

- page: Main url: /
- page: News url: /news


Proje mimarisi redux modulu eklenerek gelistirilecek.

## `Kullanilacak API'ler`: 
- https://jsonplaceholder.typicode.com/users
- https://bing-news-search1.p.rapidapi.com/news

## `Kullanilacak Araclar`
- `Redux Dev Tools` : Chrome uzerinde calisan ve global state uzerinde yapilan tum degisikliklerin takip edilmesini saglayan tarayici uzantisidir. Indirmek icin [tiklayiniz.](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-ntp-icon)

- `Make Hidden` : VS Code uzantisidir. Proje uzerinde gelistirme yaparken gelistirme sirasinda proje klasoru icerisinde gormek istemedginiz dosya ve klasorlarin gizlenmesini saglar. Boylece daha sade bir explorer penceresi elde edersiniz. Indirmek icin [tiklayiniz](https://marketplace.visualstudio.com/items?itemName=devine-davies.make-hidden)



## `Kullanilacak Snippet'lar`:
1. Adim VS Code'un sol alt tarafinda bulunan `Ayarlar` iconuna tiklayin
2. Acilan pencerede `User Snippet` sekmesine tiklayin.
3. Acilan pencereden `javascript.json` dosyasini aratin ve tiklayarak dosyanin acilmasini saglayin.
4. Acilan dosya icerisindeki {} paratezleri icerisinde asagidaki kodlari yapistirin.
5. Herhangi bir `js` uzantili dosya icerisinde `rdx-type`, `rdx-c`, `rdx-r`, `rdx-s`, `rdx-thunk`, `rdx-a`, `rdx-aa` ifadelerini yazdiktan sonra enter tusuna basarak snippet'larin calisip calismadigini kontrol ediniz. 

```json
"Create Redux Type": {
  "prefix": "rdx-type",
  "body": [
    "export const ${1:TYPE} = '${1:TYPE}';$0"
  ],
  "description": "Create Redux Type"
},
"Create Redux Case": {
  "prefix": "rdx-c",
  "body": [
    "case ${1:typeName}:",
    "    return {",
    "        ...state,",
    "        ${2:variableName}: payload,",
    "    };$0"
  ],
  "description": "rdx-case"
},
"Create Redux Reducer": {
  "prefix": "rdx-r",
  "body": [
    "export const $1Reducer = (state = initialState, { type, payload }) => {",
    "    switch (type) {",
    "        case ${2:typeName}:",
    "            return {",
    "                ...state,",
    "                ${3:variableName}: payload,",
    "            };$0",
    "        default:",
    "            return state;",
    "    }",
    "}",
    "",
    "export default $1Reducer;"
  ],
  "description": "Create Redux Reducer"
},
"Create Redux Action": {
  "prefix": "rdx-a",
  "body": [
    "export const ${1:actionName} = () => ({ type: ${2:type} });"
  ],
  "description": "Create Redux Action"
},
"Create Redux Action With Payload": {
  "prefix": "rdx-aa",
  "body": [
    "export const ${1:actionName}Action = (${3:parameter}) => ({ type: ${2:type}, payload: ${3:parameter} });"
  ],
  "description": "Create Redux Action"
},
"Create Redux Thunk": {
  "prefix": "rdx-tunk",
  "body": [
    "export const ${1:thunkName} = ($2) => async (dispatch, getState) => {",
    "    try {",
    "        $3",
    "    } catch (error) {",
    "        console.log(error);$4",
    "    } finally {",
    "        $5",
    "    }",
    "}"
  ],
  "description": "Create Redux Thunk"
},
"Create Redux Store": {
  "prefix": "rdx-s",
  "body": [
    "import { applyMiddleware, createStore, compose } from 'redux';",
    "import thunk from 'redux-thunk';",
    "",
    "import rootReducer from '$1';",
    "",
    "let store;",
    "",
    "if (process.env.NODE_ENV === 'development') {",
    "    store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));",
    "} else {",
    "    store = createStore(rootReducer, applyMiddleware(thunk));",
    "}",
    "",
    "export default store;"
  ],
  "description": "Redux Create Store"
}

```





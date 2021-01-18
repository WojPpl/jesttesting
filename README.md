# Testowanie aplikacji React za pomocą JEST

JEST jest prostym w użyciu frameworkiem stworzonym do testowania JavaScript

## Instalacja i odpalanie

Po sklonowaniu repozytorium [jesttesting](https://github.com/WojPpl/jesttesting) należy wykonać w katalogu projektu następujące polecenia:

```bash
npm install
```
Zostaną zainstalowane moduły zależności zawarte w pliku package.json

```bash
npm start
```
Odpali aplikację React (adres przeglądarki [http://localhost:3000/](http://localhost:3000/) )

```bash
npm test
```
Odpali testy JEST w terminalu

## Przykłady z repozytorium

```javascript
var oldUnload = window.onbeforeunload; //komentarz
window.onbeforeunload = function() {
    saveCoverage();
    if (oldUnload) {
        return oldUnload.apply(this, arguments);
    }
};
```

## Licencja
[MIT](https://choosealicense.com/licenses/mit/)
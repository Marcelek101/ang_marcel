# ang_marcel

Zbiór projektów Angular — ćwiczenia i eksperymenty z frameworkiem.

## Wymagania

- [Node.js](https://nodejs.org/) v18+
- Angular CLI (instalacja globalna opcjonalna — projekty używają lokalnego `npx ng`)

## Jak uruchomić projekt

Każdy projekt jest niezależny. Wejdź do katalogu, zainstaluj zależności i uruchom serwer deweloperski:

```bash
cd <nazwa-projektu>
npm install
npx ng serve
```

Aplikacja będzie dostępna pod adresem `http://localhost:4200`.

Jeśli chcesz uruchomić kilka projektów jednocześnie, użyj innego portu:

```bash
npx ng serve --port 4201
```

---

## Projekty

| Katalog | Opis | Port (przykładowy) |
|---|---|---|
| `first-project3` | Główna aplikacja — logowanie, profil użytkownika, routing, animacje, zdjęcia | 4200 |
| `root` | Wcześniejsza wersja `first-project3` | 4201 |
| `banners` | Wyświetlanie banerów | 4202 |
| `cytaty` | Cytaty z bazą danych i rankingiem | 4203 |
| `lista` | Lista zadań (todo) | 4204 |
| `words` | Quiz do nauki słówek — pytania i odpowiedzi | 4205 |
| `inport` | Demo współdzielonego serwisu (`UserService`) między komponentami | 4206 |
| `HTTP` | Nauka Angular `HttpClient` — pobieranie danych z API | 4207 |
| `HTTP2` | Rozwinięcie HTTP — komponent `data-display` | 4208 |
| `HTTP3` | HttpClient z zewnętrznym API (dzieła sztuki) | 4209 |
| `rxjs` | Demo RxJS — komunikacja między komponentami przez serwis | 4210 |
| `angular-movie-db-routing-example-master` | Przykładowa baza filmów z routingiem | 4211 |

---

## GitHub Pages

Projekt `first-project3` jest wdrożony na GitHub Pages z katalogu `docs/`:

**https://marcelek101.github.io/ang_marcel/**

Aby zbudować i zaktualizować wersję produkcyjną:

```bash
cd first-project3
npx ng build --base-href=/ang_marcel/ --output-path=../docs
git add ../docs
git commit -m "build: update GitHub Pages"
git push
```

# Studio Melusiné

Одностраничное портфолио на React 19 + Vite + TypeScript. Стили перенесены из прототипа `Studio Melusiné.html`.

## Сайт

**GitHub Pages:** https://illiaGoncharov.github.io/studio-melusine/

Публикация: push в `main` → workflow `.github/workflows/deploy-pages.yml`.

## Команды

```bash
npm install
npm run dev
npm run build
GITHUB_PAGES=true npm run build   # сборка как на Pages
```

После правки исходного HTML с данными:

```bash
python3 scripts/extract_portfolio.py
```

Скрипт обновляет `src/data/_portfolio.generated.json` и файлы в `public/media/`.

## Видео

Для **The Nude Party Show** положите файл по пути  
`public/media/stage/the-nude-party-show/video.mp4` — в прототипе ссылка была на отсутствующий `/_blob/…`.
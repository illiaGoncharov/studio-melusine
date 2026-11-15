# Studio Melusiné

Сайт-портфолио архитектора и spatial artist Nicole Girdo: три колонки (био, проекты, CV), модалки с проектами, тёмная тема по системным настройкам.

Исходный одностраничный прототип — [`Studio Melusiné.html`](./Studio%20Melusin%C3%A9.html). Визуал и поведение перенесены в React-приложение; менялись только структура кода и способ хранения медиа.

## Живой сайт

**https://illiaGoncharov.github.io/studio-melusine/**

Обновление: любой push в ветку `main` запускает [деплой на GitHub Pages](.github/workflows/deploy-pages.yml).

## Стек

- React 19, TypeScript, Vite
- Tailwind CSS 4 (подключён; основные стили — из прототипа в `src/index.css`)
- Шрифт Space Mono (`@fontsource/space-mono`)
- Данные проектов — JSON + файлы в `public/media/`

## Быстрый старт

```bash
git clone https://github.com/illiaGoncharov/studio-melusine.git
cd studio-melusine
npm install
npm run dev
```

Локальный адрес: http://localhost:5173/

Проверка production-сборки:

```bash
npm run build
npm run preview
```

Сборка **как на GitHub Pages** (base `/studio-melusine/`):

```bash
GITHUB_PAGES=true npm run build
```

## Как править контент

| Что менять | Где |
|------------|-----|
| Текст слева, ссылки Contact / Telegram | [`src/data/bio.ts`](src/data/bio.ts) |
| CV справа | [`src/data/cv.ts`](src/data/cv.ts) |
| Категории и проекты | [`src/data/_portfolio.generated.json`](src/data/_portfolio.generated.json) и `public/media/` |

Структура проекта в портфолио задаётся полями `title`, `client`, `loc`, `year`, `type`, `short`, `long`, `imgs`, `alt`, опционально `video` и `fit` (`cover` \| `contain`). Типы — [`src/types/portfolio.ts`](src/types/portfolio.ts).

### Если правили старый HTML

Из корня репозитория (нужен Python 3):

```bash
npm run extract:portfolio
# или: python3 scripts/extract_portfolio.py
```

Скрипт читает массив `D` из `Studio Melusiné.html`, вытаскивает JPEG в `public/media/…` и перезаписывает `src/data/_portfolio.generated.json`.

### Видео The Nude Party Show

В прототипе ссылка на видео была битой. Положите файл:

`public/media/stage/the-nude-party-show/video.mp4`

## Структура проекта

```text
src/
  components/layout/   колонки, шапки, часы
  features/            bio, cv, portfolio (карточки, модалка)
  data/                тексты и каталог
  hooks/               scroll spy, часы, блокировка скролла
  lib/                 группировка категорий, URL медиа для Pages
public/media/          изображения проектов
scripts/               extract_portfolio.py
```

## Лицензия

Контент и медиа — Studio Melusiné / Nicole Girdo. Код репозитория — по усмотрению владельца репозитория.
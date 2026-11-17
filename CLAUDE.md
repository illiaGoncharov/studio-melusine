# Инструкции для Claude / AI

Репозиторий: **illiaGoncharov/studio-melusine** (React + Vite). PR → merge в `main` → https://illiaGoncharov.github.io/studio-melusine/

Полные правила: [CONTRIBUTING.md](./CONTRIBUTING.md)

## Workflow (всегда)

1. `git pull origin main` на `main`, затем новая ветка `feat/…` | `content/…` | `fix/…`.
2. Один PR = одна логическая задача.
3. Коммит: Conventional Commits (см. ниже).
4. Push ветки → `gh pr create --base main` с Summary + Test plan.
5. Не пушить в `main`, не merge PR в fork — только PR в upstream.

## Перед правками

1. Контент: `src/data/bio.ts`, `src/data/cv.ts`, `src/data/_portfolio.generated.json`, `public/media/`.
2. Новый проект: JSON + файлы в `public/media/<category-id>/<slug>/`. Пустые фото: `"imgs": []`.
3. Не ломай визуал `src/index.css` / прототип без запроса.
4. Не запускай `extract_portfolio.py` при ручных правках JSON.
5. Не трогай `vite.config.ts` / workflows без явного запроса.

## Git (обязательно)

- Коммит: `type(scope): subject` — **английский**, imperative, ≤72 символов.
- PR title: короткий английский; body: `## Summary`, `## Test plan`.
- Перед PR: `npm run dev`; желательно `npm run build`.

## Типы коммитов (кратко)

| type | когда |
|------|--------|
| `feat` | новый проект, новая фича UI |
| `fix` | баг |
| `content` | только тексты/CV/био без кода |
| `assets` | только картинки/видео в `public/media` |
| `docs` | README, CONTRIBUTING |
| `chore` | deps, CI, скрипты |
| `refactor` | код без смены поведения |
| `style` | только CSS/вёрстка |

Scopes: `portfolio`, `bio`, `cv`, `ui`, `media`, `deps`, `ci`.
# Участие в проекте

## Репозиторий и роли

| | |
|---|---|
| **Канонический репо** | https://github.com/illiaGoncharov/studio-melusine |
| **Сайт** | https://illiaGoncharov.github.io/studio-melusine/ |
| **Деплой** | merge в `main` → GitHub Actions |
| **Merge PR** | maintainer (Illia) |

Fork `nicolegirdo/studio-melusine` — не обязателен, если есть collaborator. Если fork есть: **Sync fork → Update branch** после каждого merge в upstream, не **Discard**.

**Один PR = одна задача** (один проект, или только CV, или только био). Не смешивай несвязанные правки.

## Ежедневный workflow

```bash
git checkout main
git pull origin main          # всегда перед новой веткой
git checkout -b feat/short-name
# правки → npm run dev
git add .
git commit -m "type(scope): subject"
git push -u origin feat/short-name
gh pr create --base main
```

После merge твоей ветины: снова `git checkout main && git pull`.

## Как добавить проект в портфолио

1. Найди категорию в `src/data/_portfolio.generated.json` (поле `id`).
2. Добавь объект в `projects` (см. соседние проекты). Пустые фото: `"imgs": []`.
3. Картинки: `public/media/<category-id>/<slug>/0.jpg`, `1.jpg`, …  
   Slug — латиница через дефис, из `title` (как в существующих папках).
4. В JSON: `"imgs": ["/media/<category-id>/<slug>/0.jpg", …]` — пути **с ведущим /**.
5. Видео (если есть): `public/media/.../video.mp4` и поле `video`.
6. `npm run dev` — карточка, номер в списке, модалка.
7. PR по шаблону ниже.

**Не запускай** `npm run extract:portfolio` после ручных правок JSON — скрипт пересоберёт каталог из HTML и может затереть проекты.

## Где что править

| Задача | Файлы |
|--------|--------|
| Био, контакты | `src/data/bio.ts` |
| CV | `src/data/cv.ts` |
| Проекты | `_portfolio.generated.json` + `public/media/` |
| Внешний вид / вёрстка | `src/index.css`, компоненты в `src/features/` |
| Деплой, base URL | `vite.config.ts`, `.github/workflows/` — только с согласованием |

## Чего избегать

- Прямой push в `main` (кроме maintainer по договорённости).
- Коммитить `.env`, токены, личные ключи.
- Менять дизайн/анимации «на глаз» без проверки с прототипом.
- Merge PR у себя в **fork** вместо PR в **illiaGoncharov** (дублирует историю и путает Sync fork).
- Огромные PR (десятки мегабайт картинок) без сжатия — по возможности сжимать JPEG перед коммитом.

## Настройка один раз (contributor)

```bash
gh auth login    # аккаунт nicolegirdo
git clone https://github.com/illiaGoncharov/studio-melusine.git
cd studio-melusine && npm install
```

Claude / Cursor: открыть **эту** папку и прочитать [CLAUDE.md](./CLAUDE.md).

## Ветки

```text
main              — только через PR, сюда деплоится сайт
feat/…            — новая фича или проект в портфолио
fix/…             — исправление бага
content/…         — правки текстов
```

Пример: `feat/suzdal-exhibition`, `content/cv-triumph`

## Conventional Commits

Формат **одной строки** для `git commit -m`:

```text
<type>(<scope>): <subject>
```

- **subject** — английский, глагол в повелительном наклонении (*add*, *update*, *fix*), без точки в конце, **до 72 символов**.
- Опционально тело (`git commit` без `-m` или второй абзац): что и зачем.

### Типы

| type | назначение |
|------|------------|
| `feat` | новый проект в каталоге, новое поведение UI |
| `fix` | исправление ошибки |
| `content` | био, CV, тексты в JSON без логики |
| `assets` | только файлы в `public/media/` |
| `docs` | README, CONTRIBUTING, CLAUDE |
| `style` | CSS / вёрстка без смены логики |
| `refactor` | рефакторинг |
| `chore` | зависимости, CI, скрипты |
| `ci` | только `.github/workflows` |

### Scopes (выбирай один)

`portfolio` · `bio` · `cv` · `ui` · `media` · `deps` · `ci`

### Примеры

```text
feat(portfolio): add Suzdal Kremlin exhibition entry
content(cv): update Triumph Gallery employment details
assets(media): add installation project photos
fix(ui): handle empty project image list
docs: add contributing and commit conventions
chore(deps): bump vite
```

## Pull Request

### Title

Совпадает с **subject** коммита (или главного коммита в ветке), с префиксом типа можно в title опустить:

- **Title:** `Add Suzdal Kremlin exhibition entry`  
- или строго: `feat(portfolio): add Suzdal Kremlin exhibition entry`

### Body (шаблон)

```markdown
## Summary
- 

## Test plan
- [ ] `npm run dev` — страница открывается
- [ ] Изменённый раздел на месте (bio / CV / категория / модалка)
- [ ] `npm run build` (по возможности)
```

### Команды

```bash
git checkout main && git pull origin main
git checkout -b feat/my-change

# …правки…

git add .
git commit -m "feat(portfolio): add example project"
git push -u origin feat/my-change

gh pr create --base main \
  --title "Add example project to portfolio" \
  --body "## Summary
- Added project X to category Y

## Test plan
- [ ] npm run dev
- [ ] Modal opens"
```

## Cursor / Claude

- Правила Cursor: [.cursor/rules/conventional-commits.mdc](.cursor/rules/conventional-commits.mdc)
- Кратко для Claude: [CLAUDE.md](./CLAUDE.md)
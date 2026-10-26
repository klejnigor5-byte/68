
# ДЗ 68.1 — Практична робота з Docker, Express та MongoDB

## Опис проєкту

Проєкт демонструє запуск Express-додатка та MongoDB у Docker-контейнерах за допомогою Docker Compose.

### Використані технології

- Node.js (node:lts)
- Express.js
- MongoDB
- Mongoose
- Docker
- Docker Compose
- Nodemon

## Структура проєкту

```text
docker-express-mongodb/
├── src/
│   └── app.js
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md
```

## Вимоги

- Встановлений Docker Desktop.
- Запущений Docker Engine.
- Git для завантаження проєкту на GitHub.

## Запуск проєкту

Клонуйте репозиторій або відкрийте папку проєкту в терміналі.

Зберіть образ і запустіть контейнери:

```bash
docker compose up --build
```

Після успішного підключення MongoDB сервер буде доступний на порту 3000.

## Перевірка роботи

Головна сторінка:

http://localhost:3000

Перевірка стану сервера та бази даних:

http://localhost:3000/health

Очікувана відповідь `/health`:

```json
{
  "status": "OK",
  "server": "Express",
  "database": "connected"
}
```

## Автоматичне оновлення коду

Docker Compose монтує локальну папку проєкту в контейнер через volume.

Змініть текст привітання у файлі `src/app.js` і збережіть файл. Nodemon має автоматично перезапустити сервер. Оновіть сторінку браузера, щоб побачити зміни.

## Перегляд контейнерів і журналів

```bash
docker compose ps
docker compose logs -f app
docker compose logs -f mongo
```

## Зупинка контейнерів

```bash
docker compose down
```

Щоб зупинити контейнери та видалити також том із даними MongoDB:

```bash
docker compose down -v
```

Увага: команда `docker compose down -v` видаляє збережені дані бази даних.

## Висновок

У ході практичної роботи створено Express-додаток, Dockerfile та конфігурацію Docker Compose. Налаштовано взаємодію з MongoDB через змінну середовища `MONGODB_URI`, синхронізацію коду через volumes і автоматичне оновлення сервера під час розробки.

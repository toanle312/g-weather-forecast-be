# G Weather Forcast - BE

This is a backend for https://github.com/toanle312/g-weather-forecast-fe

This project is built on [NestJS](https://nestjs.com/) and use [Prisma ORM](https://www.prisma.io/) and [Neon Postgres](https://neon.tech/) to build REST API

# How to run this project locally

- Required: Node (20.11.1), npm (10.2.4)
- Clone this repo to your device and run:
  ```bash
    npm i
  ```
- Config your `.env`

  ```env
    # common
    API_KEY=Your weather api key
    LOCAL_DEV_HOSTNAME=localhost // This is local API root for frontend
    LOCAL_DEV_PORT=3000 // This is local API port for frontend
    AUTHOR=

    # url
    APP_URL=Your backend url
    CLIENT_URL=Your frontend url

    # mail - config to send email
    MAIL_HOST=smtp.example.com
    MAIL_USER=user@example.com
    MAIL_PASSWORD=topsecret // create and use app password of google account
    MAIL_FROM=noreply@example.com
    # optional
    MAIL_TRANSPORT=smtp://${MAIL_USER}:${MAIL_PASSWORD}@${MAIL_HOST}

    # database - you
    DATABASE_URL=Your database url when build postgres database with Prisma on Neon
  ```

- Run project in watch mode:
  ```bash
    npm run start:dev
  ```

# Get weather API key

- Visit: https://www.weatherapi.com/

# How to get Database URL

- Visit: https://www.prisma.io/docs/orm/overview/databases/neon

# Author

- [toanle312](https://github.com/toanle312)

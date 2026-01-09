# trackverse

## client

```bash
# join in client folder
cd client

# install deps
npm install

# start client
npm run dev
```

## server

```bash
# join in server folder
cd server

# copy .env
cp .env.example .env

# install deps
npm install

# start postgres database
docker compose up -d

# run migrations
npx prisma migrate dev

# generate prisma files
npx prisma generate

# start server
npm run dev
```
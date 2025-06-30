# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

# Jalankan unit test, build gagal jika test gagal
RUN npm test -- --coverage --watchAll=false

RUN npm run build

# Production stage
FROM nginx:alpine

# Salin build React ke direktori Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Jalankan Nginx saat container start
CMD ["nginx", "-g", "daemon off;"]

# Используем офицыальный Node.js образ
FROM node:14 as build

# Устанавливаем рабочую деректорию в контейнере
WORKDIR /app

#Копируем  package.json package-lock.json файлы внутрь контейнера
COPY package*.json ./

#Усановить зависимости
RUN npm install

#Копируем все остальное внутрь контейнера
COPY . .

#Делаем билд нашего приложения
RUN npm run build

#Используем офицыальный nginx образ для продакшина билда
FROM nginx:1.21-alpine

#Копируем папку build с преидушей стадии
COPY --from=build /app/build /usr/share/nginx/html

#Открываем порт 80 для сервера nginx
EXPOSE 80

#Запускаем nginx сервер
CMD ["nginx", "-g", "daemon off;"]
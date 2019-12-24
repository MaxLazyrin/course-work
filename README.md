# Курсовая работа
Курсовая работа по дисциплине "Технологии разработки ПО"

Для запуска сервера:
```
docker build -t course .
docker run -p 80:80 course
```

Сервер будет работать на localhost:80 или 0.0.0.0:80

# Как разместить свой модуль
Для того, чтобы разместить ваш модуль на общей странице:
* Скомпилируйте с помощью webpack исходники вашего модуля
* Скомпилированные статические файлы (из папки /dist) разместите в директории в вашей фамилией в директории репозитория /pages
* Скопируйте все исходники и тесты в поддиректорию src вашей директории, например mokrushin/src
* Для запуска ваших тестов добавьте в package.json скрипт `test` (```npm run test```)
* В index.html добавьте по примеру ссылку с названием вашей папки

# Как добавить готовые E2E тесты на Cypress
* В webpack.config.json в src настройте devServer:
    ```
      devServer: {
        host: '0.0.0.0',
        contentBase: '/app/dist',
        hot: true,
        compress: true,
        port: 9000,
        disableHostCheck: true
    }
    ```
* Добавьте docker-compose.yaml в src со следующим содержанием:
    ```
    version: '3.2'
    services:
    server:
        build: .
        environment:
        - PORT=9000
        ports:
        - 9000:9000
    cypress:
        image: "cypress/included:3.2.0"
        environment:
        - CYPRESS_baseUrl=http://server:9000
        working_dir: /e2e
        volumes:
        - ./:/e2e
        depends_on:
        - server
    ```
* Тесты должны лежать в pages/$STUDENT/src/cypress/integration/test.js и открывать приложение на хосте http://server:9000

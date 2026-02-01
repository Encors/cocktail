# CocktailApp

Приложение предназначено для поиска рецептов коктейлей и использует
[TheCocktailDB API](https://www.thecocktaildb.com/api.php) в качестве источника данных.

## [Главный экран](https://alinaalishandra.github.io/cocktail-app/)

Отображает только header со следующими кнопками навигации:

- На стартовую страницу (иконка домика)
- На страницу поиска рецепта (иконка фильтра/имитация бокала)

## ['/cocktails'](https://alinaalishandra.github.io/cocktail-app/cocktails) - Страница для поиска и отображения найденных рецептов

Поисковая панель предназначена для ввода названия коктейля.
Рядом две кнопки: “Поиск коктейля по введенному значению” и “Поиск случайного рецепта”

## ['/cocktails/{:cocktailId}'](https://alinaalishandra.github.io/cocktail-app/cocktails/178362) - Страница для отображения выбранного рецепта

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

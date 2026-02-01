export interface CocktailResponse {
  drinks: Array<Cocktail>;
}

export interface Cocktail {
  // Идентификатор напитка
  idDrink: string;
  // Название коктейля
  strDrink: string;
  // Тип бокала
  strGlass: string;
  strDrinkThumb: string;
  strInstructions: string;
  // Список ингредиентов
  [key: `strIngredient${number}`]: string;
}

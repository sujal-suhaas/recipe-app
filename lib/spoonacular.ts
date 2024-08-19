"use server";

const { SPOONACULAR_API_KEY } = process.env;

export async function autoComplete({ query }: { query: string }) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/autocomplete?apiKey=${SPOONACULAR_API_KEY}&query=${query}&number=5`
  );
  return data.json();
}

export async function searchRecipes({ query }: { query: string }) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&query=${query}&number=5`
  );
  return data.json();
}

export async function getRecipe({ id }: { id: string }) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${SPOONACULAR_API_KEY}`
  );
  return data.json();
}

export async function getSimilarRecipes({ id }: { id: string }) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${SPOONACULAR_API_KEY}&number=5`
  );
  return data.json();
}

export async function getRandomRecipe() {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=5`
  );
  return data.json();
};
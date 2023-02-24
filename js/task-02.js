const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const createListEl = (item) => {
  return item.map((item) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = item;

    return liEl;
  });
};

const listElements = createListEl(ingredients);

ingredientsListEl.append(...listElements);

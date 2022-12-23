"use strict";

const { floor, ceil, round, random } = Math;

const shoppingList = [];

const preProductList = [
  "anti",
  "analgi",
  "aspi",
  "mega",
  "sub",
  "oxy",
  "giga",
  "nitro",
  "sulpha",
  "hydro",
  "dihydro",
  "norma",
];

const sufProductList = ["beta", "gamma", "delta", "aqua", "vita", "tetra"];

const postProductList = [
  "zin",
  "rin",
  "ron",
  "mol",
  "ran",
  "ter",
  "ton",
  "tonid",
  "git",
  "nod",
  "tin",
  "lon",
  "lin",
  "nilin",
];

const realProductList = [
  "thermometer",
  "bandage",
  "plaster",
  "toothpaste",
  "contraceptive",
  "cotton swabs",
  "cotton pads",
  "protective mask",
];

function Item(product, isBought, quantity, price) {
  this.product = String(product);
  this.isBought = Boolean(isBought);
  this.quantity = Number(round(quantity));
  this.price = Number(price);
  this.sum = Number((price * quantity).toFixed(2));
}

function createRandomValues() {
  const randomProduct =
    preProductList[floor(random() * preProductList.length)] +
    sufProductList[floor(random() * sufProductList.length)] +
    postProductList[floor(random() * postProductList.length)];
  const randomIsBought = round(random());
  const randomQuantity = ceil(random() * 10);
  const randomPrice = (random() * 100).toFixed(2);

  return {
    product: randomProduct,
    isBought: randomIsBought,
    quantity: randomQuantity,
    price: randomPrice,
  };
}

function addNewItem() {
  let listItem = new Item(
    createRandomValues().product,
    createRandomValues().isBought,
    createRandomValues().quantity,
    createRandomValues().price
  );
  return shoppingList.push(listItem);
}

function createRandomShoppingList() {
  for (let index = 0; index < round(random() * 5) + 7; index++) {
    addNewItem();
  }

  return shoppingList;
}

export { Item, createRandomValues, addNewItem, createRandomShoppingList };

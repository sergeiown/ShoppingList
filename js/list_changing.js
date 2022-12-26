"use strict";

import { Item } from "./random_list_creation.js";

function addItemToList(
  sourceArrey,
  newProduct,
  newIsBought,
  newQuantity,
  newPrice
) {
  let source = JSON.parse(JSON.stringify(sourceArrey));
  let findNewProduct = source.find(
    (item) => item["product"] === newProduct && item["price"] === newPrice
  ); /* check for the existence of the product in the array */

  if (findNewProduct === undefined) {
    let newlistItem = new Item(newProduct, newIsBought, newQuantity, newPrice);
    source.push(
      newlistItem
    ); /* if check is out of result - adding a new object */
  } else {
    source.forEach(function (item) {
      if (item["product"] === newProduct && item["price"] === newPrice) {
        item["quantity"] += newQuantity;
        item["sum"] = Number((item["quantity"] * item["price"]).toFixed(2));
      }
    }); /* adjustment of quantity and sum */
  }

  return source;
}

function addItemToListAfterBuying(sourceArrey, sourceArreyIndex) {
  /* sourceArreyIndex - index of the Item in sourceArrey to be deleted */
  let source = JSON.parse(JSON.stringify(sourceArrey));
  source[sourceArreyIndex].isBought = true; /* adjustment of isBought value */

  return source;
}

function deleteItemFromList(sourceArrey, sourceArreyIndex) {
  /* sourceArreyIndex - index of the Item in sourceArrey to be deleted */
  let itemsAfterDelete = JSON.parse(JSON.stringify(sourceArrey));
  let itemsToDelete = itemsAfterDelete.splice(
    +sourceArreyIndex,
    1
  ); /* change itemsAfterSelete array by .splice method */

  return itemsAfterDelete;
}

export { addItemToList, addItemToListAfterBuying, deleteItemFromList };

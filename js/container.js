"use strict";

import * as creation from "./random_list_creation.js";
import * as sort from "./list_sorting.js";
import * as change from "./list_changing.js";

const shoppingList = creation.createRandomShoppingList();

// console.log(sort.filterItemsByKeyValue(shoppingList, "quantity", 10));
// console.log(sort.sortItemsByKey(shoppingList, "product", false));
// console.log(change.deleteItemFromList(shoppingList, 0));
// console.log(change.addItemToList(shoppingList, "megagammamol", false, 2, 9.57));
// console.log(shoppingList);

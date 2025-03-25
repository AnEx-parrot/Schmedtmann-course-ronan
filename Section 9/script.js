'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  /*   order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }, */

  //destructured object grabbed by function
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) { console.log(`order received. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`) },

  orderPasta: function (ing1, ing2, ing3) { console.log(ing1, ing2, ing3); },

  orderPizza: function (mainIngredient, ...otherIngredient) { console.log(mainIngredient); console.log(otherIngredient); },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*
//nullish coelescing operator ??
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10; //only stops on null or undefined. can use some falsy values like 0
console.log(guestCorrect);
*/

/*
//short circuting
//OR
console.log(3 || 'Ronan'); //result is 3. if the first value is truthy, the second element wont be evaluated

console.log('' || 'Ronan');//ronan

console.log(undefined || null);//null (note null is also falsy)
//AND
console.log(0 && 'Ronan'); //result is 0. if the first value is falsy, the second element wont be evaluated.
*/
/*
//rest pattern
//destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //the last 3 elements collected in others array

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(otherFood);


//rest patterns with function
const add = function (...numbers) { //allows for variable inputobject amounts
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'tomato', 'bacon');
*/
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; //this uses the spread opperator
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const MainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);


const ingredients = [prompt('let\'s make pasta! Ingredient 1?'), prompt('let\'s make pasta! Ingredient 2?'), prompt('let\'s make pasta! Ingredient 3?')]
restaurant.orderPasta(...ingredients);

//spread on objects
const newRestauraut = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestauraut);
*/

/*
//destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);
//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); //a = 23, b = 7

//nested objects
const { fri: { open, close } } = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole 21',
  mainIndex: 2,
  starterIndex: 2,
});
*/

/* 
//destructuring arrays
const arr = [2, 3, 4]
const [x, y, z] = arr; //x=2, y=3, z=4
console.log(x, y, z);

let [first, , second] = arr; // first = 2, second = 4;
[first, second] = [second, first]; //first = 4, second = 2

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//destructure inside destructure

const nested = [2, 4, [5, 6,]];

const [i, , [j, k]] = nested; //i = 2, j = 5, k = 6
console.log(i, j, k);

//default values
const [p, q, r] = [8, 9];
console.log(p, q, r); //r = undefined
const [l = 1, m = 1, n = 1] = [8, 9];
console.log(l, m, n); //r = 1
 */


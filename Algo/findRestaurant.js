// var findRestaurant = function (list1, list2) {
//   const restaurants = [];
//   let minIndex = Infinity

//   for (let i = 0; i < list1.length; i++) {
//     const restaurant = list1[i];
//     const index = list2.indexOf(restaurant);
//     // console.log(restaurant, index + i, index);
//     // if (index >= 0) {
//     //   restaurants.push({
//     //     index: index + i,
//     //     name: restaurant,
//     //   });

//     //   minIndex = Math.min(minIndex, index + i);
//     // }
//     console.log(index,i);
//   }

//   console.log(restaurants);
// };

var findRestaurant = function (list1, list2) {
  let minIndex = Infinity;
  let lookUp = {};

  for (let i = 0; i < list1.length; ++i) {
    for (let j = 0; j < list2.length; ++j) {
      if (list1[i] === list2[j]) {
        if (lookUp[i + j]) {
          lookUp[i + j].push(list1[i]);
        } else {
          lookUp[i + j] = [list1[i]];
        }
        minIndex = Math.min(minIndex, i + j);
      }
    }
  }

  return lookUp[minIndex];
};

console.log(
  findRestaurant(
    ["Shogun","Tapioca Express","Burger King","KFC"],
    ["KFC","Burger King","Tapioca Express","Shogun"],
  ),
);

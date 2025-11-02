// Video (1)
// 01
// const obj = {
//     nextLevel: { courseId: "Level2" },
//     "Programming Hero": { courseId: "Level1" }
// };

// console.log(obj);
// console.log(obj"nextLevel");
// console.log(obj"Programming Hero");

// 02
// const obj = {
//     nextLevel: { courseId: "Level2" },
//     true: { courseId: "Level1" }
// };

// console.log(obj["true"]);

// 03
// const obj = {};
// obj.nextLevel = { courseId: "Level2" };
// obj[true] = { courseId: "Level1" };

// console.log(obj);

// 04
// const course1 = {name: "Programming Hero"};
// const course2 = {name: "Next Level Web Development"};

// const obj = {};

// obj[course2] = { courseId: "Level2" };
// obj[course1] = { courseId: "Level1" };

// console.log(obj["[object Object]"]);
// console.log(obj["[object Object]"]);

// 05
// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const map = new Map(courses);
// map.set(1, "Programming Hero");
// map.set(false, "Programming Hero");
// map.set(course1, { courseId: "Level1" });
// map.set(course2, { courseId: "Level2" });
// map.clear();
// map.size();
// map.delete();
// map.has();
// map.forEach((value, key) => console.log("key", key, "value", value))
// map.forEach((value, key) => (key.name = "Shohoz Shorol Simple " + key.name))
// console.log(map.keys());
// console.log([...map.keys()]);
// console.log(map.values());

// for (let key of map.keys()) {
//    (key.name = "Shohoz Shorol Simple " + key.name)
// }

// console.log(map);

// 06
// const courses = [
//     ["Programming Hero", "Level1"],
//     ["Next Level Web Development", "Level2"]
// ]

// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const courses = [
//     [course1, "Level1"],
//     [course2, "Level2"]
// ]

// const map = new Map(courses);

// console.log(map);


// Video2
// 01
const rawApiData = [
    // 🔹 Electronics
    {
        id: "p-001",
        productName: "Quantum Laptop",
        category: "Electronics",
        price: 1200,
        rating: 4.8,
        stock: 15,
    },
    {
        id: "p-002",
        productName: "Galaxy Smartphone",
        category: "Electronics",
        price: 899,
        rating: 4.5,
        stock: 25,
    },
    {
        id: "p-003",
        productName: "Noise Cancelling Headphones",
        category: "Electronics",
        price: 250,
        rating: 4.6,
        stock: 40,
    },
    {
        id: "p-004",
        productName: "Smart LED TV 55-inch",
        category: "Electronics",
        price: 799,
        rating: 4.7,
        stock: 12,
    },
    {
        id: "p-005",
        productName: "Gaming Keyboard RGB",
        category: "Electronics",
        price: 120,
        rating: 4.4,
        stock: 35,
    },

    // 🔹 Clothing
    {
        id: "p-006",
        productName: "Men's Denim Jacket",
        category: "Clothing",
        price: 85,
        rating: 4.2,
        stock: 30,
    },
    {
        id: "p-007",
        productName: "Women's Floral Dress",
        category: "Clothing",
        price: 70,
        rating: 4.4,
        stock: 50,
    },
    {
        id: "p-008",
        productName: "Winter Hoodie",
        category: "Clothing",
        price: 60,
        rating: 4.0,
        stock: 35,
    },
    {
        id: "p-009",
        productName: "Cotton T-Shirt Pack (3 pcs)",
        category: "Clothing",
        price: 45,
        rating: 4.1,
        stock: 70,
    },
    {
        id: "p-010",
        productName: "Classic Blue Jeans",
        category: "Clothing",
        price: 95,
        rating: 4.5,
        stock: 28,
    },

    // 🔹 Furniture
    {
        id: "p-011",
        productName: "Leather Office Chair",
        category: "Furniture",
        price: 320,
        rating: 4.7,
        stock: 10,
    },
    {
        id: "p-012",
        productName: "Wooden Coffee Table",
        category: "Furniture",
        price: 210,
        rating: 4.3,
        stock: 18,
    },
    {
        id: "p-013",
        productName: "Modern Bookshelf",
        category: "Furniture",
        price: 270,
        rating: 4.6,
        stock: 14,
    },
    {
        id: "p-014",
        productName: "Queen Size Bed Frame",
        category: "Furniture",
        price: 499,
        rating: 4.8,
        stock: 8,
    },
    {
        id: "p-015",
        productName: "Dining Table Set (4 Chairs)",
        category: "Furniture",
        price: 680,
        rating: 4.5,
        stock: 6,
    },

    // 🔹 Accessories
    {
        id: "p-016",
        productName: "Smart Fitness Watch",
        category: "Accessories",
        price: 150,
        rating: 4.5,
        stock: 22,
    },
    {
        id: "p-017",
        productName: "Bluetooth Earbuds",
        category: "Accessories",
        price: 99,
        rating: 4.1,
        stock: 45,
    },
    {
        id: "p-018",
        productName: "Leather Wallet",
        category: "Accessories",
        price: 55,
        rating: 4.3,
        stock: 60,
    },
    {
        id: "p-019",
        productName: "Aviator Sunglasses",
        category: "Accessories",
        price: 80,
        rating: 4.6,
        stock: 40,
    },
    {
        id: "p-020",
        productName: "Gold Plated Necklace",
        category: "Accessories",
        price: 200,
        rating: 4.9,
        stock: 12,
    },

    // 🔹 Home Appliances
    {
        id: "p-021",
        productName: "Microwave Oven 25L",
        category: "Home Appliances",
        price: 240,
        rating: 4.4,
        stock: 20,
    },
    {
        id: "p-022",
        productName: "Automatic Washing Machine",
        category: "Home Appliances",
        price: 640,
        rating: 4.7,
        stock: 10,
    },
    {
        id: "p-023",
        productName: "Air Purifier Pro",
        category: "Home Appliances",
        price: 310,
        rating: 4.5,
        stock: 15,
    },
    {
        id: "p-024",
        productName: "Smart Refrigerator 300L",
        category: "Home Appliances",
        price: 820,
        rating: 4.8,
        stock: 7,
    },
    {
        id: "p-025",
        productName: "Electric Kettle",
        category: "Home Appliances",
        price: 50,
        rating: 4.2,
        stock: 35,
    },

    // 🔹 Beauty & Health
    {
        id: "p-026",
        productName: "Herbal Face Cream",
        category: "Beauty & Health",
        price: 30,
        rating: 4.3,
        stock: 50,
    },
    {
        id: "p-027",
        productName: "Organic Shampoo",
        category: "Beauty & Health",
        price: 25,
        rating: 4.2,
        stock: 40,
    },
    {
        id: "p-028",
        productName: "Perfume Set (3 Bottles)",
        category: "Beauty & Health",
        price: 85,
        rating: 4.6,
        stock: 25,
    },
    {
        id: "p-029",
        productName: "Hair Dryer 2000W",
        category: "Beauty & Health",
        price: 60,
        rating: 4.5,
        stock: 30,
    },
    {
        id: "p-030",
        productName: "Electric Toothbrush",
        category: "Beauty & Health",
        price: 45,
        rating: 4.4,
        stock: 45,
    },
];

// Output => [{name: "Phone"},{name: "Smart Watch"}]

//* Process
//TODO Fileter => Electronics
//TODO Sort by => Rating
//TODO Slice => first 3 (top3)
//TODO Map => transform object shap to {name: "Name"}

// const topElectronicsProducts = rawApiData.filter(item => item.category === "Electronics").sort((a, b) => a.rating - b.rating).slice(0, 3).map((item) => {
//     return { name: item.productName }
// });

// console.log(topElectronicsProducts);

// Video3
// 01
//* Sort
// const numbers = [40, 100, 1, 5, 25, 10];
// const fruits = ["Banana", "apple", "Cherry", "Water melon"];

// const sortedNumber = numbers.sort((a, b) => b - a)
// fruits.sort((a, b) => a.localeCompare(b));

// console.log(fruits);

//* Nested array flat
// 02
// const arr = [1, 2, 3, [4, 5], [5, 6, 9, [7, 8, 9,]]];
// const flatArr = arr.flat(2 or anything)
// const flatArr = arr.flat(Infinity)

// console.log(flatArr);

// 03
// const tagsFromPosts = [
//     ["javascript", "react", "css"],
//     ["node", "express"],
//     ["css", "html", "react"],
// ];

// const filterTags = [...new Set(tagsFromPosts.flat(Infinity))];
// console.log(filterTags);

// Video 4
// 01
// const numbers = [1, 5, 5, 11, 69, 9, 3, 1];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0)
// const hasOddNumber = numbers.some((number) => number % 2 !== 0)
// console.log(hasEvenNumber);
// console.log(hasOddNumber);

// 02
// const currentUserRoles = ["user", "editor","admin"];
// const featureAccessRoles = ["admin", "manager"];

// const canAccess = currentUserRoles.some((role) => featureAccessRoles.includes(role))
// console.log(canAccess);

// 03
// const arr = Array.from({length: 5}).fill(0)
// const arr = Array.from({length: 5}).fill(null)
// const arr = Array.from({length: 5}).fill("")
// const arr = Array.from({length: 5},(_,i) => i)
// const arr = Array.from([1, 2, 3, 5, 8, 9], (value, i) => value * value)
// console.log(arr);

// 03
// const range = (start, stop, step) => Array.from({ length: Math.ceil(stop - start) / step }, (_, i) => start + i * step)

// console.log(range(1, 20, 3));

// Video 5
// 01
// const cartItems = [
//     { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
//     { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
//     { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 }
// ]

// const subtotal = cartItems.reduce((subtotal, product) => {
//     console.log(subtotal,product);
//     return subtotal + product.price * product.quantity;
// }, 0)
// console.log(subtotal);

// 02
// const players = [
//     { name: "Jamal Bhuyan", score: 88 },
//     { name: "Sheikh Morsalin", score: 81 },
//     { name: "Rakib Hossain", score: 95 },
//     { name: "Topu Barman", score: 91 },
//     { name: "Shohel Rana", score: 72 }
// ]

// const bestScorer = players.reduce((bestPlayer, player) => {
//     console.log(bestPlayer, player);
//     if (bestPlayer.score > player.score) {
//         return bestPlayer;
//     }
//     return player;
// }, players[0])

// console.log(bestScorer);

//* Video 6
// 01
const postsArray = [
    { id: "p-101", title: "Intro to SQL", author: "Alex" },
    { id: "p-102", title: "Data Structures in JS", author: "Beth" },
    { id: "p-103", title: "Understanding Reduce", author: "Chris" },
    { id: "p-104", title: "CSS grid Tricks", author: "John" },
]

const lookupTable = postsArray.reduce((table, post) => {
    table[post.id] = post;
    return table
}, {})


//! const post = postsArray.find((post) => post.id === "p-104")
const post = lookupTable["p-104"]

// console.log(lookupTable["p-104"]); 

for (let post in lookupTable) {
    console.log(lookupTable[post]);
}

console.log(post);
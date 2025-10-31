// 01
// const start = performance.now();

// for (let i = 0; i < 500; i++) {
//     console.log(i);
// }
// const end = performance.now();
// console.log(`This code took ${end - start} ms`);

// 02
// console.time("task");
// for (let i = 0; i <= 600000; i++) {
//     console.log(i);
// }
// console.timeEnd("task");

// 03
// const firstArray = []
// const secondArray = []
// for (let i = 0; i < 600000; i++) {
//     if (i < 300000) {
//         firstArray.push(i);
//     }
//     secondArray.push(i);
// }

// console.log("first array", firstArray.length);
// console.log("second array", secondArray.length);

// console.time("map1");
// const firstUserList = firstArray.map((number) => ({ userId: number }));
// console.timeEnd("map1");

// console.time("map2");
// const secondUserList = secondArray.map((number) => ({ userId: number }));
// console.timeEnd("map2");

// 04
// const firstArray = []
// const secondArray = []
// for (let i = 0; i < 600000; i++) {
//     if (i < 300000) {
//         firstArray.push(i);
//     }
//     secondArray.push(i);
// }

// console.log("first array", firstArray.length);
// console.log("second array", secondArray.length);

// const firstUserList = firstArray.map((number) => ({ userId: number }));
// const secondUserList = secondArray.map((number) => ({ userId: number }));

// console.time("find")
// const user = secondUserList.find((user) => user.userId === 500000)
// console.timeEnd("find")

// 05
// const firstArray = []
// const secondArray = []
// for (let i = 0; i < 600000; i++) {
//     if (i < 300000) {
//         firstArray.push(i);
//     }
//     secondArray.push(i);
// }

// console.log("first array", firstArray.length);
// console.log("second array", secondArray.length);

// const firstUserList = firstArray.map((number) => ({ userId: number }));
// const secondUserList = secondArray.map((number) => ({ userId: number }));

// console.time("find")
// // const user = secondUserList.find((user) => user.userId === 500000)
// const user = secondUserList[500000]
// console.timeEnd("find")
// // Array

// let marks = [100,50,63,87];

// console.log(marks);
// console.log(marks.length)

// let arr = [100,30.58,"Sameer",false];

// console.log(arr);
// console.log(arr[2]);
// console.log(typeof arr);

// arr[1] = 52;
// console.log(arr);

//Push : Insert element at end

// arr.push(90);
// arr.push("Strike");

// console.log(arr);
// // pop operation: Delete element from end
// arr.pop();
// console.log(arr);

//Insert and delete the first element of the array
  //insert
// arr.unshift(10);
// arr.unshift(90);
// console.log(arr);
  //delete
// arr.shift();
// console.log(arr);

// let arr = [10,30,50,60,80];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }
// let arr = [10,30,50,60,80];
// let arr2 = arr;      // both arr and arr2 points to same data address

// arr2.push(87);

// console.log(arr);
// Object(non primitive): Copy by reference hote hai
// Primitive: Copy by value

// const arr = [10,30,57,98];
// arr[2] = 3.3;
// // arr = [25,37,24,65]
// console.log(arr);

// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,4);
// // console.log(arr);
// arr.splice(1,3,"Rohit",19);
// console.log(arr);

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr4 = [90,4,false];

// arr.push(arr2);
// console.log(arr);
// const arr3 = arr.concat(arr2,arr4);
// console.log(arr3);
// const arr3 = [arr,arr2,arr4];
// console.log(arr3);

//spread operator

// const arr3 = [...arr,...arr2,...arr4];
// console.log(arr3);

// const names = ["Alice","Rohit","Bob","Mohit","Charlie"];

// console.log(names.toString());
// console.log(names.join("-"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bob"));

// names.sort();
// names.reverse();
// console.log(names);

// const a = [101,90,80,32,91];
// const arr = [10,"Rohit","Mohan",true];

// a.sort();
// console.log(a);

// const arr = [10,40,31,71,5,11];

// arr.sort((a,b) => a-b);  //ascending order
// console.log(arr);

// 40,10
// a = 10
// b = 40
// 10,31, 40
// a = 10
// b = 31

// -ve : pehle a aayega fr aayega
// +ve: b aayega fr a aayge

// const arr = [10,30,50,[40,90,[60,19,99],11], 80];

// const a = arr.flat(Infinity);
// console.log(a);
// console.log(arr[3][2][1]);


// const a = [10,309,"Rohit",9.3, true];
// a.name = "Mohan";
// console.log(a.name);
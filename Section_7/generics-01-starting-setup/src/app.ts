// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done')
//   }, 2000);
// })

function merge<U>(objA: object, objB: U){
  return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Cris', hobbies: ['Sports']}, {age: 30});
const mergedObj2 = merge({name: 'Cris'}, {age: 30});
console.log(mergedObj.age);

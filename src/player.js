const Player = (name, symbol) => {
  // const play = () => ;
  return { name, symbol };
};



// FACTORY FUNCTION. When => we need to create multiple objects.
// const PersonFactory = (name, age) => {
//   const sayHello = () => console.log('hello!');
//   return { name, age, sayHello };
// };
//
// const jeff = PersonFactory('jeff', 27);
//
// console.log(jeff.name); // 'jeff'
//
// jeff.sayHello(); // calls the function and logs 'hello!'

export default Player

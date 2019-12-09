const add = () => {
  let x = 0;
  return () => x++;
};
const count = add();

console.log(count());
console.log(count());

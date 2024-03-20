let obj = {
  item: 1,
  val: 2,
};

let objString = JSON.stringify(obj);
localStorage.setItem("key", objString); // отправка
let parsLocal = localStorage.getItem("key"); // получение
let final = JSON.parse(parsLocal);
console.log(final);

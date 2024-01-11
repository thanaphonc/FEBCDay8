let input = document.getElementById("input1").value;
const submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", addContent);

function addContent() {
  console.log("Work!");
  const text = document.getElementById("input1").value;
  const result = document.getElementById("result");

  result.innerHTML += `<li>${text}</li>`;
}
// fetch >> คว้า หรือ เรียกใช้
// https://jsonplaceholder.typicode.com/todos/1 >> API Endpoint >> Url หรือ เส้นทาง
// เรียก todos จำนวน 1 ก้อน
// keyword promise
// fetch(...).then(...) ปัจจุบันไม่นิยม

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));

// async คือ จะมีการรออะไรบางอย่างเกิดขึ้น

async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
  const json = await data.json(); // JSON เหมือน object
  console.log(json);

  const titleList = document.getElementById("titleList");
  for (let i = 0; i < json.length; i++) {
    titleList.innerHTML += `<h3>${json[i].title}</h3>`;
  }
}

fetchData();
console.log("ss");

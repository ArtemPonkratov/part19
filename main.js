const p1 = new Promise((resolve, reject) => {
  fetch("http://dvigatel39.ru/").then((response) => {
    console.log(response);
    if (response.ok) resolve(response.json());
  });
});

console.log(p1);

p1.then(f1);
function f1(data) {
  console.log(p1);
  console.log("succes");
  satisfies;
  console.log(data);
}

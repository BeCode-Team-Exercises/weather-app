//document.getElementById("button").addEventListener("click", async () => {
//console.log("test");

//const response = await fetch(
//"http://api.openweathermap.org/data/2.5/forecast?q=Ghent,be&appid=2118afe2ed56240f86bbd108daffe6b8"
//);
//const city = await response.json();
//console.log(city);
//});

console.log(document.querySelector(".form-control"));

document.getElementById("button").addEventListener("click", async () => {
  const selectCity = document.querySelector(".form-control");
  console.log(selectCity.value);
  let chosenCity = selectCity.value;

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${chosenCity},be&appid=2118afe2ed56240f86bbd108daffe6b8`
  );
  const city = await response.json();
  console.log(city);
});

console.log(document.querySelector(".form-control"));

const tpl = document.querySelector("#tpl-hero");
const target = document.querySelector("#target");

const displayHero = hero => {
  const elt = tpl.cloneNode(true).content;

  elt.querySelector(".name").innerHTML = hero.name;
  elt.querySelector(".alter-ego").innerHTML = hero.alterEgo;

  elt.querySelector(".powers").innerHTML = hero.abilities.join(", ");

  target.appendChild(elt);
};

(() => {
  document.querySelector("#run").addEventListener("click", async () => {
    const response = await fetch("//localhost:3000/heroes");
    const heroes = await response.json();

    heroes.forEach(displayHero);
  });
})();

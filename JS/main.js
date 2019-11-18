document
  .querySelector(".fstdropdown-select")
  .addEventListener("click", async () => {
    console.log("test");

    const response = await fetch(
      "api.openweathermap.org/data/2.5/forecast?q=Ghent,be"
    );
    const city = await response.json();
    console.log(city);
  });

console.log(document.querySelector(".fstselected"));

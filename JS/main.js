document.getElementById("button").addEventListener("click", async () => {
  const selectCity = document.querySelector(".form-control");
  let chosenCity = selectCity.value;

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${chosenCity}&units=metric&appid=2118afe2ed56240f86bbd108daffe6b8`
  );
  const jsonCity = await response.json();

  const list = jsonCity.list;
  var listArray = [];

  const listm = list.forEach(datum => {
    const weatherInfo = datum.weather[0];

    if (datum.dt_txt.includes("15:00")) {
      var event = new Date(datum.dt_txt);
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      listArray.push(
        event.toLocaleDateString("en-EN", options),
        datum.main.temp,
        weatherInfo.main
      );

      let j = 0;
      for (var i = 1; i <= 5; i++) {
        let day = `.day${i}`;
        let temp = `.temp${i}`;
        let status = `.status${i}`;
        let city = `.city${i}`;
        document.querySelector(`${day}`).textContent = listArray[j];
        document.querySelector(`${temp}`).textContent = listArray[j + 1];
        document.querySelector(`${status}`).textContent = listArray[j + 2];
        document.querySelector(`${city}`).textContent = chosenCity;
        j += 3;
      }
    }
  });
});

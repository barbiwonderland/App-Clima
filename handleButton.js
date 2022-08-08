function handleButton() {
  let data;
  var myVariable = magicListSelected();
  var ciudadIngresada = document.getElementById("ciudad").value;
  var resultado = document.querySelector("#resultado");

  let getDataFromApi = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudadIngresada},${myVariable}&appid=a687ddfbd84f3bb1987686df6b594433&units=metric&lang=sp`
    )
      .then((response) => response.json())
      .then((fullData) => {
        data = fullData;
        if (data.cod == 200) {
          resultado.innerHTML = `
        
          <h3> ${data.name}
          ${data.sys.country}</h3>
          <p class="desc">${data.weather[0].description}</p>
           <p class="center">Temperatura: ${Math.round(data.main.temp)}°</p>
         <p>Térmica: ${Math.round(data.main.feels_like)}°</p>
         <p>Maxima: ${Math.round(data.main.temp_max)}°</p>
         <p>Mínima: ${Math.round(data.main.temp_min)}°</p>
         <p>Humedad: ${Math.round(data.main.humidity)}% </p>
        
           `;
          let imagen = document.getElementsByClassName("App")[0];
          if (data.weather[0].description.includes("chubasco" || "lluvia")) {
            imagen.style.backgroundImage =
              "linear-gradient( rgba(22, 20, 20, 0.5), rgba(20, 18, 18, 0.5) ), url('images/lluvia.jpg')";
            imagen.style.backgroundSize = "cover";
          } else if (data.main.temp < 10) {
            imagen.style.backgroundImage =
              "linear-gradient( rgba(22, 20, 20, 0.5), rgba(20, 18, 18, 0.5) ), url('images/frio.jpg')";
          } else if (data.main.temp < 23) {
            imagen.style.backgroundImage =
              "linear-gradient( rgba(22, 20, 20, 0.5), rgba(20, 18, 18, 0.5) ), url('images/otoño.jpg')";
            imagen.style.backgroundSize = "cover";
          } else {
            imagen.style.backgroundImage =
              "linear-gradient( rgba(22, 20, 20, 0.5), rgba(20, 18, 18, 0.5) ), url('images/calor.jpg')";
            imagen.style.backgroundSize = "cover";
          }
        } else {
          resultado.innerHTML = ` <h3> Ciudad no encontrada...intente nuevamente</h3>`;
        }
      });
  };
  getDataFromApi();
}

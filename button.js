var resultado = document.querySelector("#resultado");

function boton() {
  var myVariable = magicListSelected();
  var obtenerLocal = document.getElementById("ciudad").value;

  console.log(obtenerLocal);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${obtenerLocal},${myVariable}&appid=a687ddfbd84f3bb1987686df6b594433&units=metric&lang=sp`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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

      let imagen = document.body;
      if (data.weather[0].description.includes("chubasco" || "lluvia")) {
        imagen.style.backgroundImage = "url('imagenes/lluvia.jpg')";
        document.body.style.backgroundSize = "cover";
      } else if (data.main.temp < 10) {
        imagen.style.backgroundImage = "url('imagenes/frio.jpg')";
      } else if (data.main.temp < 23) {
        imagen.style.backgroundImage = "url('imagenes/otoño.jpg')";
        document.body.style.backgroundSize = "cover";
      } else {
        document.body.style.backgroundImage = "url('imagenes/calor.jpg')";
        document.body.style.backgroundSize = "cover";
      }
    });
}
boton();

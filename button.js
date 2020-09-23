
var resultado = document.querySelector('#resultado')
function boton(){
    var  obtenerLocal = document.getElementById("ciudad").value;
    console.log(obtenerLocal);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${obtenerLocal},ar&appid=a687ddfbd84f3bb1987686df6b594433&units=metric&lang=sp`)
    .then(response => response.json())
    .then(data => {
         console.log(data);
      resultado.innerHTML=`

      <h3> ${data.name}
      ${data.sys.country}</h3>
      <p class="desc">${data.weather[0].description}</p>
       <p class="center">Temperatura: ${Math.round(data.main.temp)}°</p>
<p>Térmica: ${Math.round(data.main.feels_like)}°</p>
<p>Maxima: ${Math.round(data.main.temp_max)}°</p>
<p>Mínima: ${Math.round(data.main.temp_min)}°</p>
<p>Humedad: ${Math.round(data.main.humidity)}% </p>






       `;
    
  
    })};
boton();

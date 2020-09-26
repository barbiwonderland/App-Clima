
var resultado = document.querySelector('#resultado')
function boton(){
    var myVariable = magicListSelected();
    var  obtenerLocal = document.getElementById("ciudad").value;
    
    console.log(obtenerLocal);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${obtenerLocal},${myVariable}&appid=a687ddfbd84f3bb1987686df6b594433&units=metric&lang=sp`)
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
       if (data.weather[0].description.includes("lluvia")) {document.body.style.background= "url('https://img.freepik.com/free-photo/cute-couple-hugging-rain_13339-248233.jpg?size=626&ext=jpg')"; document.body.style.backgroundSize="cover";
      }  else if (data.main.temp<10) {document.body.style.background= "url('https://ng.kcsd.org/wp-content/uploads/sites/7/2020/01/snow-720x477.jpg')"; document.body.style.backgroundSize="cover";
     
 } else if(data.main.temp<17){
    document.body.style.background="url('https://reesephoto.files.wordpress.com/2012/10/fall-tree-color2.jpg')"; document.body.style.backgroundSize="cover";
     
 }else{
    document.body.style.background="url('https://uknow.uky.edu/sites/default/files/styles/facebook/public/GettyImages-1160947136%20%281%29.jpg?itok=16WaT0Uy')"; document.body.style.backgroundSize="cover";
     
}
    })};
boton();
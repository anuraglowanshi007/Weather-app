let loc=document.getElementById("location");
let temicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate= document.getElementById("climate");
let iconfile;
const searchInput =document.getElementById("search-input");
const searchButton=document.getElementById("search-button");







window.addEventListener("load" ,()=>{
      let long;
      let lat;
      if(navigator.geolocation)
      {
       navigator.geolocation.getCurrent((tPosition)=>
       {
       long=position.coords.longitude;
       lat=position.coords.latitude;
   const api=`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3f3826c8b8280ce278f18e9e44221f60
   fetch(api).then((response)=>{
    return response.json();
   })
   .then(data=>
    {
        const{name}=data;
        const{feels_like}=data.main;
        const{id,main}=data.weather[0];

        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=math.round(feels_like-273);
    })

       }
)}

    
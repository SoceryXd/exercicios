function changeTheme(){
   const div = document.getElementById("div_pai");
   const button = document.getElementById("button_theme");

   if(div.className === "light-mode"){
      button.innerHTML = "Light mode";
      div.className = "dark-mode";
   }else{
      button.innerHTML = "Dark mode";
      div.className = "light-mode";
   }
}

function fetchData(){
   const url_api = "https://nekos.best/api/v2/hug?amount=2"; // endpoint (é uma url de uma api)

   fetch(url_api)
      .then(response => response.json())
      .then(json => {
         const img = document.getElementById("hug_gif");
         img.src = json.results[0].url;
      })
      .catch(err => console.error(err));

}

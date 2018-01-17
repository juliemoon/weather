const URL = "http://api.aerisapi.com/forecasts/11101?client_id=VFGMw8xBE0COKWfjNKvI7&client_secret=92cacmDfKStKZ9YTADv1pzpJjfgpsJkVEXl9zxC0";

function createEl(el){
  return document.createElement(el);
}

fetch(URL)
.then((resp)=> resp.json())
.then((data)=> {
  let sevendays = data.response[0].periods;
  sevendays.map((day)=>{
    let li = createEl("li");
    let btn = createEl("button");
    btn.innerHTML = 'C';
    let maxTempF = day.maxTempF;
    let lowTempF = day.minTempF;
    let maxTempC = day.maxTempC;
    let lowTempC = day.minTempC;
    let textNode = document.createTextNode(`high temp: ${maxTempF}F low temp:${lowTempF}F`);
    li.appendChild(textNode);
    li.appendChild(btn);
    document.getElementById("forecastContainer").appendChild(li);
    btn.addEventListener("click",()=>{
      document.getElementById("forecastContainer").removeChild(li)
      textNode = document.createTextNode(`high temp: ${maxTempC} low temp:${lowTempC}`)
      li.appendChild(textNode);
      document.getElementById("forecastContainer").appendChild(li);
    });
  })
  
});

let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{

})


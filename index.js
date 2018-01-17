const URL = "http://api.aerisapi.com/forecasts/11101?client_id=VFGMw8xBE0COKWfjNKvI7&client_secret=92cacmDfKStKZ9YTADv1pzpJjfgpsJkVEXl9zxC0";

function createEl(el){
  return document.createElement(el);
}

function appendEl(parent,el){
  return parent.appendChild(el);
}

fetch(URL)
.then((resp)=> resp.json())
.then((data)=> {
  let sevendays = data.response[0].periods;
  console.log(sevendays)
  sevendays.map((day)=>{
    let li = createEl("li");
    let maxTempF = day.maxTempF;
    let lowTempF = day.minTempF;
    let textNode = document.createTextNode(`high temp: ${maxTempF} low temp:${lowTempF}`);
    console.log(textNode);
    li.appendChild(textNode);
    document.getElementById("forecastContainer").appendChild(li);
  })
  
});
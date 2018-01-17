const URL = "http://api.aerisapi.com/forecasts/11101?client_id=VFGMw8xBE0COKWfjNKvI7&client_secret=92cacmDfKStKZ9YTADv1pzpJjfgpsJkVEXl9zxC0";

fetch(URL)
.then((resp)=> resp.json())
.then((data)=> console.log(data));
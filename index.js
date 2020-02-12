const url = `https://api.coinlore.com/api/tickers/?start=${0}&limit=${10}`;

const container = document.getElementById("table-container")

 fetch(url)
  .then(response => response.json())
  .then(res =>{
   let table = "";
   const data = res.data
   data.forEach(element => (
       table+=`<tr>
  <td>${element.name}</td>
           <td>${element.symbol}</td>
           <td>$${element.price_usd}</td>
           <td>${element.tsupply} ${element.symbol}</td>
       </tr>`
   )
    
   );
   container.innerHTML= table

 })
document.querySelector("button").addEventListener("click",()=>{
  let a= Math.floor(Math.random()*100);
  var table = document.getElementById("mytable");
  var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
  if(a%2==0){
      cell1.innerHTML = a;
      cell2.innerHTML="even";
  }else{
      cell1.innerHTML = a;
      cell2.innerHTML="odd";
  }
  console.log(a);
})
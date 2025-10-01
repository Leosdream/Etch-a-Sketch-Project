function gridMake(n){
for (let i=1;i<=n;i++){
const col = document.createElement("div");
              container.appendChild(col);
              col.className = 'col'
              
  for( let j=1;j<=n;j++){
    const row = document.createElement("div");
              col.appendChild(row);
              row.className = 'row';
              row.addEventListener("mouseover", (event) => {row.style.backgroundColor = "red";})
              Delete.addEventListener("click", function(){ row.style.backgroundColor = "";; });
              
    }
  }
}
x=16;
function gridSize(){
let size = parseInt(document.getElementById("size").value);
if(size<=100){ x=size;}
  if(size>100){
     size=x;
    alert("Error number can't be bigger then 100")
   }
container.innerHTML = '';
gridMake(size);
}


gridMake(16);
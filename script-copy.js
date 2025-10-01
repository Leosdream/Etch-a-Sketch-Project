function gridMake(n){
for (let i=1;i<=n;i++){
const col = document.createElement("div");
              container.appendChild(col);
              col.className = 'col'
              
  for( let j=1;j<=n;j++){
    const row = document.createElement("div");
              col.appendChild(row);
              row.className = 'row';
        
              row.addEventListener("mouseover", (event) => {
                row.style.backgroundColor = random_rgba();
              })
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

let max=1;
 function random_rgba() {
  if(max%2==0){
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  } else {return "red";}
}




gridMake(16);
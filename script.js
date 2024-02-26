// const itemsArray = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

let inputBx = document.querySelector('#inputBx');
let list=document.querySelector('#list');

inputBx.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        addItem(this.value)
        this.value="";
        saveData();
    }
})
document.querySelector("#enter").addEventListener("click", () => {
  addItem(this.value)
  this.value="";
  saveData();
})

function saveData(){
  localStorage.setItem("data",list.innerHTML)
}
function showTask(){
  list.innerHTML=localStorage.getItem("data");
}
function reload(){
  const abc=localStorage.getItem("data");
  console.log(abc);
}

let addItem = (inputBx)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML=`${inputBx}<i></i>`;
        listItem.addEventListener("click",function(){
            this.classList.toggle('done');
            saveData();
            
          })

        listItem.querySelector("i").addEventListener("click",function(){
            listItem.remove();
            saveData();
            showTask();  
        })
        list.appendChild(listItem);
        saveData();
}
// document.querySelector(".list").innerHTML = data;
reload();
showTask();



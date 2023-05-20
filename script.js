let arrayData = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
]

let infoDiv=document.querySelector(".data")

arrayData.forEach((element) => {
    let count=element.id;
    let Name=element.name;    
    let Age=element.age;    
    let Prof=element.profession;  
    
    let div=document.createElement("div")
    div.innerHTML=`${count}.   Name: ${Name}    Profession: ${Prof}     Age: ${Age}`;
    infoDiv.appendChild(div);
});

const form=document.querySelector(".formInput")



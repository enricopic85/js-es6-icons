let cardIcon=[
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];
let container=document.getElementById("container")
let select=document.getElementById("optionSelect");
let option=document.getElementsByTagName("option");
cardIcon.forEach(function(element) {
    container.innerHTML +=`
    <i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>
    <span>${element.name.toUpperCase()}</span>
    `
})
let optionAll=cardIcon.filter(function(element){
    return element.type;
});
let optionAnimal=cardIcon.filter(function(element){
    return element.type==="animal"
});

let optionVegetable=cardIcon.filter(function(element){
    return element.type==="vegetable"
});
let optionUser=cardIcon.filter(function(element){
    return element.type==="user"
});

select.addEventListener('change',function(){
     const selection=cardIcon.filter(function(element){
         if (option.value==="user") {
            optionUser.forEach(function(element){
                container.innerHTML=""
                container.innerHTML +=`
            <i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>
            <span>${element.name.toUpperCase()}</span>
    `
            })
         }
     })
})
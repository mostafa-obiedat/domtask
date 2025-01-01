//Q1
const fruits = [
    { name: "Apple", img: "apple.jpg" },
    { name: "Banana", img: "banana.jpg" },
    { name: "Mango", img: "mango.jpg" },
    { name: "Orange", img: "orange.jpg" },
    { name: "Grapes", img: "grapes.jpg" }
];


const fruitsList = document.getElementById('fruitsList');


fruits.forEach(fruit => {
    
    const li = document.createElement('li');

    
    const img = document.createElement('img');
    img.src = fruit.img;
    img.alt = fruit.name;

    
    const text = document.createTextNode(fruit.name);

    
    li.appendChild(img);
    li.appendChild(text);

    
    fruitsList.appendChild(li);
});



//Q2

function findNumInArray(arr,number) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == number){
            return i;
        }
    }
    return -1;
}
const arr = [4 ,2 ,5];
alert(findNumInArray(arr,5));

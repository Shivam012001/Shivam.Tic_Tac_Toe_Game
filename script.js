
// let music = new Audio("images/music.mp3");
// let turn = new Audio("/music/ting.mp3");
// let gameover = new Audio("images/gameover.mp3");


let currentTurn  = "X";
let isGameOver = false;


// Function to change the turn

const changeTurn = ()=>{
    if(currentTurn === "X")
    currentTurn ="O";
    else
    currentTurn="X";

}

let box=[];
box.length=3;

let container = document.getElementsByClassName('container')[0];


// Function to check for a win




const checkWin = ()=>{

 let wins = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
     
 ]
    
    
 wins.forEach(e=>{

    if((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[2]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText !== "") ){

        document.querySelector('.info').innerText = boxes[e[0]].innerText + " Won"
        isGameOver = true

        // make image appear
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="200px";
   
         
     box[0]=   boxes[e[0]] 
     box[1]=    boxes[e[1]]
     box[2]=   boxes[e[2]]
     
    //  making elements purple 
     box.forEach(element =>{
         element.style.color="rgb(191, 64, 191)";
     })

     
container.style.zIndex="-2";

    }

 })

}

// Game Logic


let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
         
       if(boxText.innerText === ''){
       
          boxText.innerText = currentTurn;
          changeTurn();
       
        }
            
            // console.log(currentTurn)

             checkWin();

             if(!isGameOver){
            document.getElementsByClassName('info')[0].innerText = "Turn of "+ currentTurn;
             
        }
       
       
    })
      
})


//  Reset the game

let button  = document.getElementById('reset');


button.addEventListener('click',()=>{

Array.from(boxes).forEach(element=>{

    
    let spanElement = element.querySelector('span');
      spanElement.innerText="";

      isGameOver = false;


})



document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px";

 let info = button.previousElementSibling;

 info.innerText = "Turn of " +currentTurn;

box.forEach(element=>{
     element.style.color="black";
})


container.style.zIndex="1";
 



})
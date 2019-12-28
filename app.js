const game = () => {

 //Declaring The consts\\
  //      HERE!      \\


 const cell = document.querySelectorAll('.grid div')
 const playerScore =document.querySelector('.player-score')
 const computerScore = document.querySelector('.computer-score')
 const boxes = document.querySelectorAll(".box")
 //                         !DIVS!                             \\
 const d1 = document.querySelector('.d1');
 const d2 = document.querySelector('.d2');
 const d3 = document.querySelector('.d3');
 const d4 = document.querySelector('.d4');
 const d5 = document.querySelector('.d5');
 const d6 = document.querySelector('.d6');
 const d7 = document.querySelector('.d7');
 const d8 = document.querySelector('.d8');
 const d9 = document.querySelector('.d9');
 //          !Declaring Lets!           \\
          //      HERE!      \\
        let ispTurn = true;
        let iscTurn = false;
        let isGameEnd = false;
        let pscore = 0;
        let cscore = 0;
 //            !Event Listener!          \\ 
    //        !Player Listerner!       \\
     cell.forEach(div =>{
         div.addEventListener('click' , () => {
             if(ispTurn === true && div.textContent == ''){
                 div.textContent = 'X';
                 
                 iscTurn = true;
                 ispTurn = false;
             }
             let num = Math.floor(Math.random()   *  9)
             //           !Conditions!         \\
             if(num === 0 && iscTurn === true && d1.textContent == ''){
                 d1.textContent = "O"
                 
                iscTurn = false
                ispTurn = true;

             }
             else if(num === 1 && iscTurn === true && d2.textContent == ''){
                d2.textContent = "O"
                
                iscTurn = false;
                 ispTurn = true;
                
            }
            else if(num === 2 && iscTurn === true && d3.textContent == ''){
                d3.textContent = "O"
                
                iscTurn = false;
                 ispTurn = true;
                
            }
            else if(num === 3 && iscTurn === true && d4.textContent == ''){
                d4.textContent = "O"
                
                iscTurn = false;
                 ispTurn = true;
                
            }
            else if(num === 4 && iscTurn === true && d5.textContent == ''){
                d5.textContent = "O"
                
                iscTurn = false;
                 ispTurn = true;   
            }
            else if(num === 5 && iscTurn === true && d6.textContent == ''){
                d6.textContent = "O"
                
                iscTurn = false;
                 ispTurn = true;
            }
            else if(num === 6 && iscTurn === true && d7.textContent === ''){
                d7.textContent = "O"
                
                iscTurn = false;
                 ispTurn = true;
            }
            else if(num === 7 && iscTurn === true && d8.textContent === ''){
                d8.textContent = "O"
                
                iscTurn = false;
                 ispTurn = true;
            }
            else if(num === 8 && iscTurn === true && d9.textContent === ''){
                d9.textContent = "O"
                
                iscTurn = false;
                 ispTurn = true;
            }
            checkPlayer();
            
         })
         
         
         
         
         
        })


             
             
       
     const checkPlayer = () =>{
         //check rows \\
          if(d1.textContent === 'X' && 
          d2.textContent === 'X' && 
          d3.textContent === 'X' ||
          d4.textContent === 'X' && 
          d5.textContent === 'X' && 
          d6.textContent === 'X' ||
          d7.textContent === 'X' && 
          d8.textContent === 'X' && 
          d9.textContent === 'X'
          ){
            pscore++
            updateScore();
            isGameEnd = true;
            endGame();
          }






         //check Columns \\

         if(d1.textContent === 'X' && 
         d4.textContent === 'X' && 
         d7.textContent === 'X' ||
         d2.textContent === 'X' && 
         d5.textContent === 'X' && 
         d8.textContent === 'X' ||
         d3.textContent === 'X' && 
         d6.textContent === 'X' && 
         d9.textContent === 'X'
         ){
            pscore++
            updateScore();
            isGameEnd = true;
            endGame();
         }
         //check Waters \\
         if(d1.textContent === 'X' && 
         d5.textContent === 'X' && 
         d9.textContent === 'X' ||
         d3.textContent === 'X' && 
         d5.textContent === 'X' && 
         d7.textContent === 'X' 
         ){
             pscore++
             updateScore();
             isGameEnd = true;
             endGame();
         }
         //check rows \\
         if(d1.textContent === 'O' && 
         d2.textContent === 'O' && 
         d3.textContent === 'O' ||
         d4.textContent === 'O' && 
         d5.textContent === 'O' && 
         d6.textContent === 'O' ||
         d7.textContent === 'O' && 
         d8.textContent === 'O' && 
         d9.textContent === 'O'
         ){
           cscore++
           updateScore();
           isGameEnd = true;
           endGame();
         }






        //check Columns \\

        if(d1.textContent === 'O' && 
        d4.textContent === 'O' && 
        d7.textContent === 'O' ||
        d2.textContent === 'O' && 
        d5.textContent === 'O' && 
        d8.textContent === 'O' ||
        d3.textContent === 'O' && 
        d6.textContent === 'O' && 
        d9.textContent === 'O'
        ){
           cscore++
           updateScore();
           isGameEnd = true;
           endGame();
        }
        //check Waters \\
        if(d1.textContent === 'O' && 
        d5.textContent === 'O' && 
        d9.textContent === 'O' ||
        d3.textContent === 'O' && 
        d5.textContent === 'O' && 
        d7.textContent === 'O' ){
            cscore++
            updateScore();
            isGameEnd = true;
            endGame();
        }
        //Check Tie
        if(d1.textContent != '' &&
        d2.textContent != ''&&
        d3.textContent != ''&&
        d4.textContent != ''&&
        d5.textContent != ''&&
        d6.textContent != ''&&
        d7.textContent != ''&&
        d8.textContent != ''&&
        d9.textContent != ''){
            isGameEnd = true;
            endGame();
        }
        

    }



const updateScore = () =>{
    playerScore.textContent = `Player Score ${pscore}`
    computerScore.textContent = `Computer Score ${cscore}`
} 
const endGame = () =>{
   for(box of boxes)
        if(isGameEnd === true){d1.textContent = '';
            d1.textContent = '';
            d2.textContent = '';
            d3.textContent = '';
            d4.textContent = '';
            d5.textContent = '';
            d6.textContent = '';
            d7.textContent = '';
            d8.textContent = '';
            d9.textContent = '';
            isGameEnd = false;
            ispTurn = true;
            iscTurn = false;
        }
   
}


}
game();
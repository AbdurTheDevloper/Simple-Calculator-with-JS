
// let button = document.querySelectorAll('button');
// let outputArea = document.getElementById('outputArea');

// for(var i = 0; i< button.length; i++){
//      button[i].addEventListener('click', function(){
//         let result = this.innerHTML;
//         outputArea.value += result;
//      })
     
// }

// let clearBtn = document.getElementById('clearBtn');
// clearBtn.addEventListener('click', function(){
//     outputArea.value = ' ';
// })



let button = document.querySelectorAll('button');
let outputArea = document.getElementById('outputArea');
let screenValue = '';

for(item of button){
     item.addEventListener('click', function(e){
         buttonText = e.target.innerText;
         if(buttonText == "X"){
            buttonText = '*';
            screenValue += buttonText;
            outputArea.value = screenValue;
         }else if(buttonText == 'C'){
            screenValue = '';
            outputArea.value = screenValue;
         }else if(buttonText == '='){
                 outputArea.value = eval(screenValue);
         }else{
            screenValue += buttonText ; 
            outputArea.value = screenValue ; 
         }
     })
}

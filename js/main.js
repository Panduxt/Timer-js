(function(){
 
 var div = document.querySelector('#timer');
 var startBtn = document.querySelector('#start');
 var stopBtn =  document.querySelector('#stop');
 var pauseBtn =  document.querySelector('#pause');
 var printBtn =  document.querySelector('#print');
 var memory =   document.querySelector('#memory');
 var interval = null;
 var number = 0;


 function incrementTime(){
    number += 1;
    div.innerHTML = number;
 }

 function start (){
 	if(interval){
 		return false;
 	}
    interval = setInterval(incrementTime , 1000);

     console.log('ok');	
     return false;
} 

function stop(){
    if(interval){
    	clearInterval(interval);
    	interval = null;
    	number = 0;
    	div.innerHTML = number; 
    }
}
function pause(){
      if(interval){
      	clearInterval(interval);
      	interval = null;
      }
}  
 
 function print(){
 	var li = document.createElement('LI');
 	li.innerHTML = number;
 	memory.appendChild(li);
 	memoryBoxScroll(memory)
 }

 function memoryBoxScroll(box) {
        box.scrollTop = box.scrollHeight;
}
 
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
pauseBtn.addEventListener('click', pause);
printBtn. addEventListener('click', print);
}());





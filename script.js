var playing = false;
var score = 0; 
var time = 60;
var shih ;
 var wrong

 
document.getElementById("start_stop").onclick = function (){
    if (playing === true)
        { 
            location.reload()
            playing = false 
        }
    
    else {
                   playing = true;
        document.getElementById("time").style.visibility="visible"
        document.getElementById("start_stop").innerHTML = "<p>Rest Game</p>"
        document.getElementById("score_1").innerHTML= score
         startcountdown();
          random_bitch();
         }
}

function startcountdown() {
    action = setInterval(function(){
        time -= 1 ;
        document.getElementById("sec").innerHTML = time
        if(time == 0){
                  stopcountdown();
           
    
        document.getElementById("gg").style.visibility= "visible"
        document.getElementById("final").innerHTML= score
         document.getElementById("start_stop").innerHTML = "<p>Rest Game</p>"
              playing = true;
            
        }
       
    },1000);
             
}
for(var m = 1 ; m<5 ; m++){ 
document.getElementById("box"+m).onclick = function(){
    if (playing == true){
        if (this.innerHTML == "<p>"+shih+"</p>")
            {
                score += 1 ;
                 
                document.getElementById("score_1").innerHTML = score ;
                                  document.getElementById("bad").style.visibility="hidden"
                  document.getElementById("good").style.visibility= "visible"
                  setTimeout(function(){
                        document.getElementById("good").style.visibility= "hidden"
                  },1000)
                random_bitch ()
            }
        else {
                
                  document.getElementById("good").style.visibility="hidden"
                  document.getElementById("bad").style.visibility= "visible"
                  setTimeout(function(){
                        document.getElementById("bad").style.visibility= "hidden"
                  },1000)
            
        }
        }
}
}
 

function  stopcountdown(){
    clearInterval(action);
}
function random_bitch (){
     var x =1 + Math.floor(Math.random()*9)
     var y =1 + Math.floor(Math.random()*9)
     let position = 1+ Math.round(Math.random()*3)
      shih = x*y
    document.getElementById("question").innerHTML = "<p>"+x+"X"+y+"</p>"
    document.getElementById("box"+position).innerHTML = "<p>"+shih+"</p>"
    
var array = [shih]
for (i = 1 ; i <5 ; i++){
    if (i != position){
    
   do
       {
         var wrong = 1 + Math.floor(Math.random()*81)  
       }
    while (array.indexOf(wrong) != -1)
    array.push(wrong)
     document.getElementById("box"+i).innerHTML = "<p>"+wrong+"</p>"
    }
}
}


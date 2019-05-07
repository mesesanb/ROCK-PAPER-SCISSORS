var rps=['rock', 'paper','scissors']
var  c = 0, h = 0 ;


function getRandomInt() {
    return Math.floor(Math.random() *3);
  }
 
function initialise(){
    $("#comp").removeClass().addClass("draw");
    $("#hum").removeClass().addClass("draw");
    $("#rezultat").removeClass();
}

function getSelectedValue(){
    var selectedValue = $("#optiuni option:selected").val();
    gamevar2(selectedValue);
    }


function gamevar2(selectedValue){

   var computer = rps[getRandomInt()];
   var human = selectedValue; 
   $("#rezultat").addClass("result");
  

    if (computer === human){ 
       
        $("#rezultat").html("IT'S A DRAW");
        $("#comp").removeClass().addClass("draw");
        $("#hum").removeClass().addClass("draw");
       
    }  
        else if ((computer ==="rock" && human !== "paper") || (computer ==="paper" && human !== "scissors") || (computer ==="scissors" && human !== "rock")){ 
        c ++;
        $("#rezultat").html("COMPUTER WINS"); 
        $("#comp").removeClass().addClass("winner");
        $("#hum").removeClass().addClass("looser");
      
      }   else  {
        h++;
        $("#rezultat").html("HUMAN WINS")
        $("#comp").removeClass().addClass("looser");
        $("#hum").removeClass().addClass("winner");
             
        }

        $("#output1").html(computer);
        $("#output2").html(human);
        $("#scor1").html(c);
        $("#scor2").html(h);
        
    }


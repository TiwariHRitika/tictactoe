    turn=1;
      function onclick1(){
       if(turn==1){
        document.getElementById("inp1").value="X";
        document.getElementById("inp1").disabled= true;
        turn=0;
       }
       else{
           document.getElementById("inp1").value="O";
           document.getElementById("inp1").disabled= true;
           turn=1;
       }
      }
      function onclick2(){
       if(turn==1){
        document.getElementById("inp2").value="X";
        document.getElementById("inp2").disabled= true;
        turn=0;
       }
       else{
           document.getElementById("inp2").value="O";
           document.getElementById("inp2").disabled= true;
           turn=1;
       }
      }
      function onclick3(){
       if(turn==1){
        document.getElementById("inp3").value="X";
        document.getElementById("inp3").disabled= true;
        turn=0;
       }
       else{
           document.getElementById("inp3").value="O";
           document.getElementById("inp3").disabled= true;
           turn=1;
       }
      }
      function onclick4(){
       if(turn==1){
        document.getElementById("inp4").value="X";
        document.getElementById("inp4").disabled= true;
        turn=0;
       }
       else{
           document.getElementById("inp4").value="O";
           document.getElementById("inp4").disabled= true;
           turn=1;
       }
      }
      function onclick5(){
       if(turn==1){
        document.getElementById("inp5").value="X";
        document.getElementById("inp5").disabled= true;
        turn=0;
       }
       else{
           document.getElementById("inp5").value="O";
           document.getElementById("inp5").disabled= true;
           turn=1;
       }
      }
      function onclick6(){
       if(turn==1){
        document.getElementById("inp6").value="X";
        document.getElementById("inp6").disabled= true;
        turn=0;
       }
       else{
           document.getElementById("inp6").value="O";
           document.getElementById("inp6").disabled= true;
           turn=1;
       }
      }
      function onclick7(){
       if(turn==1){
        document.getElementById("inp7").value="X";
        document.getElementById("inp7").disabled= true;
        turn=0;
       }
       else{
           document.getElementById("inp7").value="O";
           document.getElementById("inp7").disabled= true;
           turn=1;
       }
      }
      function onclick8(){
       if(turn==1){
        document.getElementById("inp8").value="X";
        document.getElementById("inp8").disabled= true;
        turn=0;
       }
       else{
           document.getElementById("inp8").value="O";
           document.getElementById("inp8").disabled= true;
           turn=1;
       }
      }
      function onclick9(){
       if(turn==1){
        document.getElementById("inp9").value="X";
        document.getElementById("inp9").disabled= true;
        turn=0;
       }
       else{
           document.getElementById("inp9").value="O";
           document.getElementById("inp9").disabled= true;
           turn=1;
       }
      }
    
    function myfunc(){
    var inp1=document.getElementById("inp1").value;
    var inp2=document.getElementById("inp2").value;
    var inp3=document.getElementById("inp3").value;
    var inp4=document.getElementById("inp4").value;
    var inp5=document.getElementById("inp5").value;
    var inp6=document.getElementById("inp6").value;
    var inp7=document.getElementById("inp7").value;
    var inp8=document.getElementById("inp8").value;
    var inp9=document.getElementById("inp9").value;
    var in1=document.getElementById("inp1");
    var in2=document.getElementById("inp2");
    var in3=document.getElementById("inp3");
    var in4=document.getElementById("inp4");
    var in5=document.getElementById("inp5");
    var in6=document.getElementById("inp6");
    var in7=document.getElementById("inp7");
    var in8=document.getElementById("inp8");
    var in9=document.getElementById("inp9");

      if((inp1 == "X") && (inp2 == "X") && (inp3 == "X")){
        document.getElementById("print-win").innerHTML="Player X Won";
        in4.disabled= true;
        in5.disabled= true;
        in6.disabled= true;
        in7.disabled= true;
        in8.disabled= true;
        in9.disabled= true;  
        in1.style.color="black";
        in2.style.color="black";
        in3.style.color="black";
        in1.style.backgroundColor="green";
        in2.style.backgroundColor="green";
        in3.style.backgroundColor="green";
    }
    else if((inp1 == "X") && (inp4 == "X") && (inp7 == "X")){
        document.getElementById("print-win").innerHTML="Player X Won";
        in2.disabled= true;
        in5.disabled= true;
        in6.disabled= true;
        in3.disabled= true;
        in8.disabled= true;
        in9.disabled= true;  
        in1.style.color="black";
        in4.style.color="black";
        in7.style.color="black";
        in1.style.backgroundColor="green";
        in4.style.backgroundColor="green";
        in7.style.backgroundColor="green";
    }
    else if((inp1 == "X") && (inp5 == "X") && (inp9 == "X")){
        document.getElementById("print-win").innerHTML="Player X Won";
        in4.disabled= true;
        in3.disabled= true;
        in6.disabled= true;
        in7.disabled= true;
        in8.disabled= true;
        in2.disabled= true;  
        in1.style.color="black";
        in5.style.color="black";
        in9.style.color="black";
    }
    else if((inp4 == "X") && (inp5 == "X") && (inp6 == "X")){
        document.getElementById("print-win").innerHTML="Player X Won";
        in1.disabled= true;
        in2.disabled= true;
        in3.disabled= true;
        in7.disabled= true;
        in8.disabled= true;
        in9.disabled= true;  
        in4.style.color="black";
        in5.style.color="black";
        in6.style.color="black";
        in4.style.backgroundColor="green";
        in5.style.backgroundColor="green";
        in6.style.backgroundColor="green";
    }
   else if((inp7 == "X") && (inp8 == "X") && (inp9 == "X")){
        document.getElementById("print-win").innerHTML="Player X Won";
        in4.disabled= true;
        in5.disabled= true;
        in6.disabled= true;
        in1.disabled= true;
        in2.disabled= true;
        in3.disabled= true;  
        in7.style.color="black";
        in8.style.color="black";
        in9.style.color="black";
        in7.style.backgroundColor="green";
        in8.style.backgroundColor="green";
        in9.style.backgroundColor="green";
    }
   else if((inp2 == "X") && (inp5 == "X") && (inp8 == "X")){
        document.getElementById("print-win").innerHTML="Player X Won";
        in4.disabled= true;
        in1.disabled= true;
        in6.disabled= true;
        in7.disabled= true;
        in3.disabled= true;
        in9.disabled= true;  
        in5.style.color="black";
        in2.style.color="black";
        in8.style.color="black";
        in5.style.backgroundColor="green";
        in2.style.backgroundColor="green";
        in8.style.backgroundColor="green";
    }
   else if((inp3 == "X") && (inp6 == "X") && (inp9 == "X")){
        document.getElementById("print-win").innerHTML="Player X Won";
        in1.disabled= true;
        in2.disabled= true;
        in4.disabled= true;
        in5.disabled= true;
        in7.disabled= true;
        in8.disabled= true;  
        in6.style.color="black";
        in9.style.color="black";
        in3.style.color="black";
        in6.style.backgroundColor="green";
        in9.style.backgroundColor="green";
        in3.style.backgroundColor="green";
    }
   else if((inp3 == "X") && (inp5 == "X") && (inp7 == "X")){
        document.getElementById("print-win").innerHTML="Player X Won";
        in1.disabled= true;
        in2.disabled= true;
        in4.disabled= true;
        in6.disabled= true;
        in8.disabled= true;
        in9.disabled= true;  
        in5.style.color="black";
        in7.style.color="black";
        in3.style.color="black";
        in5.style.backgroundColor="green";
        in7.style.backgroundColor="green";
        in3.style.backgroundColor="green";
    }

    else if((inp1 == "O") && (inp2 == "O") && (inp3 == "O")){
        document.getElementById("print-win").innerHTML="Player O Won";
        in4.disabled= true;
        in5.disabled= true;
        in6.disabled= true;
        in7.disabled= true;
        in8.disabled= true;
        in9.disabled= true;  
        in1.style.color="black";
        in2.style.color="black";
        in3.style.color="black";
        in1.style.backgroundColor="green";
        in2.style.backgroundColor="green";
        in3.style.backgroundColor="green";
    }
    else if((inp1 == "O") && (inp4 == "O") && (inp7 == "O")){
        document.getElementById("print-win").innerHTML="Player O Won";
        in2.disabled= true;
        in5.disabled= true;
        in6.disabled= true;
        in3.disabled= true;
        in8.disabled= true;
        in9.disabled= true;  
        in1.style.color="black";
        in4.style.color="black";
        in7.style.color="black";
        in1.style.backgroundColor="green";
        in4.style.backgroundColor="green";
        in7.style.backgroundColor="green";
    }
    else if((inp1 == "O") && (inp5 == "O") && (inp9 == "O")){
        document.getElementById("print-win").innerHTML="Player O Won";
        in4.disabled= true;
        in3.disabled= true;
        in6.disabled= true;
        in7.disabled= true;
        in8.disabled= true;
        in2.disabled= true;  
        in1.style.color="black";
        in5.style.color="black";
        in9.style.color="black";
        in1.style.backgroundColor="green";
        in5.style.backgroundColor="green";
        in9.style.backgroundColor="green";
    }
    else if((inp4 == "O") && (inp5 == "O") && (inp6 == "O")){
        document.getElementById("print-win").innerHTML="Player O Won";
        in1.disabled= true;
        in2.disabled= true;
        in3.disabled= true;
        in7.disabled= true;
        in8.disabled= true;
        in9.disabled= true;  
        in4.style.color="black";
        in5.style.color="black";
        in6.style.color="black";
        in4.style.backgroundColor="green";
        in5.style.backgroundColor="green";
        in6.style.backgroundColor="green";
    }
   else if((inp7 == "X") && (inp8 == "X") && (inp9 == "X")){
        document.getElementById("print-win").innerHTML="Player X Won";
        in4.disabled= true;
        in5.disabled= true;
        in6.disabled= true;
        in1.disabled= true;
        in2.disabled= true;
        in3.disabled= true;  
        in7.style.color="black";
        in8.style.color="black";
        in9.style.color="black";
        in7.style.backgroundColor="green";
        in8.style.backgroundColor="green";
        in9.style.backgroundColor="green";
    }
   else if((inp2 == "O") && (inp5 == "O") && (inp8 == "O")){
        document.getElementById("print-win").innerHTML="Player O Won";
        in4.disabled= true;
        in1.disabled= true;
        in6.disabled= true;
        in7.disabled= true;
        in3.disabled= true;
        in9.disabled= true;  
        in5.style.color="black";
        in2.style.color="black";
        in8.style.color="black";
        in5.style.backgroundColor="green";
        in2.style.backgroundColor="green";
        in8.style.backgroundColor="green";
    }
   else if((inp3 == "O") && (inp6 == "O") && (inp9 == "O")){
        document.getElementById("print-win").innerHTML="Player O Won";
        in1.disabled= true;
        in2.disabled= true;
        in4.disabled= true;
        in5.disabled= true;
        in7.disabled= true;
        in8.disabled= true;  
        in6.style.color="black";
        in9.style.color="black";
        in3.style.color="black";
        
        in6.style.backgroundColor="green";
        in9.style.backgroundColor="green";
        in3.style.backgroundColor="green";
    }
   else if((inp3 == "O") && (inp5 == "O") && (inp7 == "O")){
        document.getElementById("print-win").innerHTML="Player O Won";
        in1.disabled= true;
        in2.disabled= true;
        in4.disabled= true;
        in6.disabled= true;
        in8.disabled= true;
        in9.disabled= true;  
        in5.style.color="black";
        in7.style.color="black";
        in3.style.color="black";
        in5.style.backgroundColor="green";
        in7.style.backgroundColor="green";
        in3.style.backgroundColor="green";
    }
    else if((inp1 == "X" || inp1 == "O") &&(inp2 == "X" || inp2 == "O") &&(inp3 == "X" || inp3 == "O") &&(inp4 == "X" || inp4 == "O") &&
    (inp5 == "X" || inp5 == "O") &&(inp6 == "X" || inp6 == "O") &&(inp7 == "X" || inp7 == "O") &&(inp8 == "X" || inp8 == "O") &&
    (inp9 == "X" || inp9 == "O")){
        document.getElementById("print-win").innerHTML="Tie";
        in1.style.color="black";
        in2.style.color="black";
        in3.style.color="black";
        in4.style.color="black";
        in5.style.color="black";
        in6.style.color="black";
        in7.style.color="black";
        in8.style.color="black";
        in9.style.color="black";
    }
    else{
        if(turn == 1){
           document.getElementById("print-win").innerHTML="Player X Turn";
        }
        else{
           document.getElementById("print-win").innerHTML="Player O Turn";
        }
    }
}

function reset(){
    location.reload();
}
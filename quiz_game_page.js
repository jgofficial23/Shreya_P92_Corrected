player1_score = 0;
player2_score = 0;
pp1=localStorage.getItem("Player1");
pp2=localStorage.getItem("Player2")

document.getElementById("player1_name").innerHTML=pp1 + ": ";
document.getElementById("player2_name").innerHTML=pp2 + ": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("q_turn").innerHTML = "Question Turn - " + pp1 ;
document.getElementById("a_turn").innerHTML = "Answer Turn - " + pp2 ;


function send(){    
    number1 = Number(document.getElementById("num1").value);
    number2 = Number(document.getElementById("num2").value);
    actual_number = number1*number2;
    console.log(number1);
    console.log(number2);
    console.log(actual_number);
    question_number = "<h4>"+number1+" "+"X"+" "+number2+"</h4>";
    input_box = "<br> Answer: <input type='text' placeholder='Answer' id='inputbox'>";
    check_button= "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    //console.log("I am inside the check function");
    get_answer = document.getElementById("inputbox").value;

    if(get_answer == actual_number)
        {
        if(answer_turn=="player1")
        {
            player1_score = player1_score+1;
            console.log(player1_score);
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score = player2_score+1;
            console.log(player2_score);
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("q_turn").innerHTML = "Question Turn - " + pp2 ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("q_turn").innerHTML = "Question Turn - " + pp1 ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("a_turn").innerHTML = "Answer Turn - " + pp2 ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("a_turn").innerHTML = "Answer Turn - " + pp1 ;
	}

    document.getElementById("output").innerHTML = "";
    }
  
}
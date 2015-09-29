var dir = "e";


function runCode(){
  var move = "Player.move('"+dir+"',50);";

  console.log("Run Code");
  var array = new Array();
  var codeToCompile = "var Player = Crafty.e('Player').at(10,10);";

  $('#drop').children().each(function(){
    array.push($(this).attr('id'));
    switch ($(this).attr('id')) {
      case "newmove":
        codeToCompile += move;
        break;
        case "newturn":
          codeToCompile += turn();
          break;
      default:
    }
  });
  input_value = array.toString();
//  $('#children').val(input_value);
  console.log("inpur array"+input_value);

  console.log("codeToCompile"+codeToCompile);
  //var Player = Crafty.e('Player').at(10,10);Player.move('n',50);Player.move('n',50);Player.move('n',50);Player.move('n',50);
  /*var Player = Crafty.e('Player').at(10,10);
  Player.move("n", 100);*/
  var a = eval(codeToCompile);

}

function turn(){
  switch (dir) {
    case "n":
      dir = "e";
      break;
    case "e":
      dir = "s";
      break;
    case "s":
      dir = "w";
      break;
    case "w":
      dir = "n";
      break;
    default:

  }
  return dir;
}

/*
//Execute F whenever I want:
var theInstructions = "alert('Hello World'); var x = 100";

var F=new Function (theInstructions);

return(F());

//Execute F right now:

var a = eval("x * y");
*/

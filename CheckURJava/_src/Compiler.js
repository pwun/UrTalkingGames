var _dir = "e";
var _move = "Player.move('"+_dir+"',50);";
var _if = "if(true){console.log('if');}";

function runCode(){
  console.log("Run Code");
  var array = new Array();
  //Init Player at the upper left corner of the level
  var codeToCompile = "var Player = Crafty.e('Player').at(1,1);";

  $('#drop').children().each(function(){
    array.push($(this).attr('id'));
    switch ($(this).attr('id')) {
      case "do_move":
        codeToCompile += _move;
        break;
        case "do_turn":
          codeToCompile += _turn();
          break;
        case "do_if":
          codeToCompile += _if;
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

function _turn(){
  switch (_dir) {
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

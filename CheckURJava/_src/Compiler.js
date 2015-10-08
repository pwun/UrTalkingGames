var _dir = "e";
var _step = 50; // width/height tile

function runCode(){

  console.log("Run Code");
  var array = new Array();
  //Init Player at the upper left corner of the level
  var codeToCompile = "var Player = Crafty.e('Player').at(1,1);";

  $('#drop').children().each(function(){
    array.push($(this).attr('class'));
    switch ($(this).attr('class')) {
      case "move":
        codeToCompile += _move();
        break;
        case "turn":
          codeToCompile += _turn();
          break;
        case "if":
          codeToCompile += _if($(this));
          break;
        case "for":
          codeToCompile += _for($(this));
          break;
        case "while":
          codeToCompile += _while($(this));
          break;
      default:
    }
  });
//  input_value = array.toString();
//  $('#children').val(input_value);
//  console.log("input array"+input_value);

  console.log("codeToCompile"+codeToCompile);
  //var Player = Crafty.e('Player').at(10,10);Player.move('n',50);Player.move('n',50);Player.move('n',50);Player.move('n',50);
  /*var Player = Crafty.e('Player').at(10,10);
  Player.move("n", 100);*/
  _dir = "e";
  var a = eval(codeToCompile);
}

function writeCode(root){
  var codeToSave = "";
  //var array = new Array();
  $(root).children().each(function(){
    //array.push($(root).attr('class'));
    console.log("Found Input Class: "+$(this).attr('class'));
    switch ($(this).attr('class')) {
      case "move":
        codeToSave += _move();
        break;
        case "turn":
          codeToSave += _turn();
          break;
        case "if":
          codeToSave += _if($(root));
          break;
        case "for":
          codeToSave += _for($(root));
          break;
        case "while":
          codeToSave += _while($(root));
          break;
    }
  });
  console.log("Code-Injection: "+codeToSave);
  return codeToSave;
}

function _for(segment){
  //ACHTUNG!!! Richtung für move wird nur am anfang berechnet!!! dynamisch im code abfragen!
  code = writeCode(segment.find(".input:first"));
  statement = parseInt(segment.find(".numberInput").val(),10);
  console.log("statement: "+statement);
  return "for(i = 0; i < "+statement+";i++){"+code+"}";
}

function _while(segment){
  code = writeCode(segment.find(".input:first"));
  statement = segment.find(".condition").children().first().attr('class');
  console.log("statement: "+statement);
  switch (statement) {
    case "frontIsClear":
      return "while(Player.frontIsClear()){"+code+"}";
      break;
    case "frontIsBlocked":
      return "while(! Player.frontIsBlocked()){"+code+"}";
      break;
    default:
    return "";
  }
}

function _if(segment){
  code = writeCode(segment.find(".input:first"));
  statement = segment.find(".condition").children().first().attr('class');
  console.log("statement: "+statement);
  switch (statement) {
    case "frontIsClear":
      console.log("if(Player.frontIsClear(){"+code+"}");
      return "if(Player.frontIsClear()){"+code+"}";
      break;
    case "frontIsBlocked":
      return "if(! Player.frontIsBlocked()){"+code+"}";
      break;
    default:
    return "";
  }
}

function _move(){

    //Global Timeout missing
  //return "setTimeout(function() { Player.move('"+_dir+"',"+ _step +"); }, 1000);";
  return "Player.move('"+_dir+"',"+ _step +");";//" }, 1000);";


}

function _turn(){
  switch (_dir) {
    case "n":
      _dir = "e";
      break;
    case "e":
      _dir = "s";
      break;
    case "s":
      _dir = "w";
      break;
    case "w":
      _dir = "n";
      break;
  }
  return "Player.rotation+=90;";
}


/*
//Execute F whenever I want:
var theInstructions = "alert('Hello World'); var x = 100";

var F=new Function (theInstructions);

return(F());

//Execute F right now:

var a = eval("x * y");
*/

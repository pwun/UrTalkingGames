//var _dir = "e";
var _step = Game.width()/32;
var counters = new Array();// = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14','c15','c16','c17','c18','c19','c20'];
var countersCounter = 0;
//var moveStatement = "Player.move('e',"+ _step +");";

function runCode(){

  for(i = 0; i< 100;i++){
    counters[i] = "c"+i;
  }
  console.log("Run Code");
  var array = new Array();
  //Init Player at the upper left corner of the level
  var codeToCompile = "function won(){return Player.intersect(Crafty('Target'));}"+
  "function frontIsClear(){var b = true; switch(dir){case 'n':Crafty('Obstacle').each(function() {if(this.intersect(Player.x, Player.y-10, Player.w, Player.h)){b = false;}});break;case 'e':Crafty('Obstacle').each(function() {if(this.intersect(Player.x+10, Player.y, Player.w, Player.h)){b = false;}});break;case 's':Crafty('Obstacle').each(function() {if(this.intersect(Player.x, Player.y+10, Player.w, Player.h)){b = false;}});break;case 'w':Crafty('Obstacle').each(function() {if(this.intersect(Player.x-10, Player.y, Player.w, Player.h)){b = false;}});break;}return b;}"
+"function turn(){switch (dir) {case 'n':dir = 'e';break;case 'e':dir = 's';break;case 's':dir = 'w';break;case 'w':dir = 'n';break;}}"+
  "var Player = Crafty.e('Player').at(1,1);var dir = 'e';";

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
  countersCounter++;
  return "for("+counters[countersCounter]+" = 0; "+counters[countersCounter]+" < "+statement+";"+counters[countersCounter]+"++){"+code+"}";
}

function _while(segment){
  code = writeCode(segment.find(".input:first"));
  statement = segment.find(".condition").children().first().attr('class');
  console.log("statement: "+statement);
  switch (statement) {
    case "frontIsClear":
      return "while(frontIsClear()){"+code+"}";
      break;
    case "frontIsBlocked":
      return "while(! frontIsClear()){"+code+"}";
      break;
    case "notTarget":
      return "while(! won()){"+code+"}";
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
      return "if(frontIsClear()){"+code+"}";
      break;
    case "frontIsBlocked":
      return "if(! frontIsClear()){"+code+"}";
      break;
    case "notTarget":
      return "if(! won()){"+code+"}";
      break;
    default:
    return "";
  }
}

function _move(){
    //Global Timeout missing
  //return "setTimeout(function() { Player.move('"+_dir+"',"+ _step +"); }, 1000);";
  return "Player.move(dir,"+ _step +");";//" }, 1000);";
}

function _turn(){
  return "Player.rotation+=90;turn();";
}



//Crafty('Obstacle').each(function() {if(this.intersect(Player.x -20, Player.y, 30,30)){alert('hello');this.move('e',50);}});

/*
//Execute F whenever I want:
var theInstructions = "alert('Hello World'); var x = 100";

var F=new Function (theInstructions);

return(F());

//Execute F right now:

var a = eval("x * y");
*/

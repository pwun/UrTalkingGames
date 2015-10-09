//var _dir = "e";
var _step = Game.width()/32;
var counters = new Array();// = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14','c15','c16','c17','c18','c19','c20'];
var countersCounter = 0;
var score = 0;
//var moveStatement = "Player.move('e',"+ _step +");";

function deleteCode(){
  $('#drop').empty();
}

function runCode(){

  for(i = 0; i< 100;i++){
    counters[i] = "c"+i;
  }
  var array = new Array();
  //Init Player at the upper left corner of the level
  var codeToCompile = "function won(){return Player.intersect(Crafty('Target'));}"+
  "function frontIsClear(){var b = true; switch(dir){case 'n':Crafty('Obstacle').each(function() {if(this.intersect(Player.x, Player.y-10, Player.w, Player.h)){b = false;}});break;case 'e':Crafty('Obstacle').each(function() {if(this.intersect(Player.x+10, Player.y, Player.w, Player.h)){b = false;}});break;case 's':Crafty('Obstacle').each(function() {if(this.intersect(Player.x, Player.y+10, Player.w, Player.h)){b = false;}});break;case 'w':Crafty('Obstacle').each(function() {if(this.intersect(Player.x-10, Player.y, Player.w, Player.h)){b = false;}});break;}return b;}"
+"function turn(){switch (dir) {case 'n':dir = 'e';break;case 'e':dir = 's';break;case 's':dir = 'w';break;case 'w':dir = 'n';break;}}"+
  "Crafty('Player').each(function(){this.destroy()});var Player = Crafty.e('Player').at(1,1);var dir = 'n';";

  score = 100;
  $('#drop').children().each(function(){
    array.push($(this).attr('class'));
    switch ($(this).attr('class')) {
      case "move":
        codeToCompile += _move();
        score -= 3;
        break;
        case "turn":
          codeToCompile += _turn();
          score -= 3;
          break;
        case "if":
          codeToCompile += _if($(this));
          score--;
          break;
        case "for":
          codeToCompile += _for($(this));
          score--;
          break;
        case "while":
          codeToCompile += _while($(this));
          score--;
          break;
      default:
    }
  });

  var a = eval(codeToCompile);
  document.getElementById("score").innerHTML = "Punktzahl: "+ score;
}

function writeCode(root){
  var codeToSave = "";
  $(root).children().each(function(){
    switch ($(this).attr('class')) {
      case "move":
        codeToSave += _move();
        score-=3;
        break;
        case "turn":
          codeToSave += _turn();
          score-=3;
          break;
        case "if":
          codeToSave += _if($(root));
          score--;
          break;
        case "for":
          codeToSave += _for($(root));
          score--;
          break;
        case "while":
          codeToSave += _while($(root));
          score--;
          break;
    }
  });
  return codeToSave;
}

function _for(segment){
  code = writeCode(segment.find(".input:first"));
  statement = parseInt(segment.find(".numberInput").val(),10);
  countersCounter++;
  return "for("+counters[countersCounter]+" = 0; "+counters[countersCounter]+" < "+statement+";"+counters[countersCounter]+"++){"+code+"}";
}

function _while(segment){
  code = writeCode(segment.find(".input:first"));
  statement = segment.find(".condition").children().first().attr('class');
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
  switch (statement) {
    case "frontIsClear":
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
  return "Player.move(dir,"+ _step +");";
  //return "Player.tween({x:Player.x+"+_step+"}, 1000);";
}

function _turn(){
  return "Player.rotation+=90;turn();";
  //return "turn();Player.tween({rotation:90}, 1000);";
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    switch (data) {
      case 'move':
        e = $("<div draggable='true' class='move'>geh 1 Schritt</div>");
        break;
      case 'turn':
        e = $("<div draggable='true' class='turn'>Dreh Dich</div>");
        break;
      case 'if':
        e = $("<div class='if'>Falls <div class='condition'></div> mach <div class='input'></div></div>");
        break;
      case 'for':
        e = $("<div class='for'>Mach <input type='number' class='numberInput' /input>Mal<div class='input'></div></div>");
        break;
      case 'while':
        e = $("<div class='while'>Solange<div class='condition'></div> mach <div class='input'></div></div>");
        break;
      case 'frontClear':
        e = $("<div class='frontIsClear'>vorne frei<div>");
        break;
      case 'frontBlocked':
        e = $("<div class='frontIsBlocked'>vorne blockiert<div>");
        break;

      default:

    }
    $(event.target).append(e);
}

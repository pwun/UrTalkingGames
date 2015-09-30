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
        e = $("<div draggable='true'>geh 1 Schritt</div>");
        break;
      case 'turn':
        e = $("<div draggable='true'>Dreh Dich</div>");
        break;
      case 'if':
        e = $("<div>Falls <div class='condition'>Y>5</div> mach <div class='input'></div></div>");
        break;
      case 'for':
        e = $("<div>Mach X-Mal<div class='input'></div></div>");
        break;
      case 'while':
        e = $("<div>Solange <div class='condition'>X<5</div> mach <div class='input'></div></div>");
        break;

      default:

    }
    $(event.target).append(e);
}

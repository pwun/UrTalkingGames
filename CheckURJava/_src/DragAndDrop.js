function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    /*ev.target.appendChild(document.getElementById(data));*/
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "new" + data; /* We cannot use the same ID */
    ev.target.appendChild(nodeCopy);
}

'use strict';

function WebSocketRequestObject (id) {
    const display        = id.querySelector('.calculator-display');
    const secretButton   = id.querySelector('.calculator-secretButton');
    const ws             = new WebSocket("ws://localhost:8081");

    ws.onmessage = function (event) {
        display.textContent = event.data; // replaces value dispalyes with a data recived from server
    };

    secretButton.addEventListener('click', function () {ws.send(display.textContent)}); // sends dislayed value to WebSoscket server for calculation
};

export default WebSocketRequestObject;

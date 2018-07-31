'use strict';

function WebSocketRequestObject (id) {

    return new Promise(function(resolve, reject) { 

        const display        = id.querySelector('.calculator-display');
        const secretButton   = id.querySelector('.calculator-secretButton');
        const ws             = new WebSocket("ws://localhost:8081");

        ws.onmessage = function (event) {
            if (event.data === 'Error') {
                reject (new Error ('Request to server has failed'))
            } else {
                resolve ('Data successesfully received')
                display.textContent = event.data; // replaces value dispalyes with a data recived from server
            };
        };

        secretButton.addEventListener('click', function () {ws.send(display.textContent)}); // sends dislayed value to WebSoscket server for calculation
    });
};

export default WebSocketRequestObject;

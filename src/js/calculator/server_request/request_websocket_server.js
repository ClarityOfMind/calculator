'use strict';

function requestWebsocketServer () {
    return new Promise (function (resolve, reject) {
        const ws = new WebSocket("ws://localhost:8081");
        ws.onopen = () => resolve(ws);
        ws.onerror = error => reject('Server does not response') 
    });
};

export default requestWebsocketServer;
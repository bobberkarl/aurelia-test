
import WebSocket = require('ws'); 

export class wsserver {

    wsUrl : string;
    WebSocketServer : WebSocket;
    
    constructor(message: string) {
        this.wsUrl = message;
        this.connect();
        this.WebSocketServer = new WebSocket(this.wsUrl);
    }

    connect() {
        this.WebSocketServer.onopen = function (event) {
            try {
                console.log("Socket has been opened!");
                this.send("bruh");
            } catch (e) {
            console.error(e.message);
        }
    };

        this.WebSocketServer.onmessage = function (event) {
            console.log("message received");
        };

        console.log('Server is running on adress', this.wsUrl);
    }
    

  
}
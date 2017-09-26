import {wsserver} from "./wsserver";

export class App {
  message = 'Hello World!';
  webSocketServer = new wsserver("ws://192.168.2.226:8080/BlendBackEnd/actions");
}

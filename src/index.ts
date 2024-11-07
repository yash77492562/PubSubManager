import { startLogger } from "./logger";
import { GameManager } from "./store";
import { PubSubManager } from "./PubSubMananger";


startLogger()

setInterval(()=>{
    GameManager.getInstance().addGame(Math.random().toString())
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
},5000)


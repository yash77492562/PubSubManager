interface Game {
    id:string;
    whitePlayerName:string;
    blackPlayerName:string;
    moves:string[]
}
// singleton Pattern :- if you want something to initializies onces and make sure no other will able to initialize it  only one insilizer will run throuhtout the code

// Singleton Pattern
// The Singleton Pattern is a design pattern that ensures a class has only one instance and restricts any other code from creating additional instances. This is useful when you need a single point of control or a single shared resource in your application.

// Key Points:
// Single Initialization: The singleton instance is created only once, on the first use, and no other instance can be created afterward.
// Global Access: The singleton instance can be accessed globally, ensuring that all parts of the application use the same instance.

export class GameManager{
    games:Game[] = [];
    private static instance : GameManager
    private constructor(){
        this.games=[]
    }
    static getInstance(){
        if(GameManager.instance){
            return GameManager.instance
        }
        GameManager.instance = new GameManager();
        return GameManager.instance
    }
    addMove(gameId:string, move:string){
        console.log(`Adding move ${move} to game ${gameId}`)
        const game = this.games.find(game=>game.id === gameId);
        game?.moves.push(move)
    }
    addGame(gameId:string){
        const game = {
            id:gameId,
            whitePlayerName:'Alice',
            blackPlayerName:'Denzel',
            moves:[]
        }
        this.games.push(game)
    }
    log(){
        console.log(this.games)
    }
}

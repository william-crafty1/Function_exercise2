(function(){
    const player = {
        position: 0 ,
        direction: "positive" ,

        moveForward(distance){
            if(this.direction === "positive"){
                this.position += distance;
            }
            else if(this.direction === "negative"){
                this.position -= distance;
            }
        },
        moveBackward(distance){
            if(this.direction === "positive"){
                this.position -= distance;
            }
            else if(this.direction === "negative"){
                this.position += distance;
            }
        },
        turnAround(){
            if(this.direction === "positive"){
                this.direction = "negative";
            }
            else if(this.direction === "negative"){
                this.direction = "positive";
            }
        },
        printLocation(){
            console.log(this.position);
        }
    };
    player.moveForward(5);
    player.moveBackward(3);
    player.printLocation();
    player.turnAround()
    player.moveForward(10);
    player.moveBackward(5);
    player.printLocation();
})(); 


console.log("Extended challenge:=========================");

(function(){
    const player1 = {
        positionNorth: 0,
        positionEast: 0,
        direction: "positive",
        orientation: "north",

        moveForward(distance){
            if(this.direction === "positive" && this.orientation === "north"){
                this.positionNorth += distance;
            }
            else if(this.direction === "negative" && this.orientation === "north"){
                this.positionNorth -= distance;
            }
            else if(this.direction === "positive" && this.orientation === "east"){
                this.positionEast += distance;
            }
            else if(this.direction === "negative" && this.orientation === "east"){
                this.positionEast -= distance;
            }
        },
        moveBackward(distance){
            if(this.direction === "positive" && this.orientation === "north"){
                this.positionNorth -= distance;
            }
            else if(this.direction === "negative" && this.orientation === "north"){
                this.positionNorth += distance;
            }
            else if(this.direction === "positive" && this.orientation === "east"){
                this.positionEast -= distance;
            }
            else if(this.direction === "negative" && this.orientation === "east"){
                this.positionEast += distance;
            }
        },

        turnRight(){
            if(this.orientation === "east"){
                this.orientation = "north";
                this.direction = "positive";
            }
            else{
                this.orientation = "east";
            }
        },
        turnLeft(){
            if(this.orientation === "north"){
                this.orientation = "east";
                this.direction = "negative";
            }
            else{
                this.orientation = "north";
            }
        },
        printLocation(){
            console.log(`N: ${this.positionNorth}, E: ${this.positionEast}`);
        }
    }

    player1.moveForward(5);
    player1.turnRight();
    player1.moveForward(2);
    player1.printLocation();
    player1.turnLeft();
    player1.turnLeft();
    player1.moveForward(7);
    player1.turnRight();
    player1.moveBackward(3);
    player1.printLocation();
})();
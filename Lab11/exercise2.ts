class Car{
    private acceleration = 0;
    constructor(public name:string){}
    honk(){
        console.log(`${this.name} is saying Tooooooooooooooot!`);
    }
    accelerate(speed:number){
        this.acceleration = this.acceleration + speed;
    }
    getAcceleration(){
        return this.acceleration;
    }
}

var car = new Car('BMW');
car.accelerate(500);
console.log(car.getAcceleration());

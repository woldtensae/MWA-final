abstract class BaseObject{
    constructor(public width:number, public length:number){
    }
}

class Rectangle extends BaseObject{
    constructor(width:number, length:number){
        super(width, length)
    }
    calcSize(){
        return this.width * this.length;
    }
}

var rectangle = new Rectangle(10,15);
console.log(rectangle.calcSize());


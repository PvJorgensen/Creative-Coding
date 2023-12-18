





class car{

    constructor(make,model,year,condition) {


        this.make = make;
        this.model = model;
        this.year = year;
        this.condition = condition;


    }

    getInfo() {
        return `Jeg er en ${this.make}, model: ${this.model}, Fra ${this.year}, jeg er i ${this.condition} stand`;
    }
    getSummary() {
        return `${this.make}, model: ${this.model}`
    }



}

const myObject = new car('volvo', 'v40', 2001, 'fin');
const myObject2 = new car('nissan', 'z', 2001, 'lorte');

const myCars = [];
myCars.push (new car('volvo', 'v40', 2001, 'fin'));
myCars.push (new car('nissan', 'z', 2001, 'lorte'));

console.log(myCars[0].make = 'john deere');
console.log(myCars[0].getInfo());



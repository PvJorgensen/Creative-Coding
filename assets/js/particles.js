const myCanvas = document.getElementById('myCanvas');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
const ctx = myCanvas.getContext('2d');





class cptMorgan {
    constructor (ctx) {

        this.ctx = ctx;
        this.arm = 320;
        this.drink = 300

        this.step = 10;
        this.updateMorgan();
    }

    updateMorgan() {
        if(this.arm > 370){

            this.step *= -1;

        }else if (this.arm < 320) {

            this.step *= -1;
        }
        this.drink += this.step;
        this.arm += this.step;
        this.drawMorgan();
    }

    drawMorgan(){
        //SHADOW
this.ctx.shadowColor = "Black";
this.ctx.shadowOffsetY = 5;
this.ctx.shadowBlur = 10;

this.ctx.shadowColor = "Black";
this.ctx.shadowOffsetX = 5;
this.ctx.shadowBlur = 10;
        //LINJE venstre arm
this.ctx.strokeStyle = 'red';
this.ctx.moveTo(300, 120);
this.ctx.lineTo(400, 150);
this.ctx.stroke();
//LINJE venstre led
this.ctx.moveTo(300, 120);
this.ctx.lineTo(this.arm, 90);
this.ctx.stroke();
//LINJE højre arm
this.ctx.strokeStyle = 'green'
this.ctx.moveTo(400, 150);
this.ctx.lineTo(500, 250);
this.ctx.stroke();
//LINJE krop
this.ctx.moveTo(400, 130);
this.ctx.lineTo(400, 250);
this.ctx.stroke();
//CIRKELhovede
this.ctx.beginPath();
this.ctx.arc(410, 92, 40, 0, 2 * Math.PI);
this.ctx.stroke();
//LINJE venstre ben
this.ctx.moveTo(300, 300);
this.ctx.lineTo(400, 250);
this.ctx.stroke();
//LINJE Knæ bøjet
this.ctx.moveTo(280, 350);
this.ctx.lineTo(300, 300);
this.ctx.stroke();
//LINJE højre ben
this.ctx.moveTo(400, 250);
this.ctx.lineTo(500, 400);
this.ctx.stroke();
//KASSE
this.ctx.fillStyle = "#612f00";
this.ctx.fillRect(220, 340, 100, 70);
//Øjne
this.ctx.moveTo(400, 70);
this.ctx.lineTo(410, 80);
this.ctx.stroke();
//TEKST
this.ctx.font = "30px Arial";
this.ctx.strokeText("Mit navn er Anonym", 290, 40);
//Drikkelse
this.ctx.fillStyle = "#f59842";
//this.ctx.rotate((-45 * Math.PI) / 180);
this.ctx.fillRect(this.drink, 80, 40, 20);
    }

}

let myMorgan = new cptMorgan(ctx);

// let myMorgan2 = new cptMorgan(ctx);

var myTimer = setInterval (change, 100);

function change() {
    ctx.clearRect (0, 0, myCanvas.width, myCanvas.height);

    myMorgan.updateMorgan();


}
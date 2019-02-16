window.onload = function () {
    var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');

    var mouse = {
        x: undefined,
        y: undefined
    }

    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    var colorArray = [
        '#3498DB',
        '#E74C3C',
        '#A569BD',
        '#1ABC9C',
        '#58D68D',
        '#F1C40F',
        '#DC7633'
    ];

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        init();

    });

    function randomValue(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function Circle(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.05;
        this.distance = randomValue(50,150);
      

        this.draw = function (value) {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.radius;
            ctx.moveTo(value.x,value.y);
            ctx.lineTo(this.x,this.y);
            ctx.stroke();
            ctx.closePath();
        }

        this.update = function () {
            const values = {
                x:this.x,
                y:this.y
            };

            this.radians += this.velocity;


          this.x = mouse.x + Math.cos(this.radians)*this.distance;
          this.y = mouse.y + Math.sin(this.radians)*this.distance;

            this.draw(values);
        }
    }

    var CircleArray = [];

    function init() {

        CircleArray = [];
        for (var i = 1; i <= 50; i++) {
            const radius = Math.floor(Math.random()*7);
           CircleArray.push(new Circle(canvas.width/2, canvas.height/2,radius));
        }

    }
    init();

    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(255,255,255,0.05)';
        ctx.fillRect(0, 0, innerWidth, innerHeight);
        for (var j = 0; j < CircleArray.length; j++) {
            CircleArray[j].update();
        }
    }

    animate();



}




    const canvas = document.getElementById('basics');
    const ctx = canvas.getContext('2d');
    
    function draw() {
// -------------------------------------------
        // ctx.fillStyle = 'rgb(200, 0, 0)';
        // ctx.fillRect(10, 10, 50, 50);
        // ctx.fillStyle = 'rgba(0,0,200, 0.5)';
        // ctx.fillRect(30, 30, 50, 50);
        // // ctx.clearRect(20, 20, 30, 30)
//---------------------------------------------

// ctx.fillRect(25, 25, 100, 100);
// ctx.clearRect(45, 45, 60, 60);
// ctx.strokeRect(50, 50, 50, 50)

//------------------------------------------------

// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(100, 75);
// ctx.fillStyle='red';
// ctx.lineTo(100, 25);
// ctx.fill();

//-----------------------------------

// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
// ctx.moveTo(110, 75);
// ctx.arc(75, 75, 35, 0, Math.PI , false);
// ctx.moveTo(65, 65);
// ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
// ctx.moveTo(95, 65);
// ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
// ctx.stroke();

//------------------------------------------

// ctx.beginPath();
// ctx.moveTo(25,25);
// ctx.lineTo(105, 25);
// ctx.lineTo(25, 105);
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(125, 125);
// ctx.lineTo(125, 45);
// ctx.lineTo(45, 125);
// ctx.closePath();
// ctx.stroke();

//-------------------------------------------------

// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 3; j++) {
//         let x = 25 + j* 50;
//         let y = 25 + i*50;
//         ctx.beginPath();
//         const radius = 20;
//         let startAngle = 0;
//         let endAngle = Math.PI + (Math.PI * j)/ 2;
//         let antiClockWise = i % 2 !== 0;

//         ctx.arc(x, y, radius, startAngle, endAngle, antiClockWise);

//         i > 1 ? ctx.fill() : ctx.stroke()
//     }
    
// }

//-----------------------------------------------------

// ctx.beginPath();
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);
// ctx.stroke();


//-------------------------------------------------------------

ctx.beginPath();
ctx.moveTo(75, 40);
ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.fill();



    }

    draw()
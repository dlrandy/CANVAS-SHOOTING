let canvas = document.getElementById("state");
let ctx = canvas.getContext("2d");
let offset = 0;
function draw() {

  // ctx.fillRect(0, 0, 150, 150); // Draw a rectangle with default settings
  // ctx.save(); // Save the default state

  // ctx.fillStyle = "#09F"; // Make changes to the settings
  // ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings

  // ctx.save(); // Save the current state
  // ctx.fillStyle = "#FFF"; // Make changes to the settings
  // ctx.globalAlpha = 0.5;
  // ctx.fillRect(30, 30, 90, 90); // Draw a rectangle with new settings

  // ctx.restore(); // Restore previous state
  // ctx.fillRect(45, 45, 60, 60); // Draw a rectangle with restored settings

  // ctx.restore(); // Restore original state
  // ctx.fillRect(60, 60, 30, 30);


  // for (var i = 0; i < 3; i++) {
  //   for (var j = 0; j < 3; j++) {
  //     ctx.save();
  //     ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
  //     ctx.translate(10 + j * 50, 10 + i * 50);
  //     ctx.fillRect(0, 0, 25, 25);
  //     ctx.restore();
  //   }
  // }

 // draw a simple rectangle, but scale it.

 ctx.fillRect(125, 230, 10, 10);

 // mirror horizontally
 ctx.font = '48px serif';
 ctx.fillText('MDN', 135, 420);
 ctx.scale(2, 3);
 ctx.fillRect(1, 10, 10, 10);
 ctx.restore();

 // mirror horizontally
 ctx.scale(-1, 1);
 ctx.font = '48px serif';
 ctx.fillText('MDN', -135, 120);



}

draw();

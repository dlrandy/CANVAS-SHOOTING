

    const canvas = document.getElementById('basics');
    const ctx = canvas.getContext('2d');

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

var raf = null, running = false;


function clear() {
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  // ctx.clearRect(0,0,canvas.clientWidth, canvas.height);
  ctx.fillRect(0,0,canvas.clientWidth, canvas.height);
}

function draw() {
  clear();
  ball.draw();
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }

  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= .99;
  ball.vy += .25;
  // ball.vx *= .99;
  // ball.vx += .25;
  raf = requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function (e) {
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});
// canvas.addEventListener('mouseover', function (e) {
//   raf = requestAnimationFrame(draw);
// });

canvas.addEventListener('mouseout', function (e) {
  cancelAnimationFrame(raf);
  running = false;
})
canvas.addEventListener('click', function (e) {
 if (!running) {
   raf = requestAnimationFrame(draw);
   running = true;
 }
})




ball.draw();

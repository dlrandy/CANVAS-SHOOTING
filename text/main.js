

    const canvas = document.getElementById('text');
    const ctx = canvas.getContext('2d');
    let offset = 0;
    function draw() {
      ctx.canvas.width = 500;
      ctx.canvas.height = 1000;
      ctx.font = '48px serif';
      ctx.textBaseline = 'hanging';
      ctx.fillText('Hello world'+ctx.measureText('Hello world').width, 10, 50);
      ctx.strokeText('Hello world', 20, 100);
    }

    draw();

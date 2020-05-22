

    let canvas = document.getElementById('image');
    let ctx = canvas.getContext('2d');
    let offset = 0;
    function draw() {
        var image = new Image();
        // image.src= 'https://images.alphacoders.com/288/thumb-1920-288201.jpg';
        // // image.crossOrigin = 'anonymous'
        // image.addEventListener('load', function () {
        //     console.log('this', this);
        //     ctx.drawImage(image, 0, 0, 600, 500);
        // })


        for (var i = 0; i < document.images.length; i++) {

            // Don't add a canvas for the frame image
            if (document.images[i].getAttribute('id') != 'frame') {
        
              // Create canvas element
              canvas = document.createElement('canvas');
              canvas.setAttribute('width', 132);
              canvas.setAttribute('height', 150);
        
              // Insert before the image
              document.images[i].parentNode.insertBefore(canvas,document.images[i]);
        
              ctx = canvas.getContext('2d');
        
              // Draw image to canvas
              ctx.drawImage(document.images[i], 20, 20);
        
              // Add frame
              ctx.drawImage(document.getElementById('frame'), 0, 0);
            }
          }
    }

    draw();

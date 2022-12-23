var camvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var gl = canvas.getContext('webgl');
if (!gl) {
  console.error('Unable to initialize Webgl.');
}

var time = 0.0;

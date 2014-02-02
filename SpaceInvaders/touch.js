document.addEventListener('touchmove', function(event) { event.preventDefault(); }, false);

document.addEventListener('touchstart', function(event) { event.preventDefault(); }, false);


$(document).ready(function() {               
                  canvas = document.getElementById('view');                     
                  context = canvas.getContext('2d');
                  var canvasWidth = canvas.width;
                  var canvasHeight = canvas.height;
                  
                  theta = 0;
                  
                  var particles = new Array();
                  var indexOfLastDeletedParticle = 0;
                  
                  function deleteParticle(i){
                    delete particles[i];
                    particles[i] = particles[indexOfLastDeletedParticle++];
                  }
                  function Particle()
                  {
                  particles.splice(0, indexOfLastDeletedParticle);
                  indexOfLastDeletedParticle = 0;
                  
                  this.x = canvasWidth/2;
                  this.y = canvasHeight/2;
                  
                  this.vx = Math.random()*10-5;
                  this.vy = Math.random()*-10-5;
                  
                  this.ax = 0;
                  this.ay = 0.5;
                  
                  this.imageData = context.createImageData(1,1);
                  var d  = this.imageData.data;
                  d[0]   = Math.random()*255;
                  d[1]   = Math.random()*255 ;
                  d[2]   = Math.random()*255 ;
                  d[3]   = 255;
                  }
                  
                  function updateParticles(){
                  var maxNumberOfParticles = 5000;
                  var numberOfParticlesToSpawnPerFrame = 20;
                  
                  for (var i=0;i<numberOfParticlesToSpawnPerFrame;i++){
                    particles.push(new Particle());
                  }
                  
                  context.clearRect(0, 0, canvasWidth, canvasHeight);
                  for(var i=0;i<particles.length;i++)
                  {
                  var particle = particles[i];
                    particle.vx += particle.ax;
                    particle.vy += particle.ay;
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                  
                  if (particle.y > canvasHeight){
                    deleteParticle(i);
                  }
                  
                    context.putImageData( particle.imageData, particle.x, particle.y );
                
                  }
                  }
                  
                  canvas.addEventListener("touchmove", function(event) {
                                          for(var i = 0 ; i < event.touches.length; i++) {
                                          var touch = event.touches[i];
                                          context.beginPath();
                                          context.arc(touch.pageX, touch.pageY, 10, 0, 2*Math.PI, true);
                                          context.fillStyle = '#FF00FF';
                                          context.fill();
                                          context.stroke();
                                          }
                                          }, false);
                  
                  setInterval(updateParticles, 50);                  
                  });

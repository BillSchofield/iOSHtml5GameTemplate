document.addEventListener('touchmove', function(event) { event.preventDefault(); }, false);

document.addEventListener('touchstart', function(event) { event.preventDefault(); }, false);

    
$(document).ready(function() {
               
               canvas = document.getElementById('view');      
               
               ctx = canvas.getContext('2d');
                  
               canvas.addEventListener("touchmove", function(event) {
                            for(var i = 0 ; i < event.touches.length; i++) {
                                              var touch = event.touches[i];
                                              ctx.beginPath();
                                              ctx.arc(touch.pageX, touch.pageY, 20, 0, 2*Math.PI, true);
                                              ctx.fill();
                                              ctx.stroke();
                            }
    }, false);
               });

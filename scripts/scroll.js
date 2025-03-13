$(document).ready(function() {

    //window and animation items
    var animation_elements = $.find('.animation-element');
    var web_window = $(window);
  
    //check to see if any animation containers are currently in view
    function check_if_in_view() {
      //get current window information
      var window_height = web_window.height();
      var window_top_position = web_window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
  
      //iterate through elements to see if its in view
      $.each(animation_elements, function() {
  
        //get the element sinformation
        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = (element_top_position + element_height);
  
        //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          element.addClass('in-view');
        } else {
          element.removeClass('in-view');
        }
      });
  
    }
  
    //on or scroll, detect elements in view
    $(window).on('scroll resize', function() {
        check_if_in_view()
      })
      //trigger our scroll event on initial load
    $(window).trigger('scroll');
  
  });





  // Wait 1 second, then add classes to trigger the animation
  setTimeout(() => {
    const toto = document.getElementById('toto');
    toto.classList.add('slide-fade-in-start'); 
    // Force reflow so transition can apply from the start position
    void toto.offsetWidth;
    toto.classList.add('slide-fade-in');
  }, 1000);


// BOUNCE
  setTimeout(() => {
    document.getElementById('toto-bounce').classList.add('bounce-in');
  }, 1000);

  // GLITCH
    // Add the data-text attribute in JS or directly in HTML:
    const glitchElement = document.getElementById('toto-glitch');
    glitchElement.setAttribute('data-text', glitchElement.textContent);
  
    setTimeout(() => {
      glitchElement.classList.add('glitch-start');
    }, 1000);


    // FLIP
    setTimeout(() => {
      document.getElementById('toto-flip').classList.add('flip-in');
    }, 1000);

    // WAVE

      // Split each letter into its own span
  const waveEl = document.getElementById('toto-wave');
  const text = waveEl.textContent;
  waveEl.textContent = ''; // clear original
  text.split('').forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.animationDelay = (i * 0.1) + 's'; 
    waveEl.appendChild(span);
  });
  waveEl.style.opacity = 1;

  // Add wave class after 1 second delay
  setTimeout(() => {
    waveEl.classList.add('wave');
  }, 1000);
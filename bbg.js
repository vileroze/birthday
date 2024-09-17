$( document ).ready(function() {
    //fade out confetti after 3 seconds
    $('.confetti').fadeOut(5000);

    //change the heart-image element every time on hover between 3 images that i have in my images folder
    $('.heart-image').hover(function() {
        $('.heart-image').attr('src', 'images/us' + Math.floor(Math.random() * 5) + '.jpeg');
    });
    
    //when you click on the down arrow, it will scroll down
    $('.auto-scroll, .down-arrow').click(function() {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 1000);
    });
    


    $(document).on('mouseenter', '.no-btn', function(e) {
        var $button = $(this);
        $button.html('YOU CAN\'T SAY NO 😛'); 
        var container = $('.main-container');
        var containerWidth = container.width();
        var containerHeight = container.height();
        
        var buttonWidth = $button.outerWidth();
        var buttonHeight = $button.outerHeight();
        
        // Get the current mouse position
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        
        var newLeft, newTop;
        var distanceThreshold = 100; // Minimum distance from the mouse
        
        do {
            // Calculate random position ensuring the button stays within the container's bounds
            newLeft = Math.random() * (containerWidth - buttonWidth);
            newTop = Math.random() * (containerHeight - buttonHeight);
        } while (Math.abs(newLeft - mouseX) < distanceThreshold && Math.abs(newTop - mouseY) < distanceThreshold);
        // Repeat the random position calculation until the new position is sufficiently far from the mouse

        // Set the new random position
        $button.css({
            left: newLeft + 'px',
            top: newTop + 'px',
            position: 'absolute'
        });
        
        // Add a blinking effect
        $button.fadeOut(100).fadeIn(100); // Blinks the button by fading it out and in
    });



    $(document).on('click', '.yes-btn', function() {
        //fad eout the qn-btns and fade in the action-btns
        $('.qn-btns, .action-btns').fadeOut(1000);
        $('.action-btns').fadeIn(1000);

        $('.cat-gif-normal').remove();
        $('.cat-gif-yes').show();
    });
});


    document.addEventListener('DOMContentLoaded', function () {
        const weddingDateText = document.getElementById('wedding-date')?.textContent;
        if (weddingDateText) {
            const weddingDate = new Date(weddingDateText);
            const countdown = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            countdown.textContent = 'The wedding has started!';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); 
   }

});

document.addEventListener('DOMContentLoaded', function () {
    const imageScroller = document.querySelector('.imageScroller');
    const edgeThreshold = 200;
    const scrollSpeed = 15; //adjust
    let scrollDirection = 0; 
    let requestID;

    
    function updateScroll() {
        if (scrollDirection === -1) {
            imageScroller.scrollLeft -= scrollSpeed;
        } else if (scrollDirection === 1) {
            imageScroller.scrollLeft += scrollSpeed;
        }

        if (scrollDirection !== 0) {
            requestID = requestAnimationFrame(updateScroll);
        }
    }

    
    imageScroller.addEventListener('mousemove', (e) => {
        const { left, width } = imageScroller.getBoundingClientRect();
        const mouseX = e.clientX - left;

        
        if (mouseX < edgeThreshold) {
            scrollDirection = -1;
            if (!requestID) {
            requestID = requestAnimationFrame(updateScroll);
            }
        } else if (mouseX > width - edgeThreshold) {
            scrollDirection = 1;
            if (!requestID) {
                requestID = requestAnimationFrame(updateScroll);
            }
        } else {
            
            scrollDirection = 0;
            cancelAnimationFrame(requestID);
            requestID = null;
        }
    });

    imageScroller.addEventListener('mouseleave', () => {
        
        scrollDirection = 0;
        cancelAnimationFrame(requestID);
        requestID = null;
    });
});






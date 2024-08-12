(function() {
    const snowContainer = document.getElementById('snow');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
        snowflake.style.width = `${Math.random() * 15 + 5}px`; // Random size
        snowflake.style.height = snowflake.style.width; // Maintain circular shape
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random fall speed
        snowflake.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity
        snowflake.style.animationDelay = `${Math.random() * 10}s`; // Random delay before starting

        snowContainer.appendChild(snowflake);

        // Remove snowflake after it finishes falling
        setTimeout(() => {
            snowflake.remove();
        }, 10000); // Match this duration to the longest animation duration
    }

    // Create snowflakes at regular intervals
    setInterval(createSnowflake, 100); // Create a snowflake every 100ms
})();

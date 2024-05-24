document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.container');
    const movingImage = document.getElementById('moving-image');
    
    document.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const containerCenterX = rect.left + rect.width / 2;
        const containerCenterY = rect.top + rect.height / 2;
        
        const dx = e.clientX - containerCenterX;
        const dy = e.clientY - containerCenterY;
        
        // Ensure the image stays within the bounds of the container
        const maxX = rect.width / 2 - movingImage.offsetWidth / 2;
        const maxY = rect.height / 2 - movingImage.offsetHeight / 2;
        
        const clampedX = Math.max(-maxX, Math.min(maxX, dx));
        const clampedY = Math.max(-maxY, Math.min(maxY, dy));
        
        movingImage.style.transform = `translate(${clampedX + rect.width / 2 - movingImage.offsetWidth / 2}px, ${clampedY + rect.height / 2 - movingImage.offsetHeight / 2}px)`;
    });
});
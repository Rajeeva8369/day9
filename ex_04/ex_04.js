window.onload = () => {
    const layers = document.querySelectorAll('.layer');

    const handleParallax = (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;
        const { innerWidth: width, innerHeight: height } = window;
        const percentX = (mouseX - width / 2) / (width / 2);
        const percentY = (mouseY - height / 2) / (height / 2);

        layers.forEach((layer) => {
            const speed = layer.dataset.speed || 0;
            const x = percentX * 100 * speed;
            const y = percentY * 100 * speed;
            layer.style.transform = `translate(${x}px, ${y}px)`;
        });
    };
    document.addEventListener('mousemove', handleParallax);
};

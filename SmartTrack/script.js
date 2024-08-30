
document.addEventListener('DOMContentLoaded', function() {
    // Simulating a dynamic map update
    const map = document.getElementById('map');
    let busStatus = ['Bus 1: On Time', 'Bus 2: Delayed', 'Bus 3: Approaching'];
    let counter = 0;

    setInterval(() => {
        map.innerText = busStatus[counter % busStatus.length];
        counter++;
    }, 3000);
});

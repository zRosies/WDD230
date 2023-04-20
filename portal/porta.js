
const options = {day: 'numeric', month:'numeric', year:'numeric', hour:'numeric', minute:'numeric', second:'numeric'}
document.getElementById('date').textContent = new Date().toLocaleString('en-US',options);
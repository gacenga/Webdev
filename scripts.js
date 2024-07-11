document.addEventListener('DOMContentLoaded', function() {
    // Example: Add an event listener to a button
    const button = document.querySelector('#exampleButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button was clicked!');
        });
    }
});

function showSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block';
}


function showErrorMessage() {
    const gif = document.getElementById('surpriseGif');
    const errorMessage = document.getElementById('errorMessage');

    // Hide the GIF
    gif.style.display = 'none';

    // Show the unique message
    errorMessage.style.display = 'block';
}

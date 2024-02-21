function generateQRCode() {
    var text = document.getElementById('text').value;
    var resultDiv = document.getElementById('result');
    
    // Clear previous result
    resultDiv.innerHTML = '';

    // Check if text is not empty
    if (text.trim() !== '') {
        var qrCode = document.createElement('img');
        qrCode.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(text);
        resultDiv.appendChild(qrCode);
    } else {
        resultDiv.innerHTML = 'Please enter text.';
    }
}
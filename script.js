document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const inputs = document.getElementsByClassName('textInput');
    let data = [];

    for (let input of inputs) {
        data.push(input.value.trim());
    }

    const combinedData = data.join(' | '); // Combine data with a separator

    // Pass data to the next screen via URL parameters
    window.location.href = `qr.html?data=${encodeURIComponent(combinedData)}`;
});

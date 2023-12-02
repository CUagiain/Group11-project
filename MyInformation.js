function saveInformation() { 
    var username = document.getElementById('usernameInput').value; 
    // Add more variables to capture other information from the form 
    var otherInfo = document.getElementById('otherInfoInput').value; 
    // Save the information in local storage localStorage.
    setItem('username', username); 
    localStorage.setItem('otherInfo', otherInfo); 
    // Optionally, call a function to update the information display 
    updateInformationDisplay(); } 
    // Function to update the information display 
    function updateInformationDisplay() { 
        var savedUsername = localStorage.getItem('username'); 
        var savedOtherInfo = localStorage.getItem('otherInfo'); 
        var displayText = 'Welcome, ' + savedUsername + '! Your information: ' + savedOtherInfo; 
        document.getElementById('savedInfo').innerText = displayText; } 
        // Call this function on page load to display information if it's already saved 
    updateInformationDisplay();
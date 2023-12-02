const info_btn = document.getElementsByClassName("info-btn")
for (let i = 0; i < info_btn.length; i++) {
  info_btn[i].onclick = () => {
    document.querySelector(".container").classList.toggle("log-in");
  }; 
}


    document.getElementById('loginButton').addEventListener('click', function() {
        var userType = document.getElementById('userType').value;
        switch (userType) {
            case 'Seller':
                window.location.href = 'https://cuagiain.github.io/Group11/creatShop.html'; 
                break;
            case 'Buyer':
                window.location.href = 'https://cuagiain.github.io/Group11/home.html'; 
                break;
            case 'Volunteer':
                window.location.href = 'https://cuagiain.github.io/Group11/info.html';
                break;
            default:
                
                break;
        }
    });

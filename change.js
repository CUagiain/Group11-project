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
                window.location.href = 'https://cuagiain.github.io/Group11/creatShop.html'; // 替换为卖家页面的
                break;
            case 'Older people':
                window.location.href = 'https://cuagiain.github.io/Group11/home.html'; // 替换为老年人页面
                break;
            case 'Volunteer':
                window.location.href = 'https://cuagiain.github.io/Group11/info.html'; // 替换为志愿者页面
                break;
            default:
                
                break;
        }
    });

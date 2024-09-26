document.getElementById("home-btn").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./index.html";
});

const balance=getTextFieldById("account-balance");

document.getElementById("account-balance-blog").innerText=balance;
console.log(balance);

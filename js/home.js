//for scrolling
window.addEventListener("scroll", function () {
  const scrollBlurElement = document.getElementById("navbar-scroll");

  if (window.scrollY > 0) {
    scrollBlurElement.classList.remove("bg-[#F9F7F3]");
  } else {
    scrollBlurElement.classList.add("bg-[#F9F7F3]");
  }
});

document.getElementById("blog-btn").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./blog.html";
});


document.getElementById("noakhali-donate-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const donationAmount = parseFloat(getInputFieldById("noakhali-donate-input"));
    const accountBalance = parseFloat(getTextFieldById("account-balance"));
    const NoakhaliAccountBalance = parseFloat(getTextFieldById("noakhali-donate-amount-balance"));
    if (!isNaN(donationAmount) && donationAmount>0) {
      if (donationAmount > accountBalance) {
        alert("Insufficient funds for this donation.");
      } else {
        const newbalance = donationAmount + NoakhaliAccountBalance;
        document.getElementById("noakhali-donate-amount-balance").innerText=newbalance;
        document.getElementById("account-balance").innerText=(accountBalance-donationAmount);
        my_modal_2.showModal();
        //history added
        const p=document.createElement("p");
        p.innerText=` ${donationAmount} BDT donated to the fund Nahkhaki`;
        console.log(p);
        document.getElementById("History-container").appendChild(p);
        
      }
    } else if (donationAmount <= 0) {
      alert("Please enter a positive number as input.");
    } else {
      alert("Please enter number as input.");
    }
  });


//   for feni  
document.getElementById("feni-donate-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const donationAmount = parseFloat(getInputFieldById("feni-donate-input"));
    const accountBalance = parseFloat(getTextFieldById("account-balance"));
    const fenniAccountBalance = parseFloat(getTextFieldById("feni-donate-amount-balance"));
    if (!isNaN(donationAmount) && donationAmount>0) {
      if (donationAmount > accountBalance) {
        alert("Insufficient funds for this donation.");
      } else {
        const newbalance = donationAmount + fenniAccountBalance;
        document.getElementById("feni-donate-amount-balance").innerText=newbalance;
        document.getElementById("account-balance").innerText=(accountBalance-donationAmount);
        my_modal_1.showModal();
      }
    } else if (donationAmount <= 0) {
      alert("Please enter a positive number as input.");
    } else {
      alert("Please enter number as input.");
    }
  });

//   for qouta 
document.getElementById("qouta-donate-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const donationAmount = parseFloat(getInputFieldById("quota-donate-input"));
    const accountBalance = parseFloat(getTextFieldById("account-balance"));
    const qoutaAccountBalance = parseFloat(getTextFieldById("qouta-donate-balance"));
    if (!isNaN(donationAmount) && donationAmount>0) {
      if (donationAmount > accountBalance) {
        alert("Insufficient funds for this donation.");
      } else {
        const newbalance = donationAmount + qoutaAccountBalance;
        document.getElementById("qouta-donate-balance").innerText=newbalance;
        document.getElementById("account-balance").innerText=(accountBalance-donationAmount);
        my_modal_2.showModal();
      }
    } else if (donationAmount <= 0) {
      alert("Please enter a positive number as input.");
    } else {
      alert("Please enter number as input.");
    }
  });



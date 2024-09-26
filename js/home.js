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

document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donationAmount = parseFloat(
      getInputFieldById("noakhali-donate-input")
    );
    const accountBalance = parseFloat(getTextFieldById("account-balance"));
    const NoakhaliAccountBalance = parseFloat(
      getTextFieldById("noakhali-donate-amount-balance")
    );
    const NoakhaliTitle=getTextFieldById("Noakhali-flood-title");
    if (!isNaN(donationAmount) && donationAmount > 0) {
      if (donationAmount > accountBalance) {
        alert("Insufficient funds for this donation.");
      } else {
        const newbalance = donationAmount + NoakhaliAccountBalance;
        document.getElementById("noakhali-donate-amount-balance").innerText =
          newbalance;
        document.getElementById("account-balance").innerText =
          accountBalance - donationAmount;
        my_modal_2.showModal();

        const uniqueId = "date-section-" + new Date().getTime();

        const div = document.createElement("div");
        div.innerHTML = `
            <div class="max-w-[405px] lg:max-w-[1220px] mx-auto border-2 rounded-lg p-2 md:p-4">
                <h4 class="text-[11px] md:text-lg font-bold">${donationAmount} Taka is Donated for ${NoakhaliTitle}</h4>
                <div class="bg-[#e8e9ea] rounded-md flex">
                    <p id="" class="text-[11px] md:text-[16px] md:font-bold p-1">
                        Date: 
                    </p>
                    <p id="${uniqueId}" class="text-[11px] md:text-[16px] md:font-bold p-1">
                        
                    </p>
                </div>
            </div>
        `;
        document.getElementById("History-container").appendChild(div);
        setdatebyId(uniqueId);
      }
    } else if (donationAmount <= 0) {
      alert("Please enter a positive number as input.");
    } else {
      alert("Please enter number as input.");
    }
    document.getElementById("noakhali-donate-input").value=" ";
  });

//   for feni
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donationAmount = parseFloat(getInputFieldById("feni-donate-input"));
    const accountBalance = parseFloat(getTextFieldById("account-balance"));
    const feniTitle=getTextFieldById("feni-flood-title");
    const fenniAccountBalance = parseFloat(
      getTextFieldById("feni-donate-amount-balance")
    );
    if (!isNaN(donationAmount) && donationAmount > 0) {
      if (donationAmount > accountBalance) {
        alert("Insufficient funds for this donation.");
      } else {
        const newbalance = donationAmount + fenniAccountBalance;
        document.getElementById("feni-donate-amount-balance").innerText =
          newbalance;
        document.getElementById("account-balance").innerText =
          accountBalance - donationAmount;
        my_modal_1.showModal();
        const uniqueId = "date-section-" + new Date().getTime();

        const div = document.createElement("div");
        div.innerHTML = `
            <div class="max-w-[405px] lg:max-w-[1220px] mx-auto border-2 rounded-lg p-2 md:p-4">
                <h4 class="text-[11px] md:text-lg font-bold">${donationAmount} Taka is Donated for ${feniTitle}</h4>
                <div class="bg-[#e8e9ea] rounded-md flex">
                    <p id="" class="text-[11px] md:text-[16px] md:font-bold p-1">
                        Date: 
                    </p>
                    <p id="${uniqueId}" class="text-[11px] md:text-[16px] md:font-bold p-1">
                        
                    </p>
                </div>
            </div>
        `;
        document.getElementById("History-container").appendChild(div);
        setdatebyId(uniqueId);
      }
    } else if (donationAmount <= 0) {
      alert("Please enter a positive number as input.");
    } else {
      alert("Please enter number as input.");
    }
    document.getElementById("noakhali-donate-input").value=" ";
  });

//   for qouta
document
  .getElementById("qouta-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donationAmount = parseFloat(getInputFieldById("quota-donate-input"));
    const accountBalance = parseFloat(getTextFieldById("account-balance"));
    const qoutaTile=getTextFieldById("qouta-tile");
    const qoutaAccountBalance = parseFloat(
      getTextFieldById("qouta-donate-balance")
    );
    if (!isNaN(donationAmount) && donationAmount > 0) {
      if (donationAmount > accountBalance) {
        alert("Insufficient funds for this donation.");
      } else {
        const newbalance = donationAmount + qoutaAccountBalance;
        document.getElementById("qouta-donate-balance").innerText = newbalance;
        document.getElementById("account-balance").innerText =
          accountBalance - donationAmount;
        my_modal_2.showModal();
        const uniqueId = "date-section-" + new Date().getTime();

        const div = document.createElement("div");
        div.innerHTML = `
            <div class="max-w-[405px] lg:max-w-[1220px] mx-auto border-2 rounded-lg p-2 md:p-4">
                <h4 class="text-[11px] md:text-lg font-bold">${donationAmount} Taka is Donated for Donate for ${qoutaTile} at Bangladesh</h4>
                <div class="bg-[#e8e9ea] rounded-md flex">
                    <p id="" class="text-[11px] md:text-[16px] md:font-bold p-1">
                        Date: 
                    </p>
                    <p id="${uniqueId}" class="text-[11px] md:text-[16px] md:font-bold p-1">
                        
                    </p>
                </div>
            </div>
        `;
        document.getElementById("History-container").appendChild(div);
        setdatebyId(uniqueId);
      }
    } else if (donationAmount <= 0) {
      alert("Please enter a positive number as input.");
    } else {
      alert("Please enter number as input.");
    }
    document.getElementById("noakhali-donate-input").value=" ";
  });

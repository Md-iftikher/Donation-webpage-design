document.getElementById("show-donation-btn").addEventListener("click",function(event){
    console.log("btn clicked");
    showSectionByid("Donation-section");
    document.getElementById("show-donation-btn").classList.add("bg-[#B4F461]");
    document.getElementById("show-history-btn").classList.remove("bg-[#B4F461]");

    
});

document.getElementById("show-history-btn").addEventListener("click",function(event){
    
    showSectionByid("History-section");
    document.getElementById("show-history-btn").classList.add("bg-[#B4F461]");
    document.getElementById("show-donation-btn").classList.remove("bg-[#B4F461]");
    
});
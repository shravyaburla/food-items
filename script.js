document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");

    const menuItems = document.querySelectorAll(".food-item");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            alert("You selected " + this.querySelector("h3").innerText);
        });
    });
});

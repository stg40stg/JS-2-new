function myFunction() {
    var popup = document.getElementById("cart-button-pop-up");
    popup.classList.toggle("cart-button-menu");
    var popuptext = document.getElementById("cart-button-pop-up-table");
    popuptext.classList.toggle("cart-button-pop-up-table");
    var popuptexthidden = document.getElementById("cart-button-pop-up-table");
    popuptexthidden.classList.toggle("cart-button-pop-up-table-hidden");
}
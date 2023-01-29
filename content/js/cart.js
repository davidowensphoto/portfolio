const removeBag1 = document.getElementById("remove-bag-1")
removeBag1.addEventListener("click", function () {
    console.log('clicked');
    const hiddenBag1 = document.getElementById("hide-bag1");
    hiddenBag1.style.display = "none";
    const showEmptyCart = document.getElementById("empty-cart");
    showEmptyCart.style.display = "block";
    const hideCheckOut = document.getElementById("hide-co");
    hideCheckOut.style.display = "none";
    const hideTotal = document.getElementById("hide-total");
    hideTotal.style.display = "none";

})

const removeBag2 = document.getElementById("remove-bag-2")
removeBag2.addEventListener("click", function () {
    console.log('clicked');
    const hiddenBag2 = document.getElementById("hide-bag2");
    hiddenBag2.style.display = "none";
    

})
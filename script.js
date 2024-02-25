let removePara_1 = document.querySelector(".question-1");
let removePara_2 = document.querySelector(".question-2");
let removePara_3 = document.querySelector(".question-3");
let removePara_4 = document.querySelector(".question-4");
let removeItem = document.querySelector(".remove");
let removeItem_1 = document.querySelector(".remove-1");
let removeItem_2 = document.querySelector(".remove-2");
let removeItem_3 = document.querySelector(".remove-3");
removePara_1.addEventListener("click", function () {
  if (removeItem.classList.contains("paragraph-1")) {
    document.querySelector(".remove").classList.remove("paragraph-1");
    document.querySelector(".clearplusimg").classList.add("imgplus");
    document.querySelector(".clearminusimg").classList.remove("imgminus");
  } else {
    document.querySelector(".remove").classList.add("paragraph-1");
    document.querySelector(".clearplusimg").classList.remove("imgplus");
    document.querySelector(".clearminusimg").classList.add("imgminus");
  }
});
removePara_2.addEventListener("click", function () {
  if (removeItem_1.classList.contains("paragraph-2")) {
    document.querySelector(".remove-1").classList.remove("paragraph-2");
    document.querySelector(".clearplusimg-1").classList.add("imgplus");
    document.querySelector(".clearminusimg-1").classList.remove("imgminus");
  } else {
    document.querySelector(".remove-1").classList.add("paragraph-2");
    document.querySelector(".clearplusimg-1").classList.remove("imgplus");
    document.querySelector(".clearminusimg-1").classList.add("imgminus");
  }
});
removePara_3.addEventListener("click", function () {
  if (removeItem_2.classList.contains("paragraph-3")) {
    document.querySelector(".remove-2").classList.remove("paragraph-3");
    document.querySelector(".clearplusimg-2").classList.add("imgplus");
    document.querySelector(".clearminusimg-2").classList.remove("imgminus");
  } else {
    document.querySelector(".remove-2").classList.add("paragraph-3");
    document.querySelector(".clearplusimg-2").classList.remove("imgplus");
    document.querySelector(".clearminusimg-2").classList.add("imgminus");
  }
});
removePara_4.addEventListener("click", function () {
  if (removeItem_3.classList.contains("paragraph-4")) {
    document.querySelector(".remove-3").classList.remove("paragraph-4");
    document.querySelector(".clearplusimg-3").classList.add("imgplus");
    document.querySelector(".clearminusimg-3").classList.remove("imgminus");
  } else {
    document.querySelector(".remove-3").classList.add("paragraph-4");
    document.querySelector(".clearplusimg-3").classList.remove("imgplus");
    document.querySelector(".clearminusimg-3").classList.add("imgminus");
  }
});

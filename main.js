const list = document.querySelectorAll(".tabs-items");r

list.forEach((tab) => {
  tab.addEventListener("click", (event) => {
       const active = document.querySelector(".active");
      active.classList.remove("active");
       event.currentTarget.classList.toggle("active");
  })
})

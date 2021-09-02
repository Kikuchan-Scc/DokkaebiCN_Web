//手机端下拉菜单收起打开
const btn = document.getElementById("mobile-btn")
  const menu = document.getElementById("mobile-menu")

  btn.addEventListener("click",() => {
    menu.classList.toggle("hidden");
  })
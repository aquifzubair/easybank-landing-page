let check = 1;
const showMenu = () => {
  if (check == 1) {
    document.getElementById("show-dropdown").style.display = "flex";
    check = 0;
  } else {
    document.getElementById("show-dropdown").style.display = "none";
    check = 1;
  }
};

let navItems = document.querySelectorAll('.nav-item');

function clearActive(){
  for (const navItem of navItems) {
    navItem.classList.remove('active');
  }
}

navItems.forEach(el => {
  el.addEventListener('click', function() {
    clearActive();
    this.classList.add('active');
  });
});

$(document).ready(() => {
  let url = location.href.replace(/\/$/, "");

  if (location.hash) {
    const hash = url.split("#");
    $('#'+hash[1]).click();
    url = location.href.replace(/\/#/, "#");
    history.replaceState(null, null, url);
  }
});

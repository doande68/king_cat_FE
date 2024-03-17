document.addEventListener('keydown', function(event) {

  if (event.ctrlKey && event.shiftKey && event.key === 'A') {

    window.location.href = '../admin/home/home.html';
  }
});

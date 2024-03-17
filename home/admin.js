document.addEventListener('keydown', function(event) {
  // Kiểm tra xem Ctrl và Shift đang được giữ và phím A có được nhấn không
  if (event.ctrlKey && event.shiftKey && event.key === 'a') {
    // Chuyển hướng sang trang admin ở đây
    window.location.href = 'loginAdmin.html'; // Thay link-to-admin-page bằng đường dẫn thực tế của trang admin
  }
});

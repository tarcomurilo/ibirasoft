document.addEventListener('DOMContentLoaded', function() {
  const sidebarItems = document.querySelectorAll('.sidebar-item');

  sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
      sidebarItems.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const section = this.getAttribute('data-section');
      console.log('Navegando para:', section);
    });
  });
});

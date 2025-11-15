// Image Protection JavaScript

// Disable right-click on images
document.addEventListener('DOMContentLoaded', function() {

  // Disable right-click context menu on images
  document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  // Disable drag and drop on images
  document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  // Disable image selection
  const images = document.querySelectorAll('img');
  images.forEach(function(img) {
    img.setAttribute('draggable', 'false');
    img.style.webkitUserSelect = 'none';
    img.style.userSelect = 'none';

    // Prevent right-click
    img.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      return false;
    });

    // Prevent drag start
    img.addEventListener('dragstart', function(e) {
      e.preventDefault();
      return false;
    });
  });

  // Also protect against keyboard shortcuts (Ctrl+S, Ctrl+C)
  document.addEventListener('keydown', function(e) {
    // Check if target is an image
    if (document.activeElement && document.activeElement.tagName === 'IMG') {
      // Disable Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+C (Copy)
      if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        return false;
      }
    }
  });

});

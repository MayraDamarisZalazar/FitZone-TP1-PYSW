<script>
  window.addEventListener('load', () => {
    const grid = document.querySelector('.lista-clases');
    const items = document.querySelectorAll('.clase');
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));

    items.forEach(item => {
      const contentHeight = item.getBoundingClientRect().height;
      const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = `span ${rowSpan}`;
    });
  });
</script>

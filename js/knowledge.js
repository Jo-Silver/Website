// Knowledge page tab switching
const buttons = document.querySelectorAll('.chapter-btn');
const panels = document.querySelectorAll('.chapter-panel');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.chapter;
    
    // Remove active from all buttons and panels
    buttons.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    
    // Add active to clicked button and corresponding panel
    btn.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

  const toggleButton = document.getElementById('toggleButton');
  let isToggled = false;

  toggleButton.addEventListener('click', () => {
    const icon = toggleButton.querySelector('i');

    if (isToggled) {
      icon.classList.remove('fa-toggle-off');
      icon.classList.add('fa-toggle-on');
    } else {
      icon.classList.remove('fa-toggle-on');
      icon.classList.add('fa-toggle-off');
    }

    isToggled = !isToggled;
  });


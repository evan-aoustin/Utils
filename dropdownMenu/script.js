  const dropdowns = document.querySelectorAll(".dropdown");
  const btnDrops = document.querySelectorAll(".bloc-top");

  let toggleIndices = new Array(dropdowns.length).fill(0);

    function toggleDropDownMenu(index) {
      if (toggleIndices[index] === 0) {
        dropdowns[index].style.height = `${dropdowns[index].scrollHeight}px`;
        toggleIndices[index]++;
      } else {
        dropdowns[index].style.height = `${btnDrops[index].scrollHeight}px`;
        toggleIndices[index]--;
      }
    }

  btnDrops.forEach((btnDrop, index) => {
    btnDrop.addEventListener('click', () => {
      toggleDropDownMenu(index);
    });
  });


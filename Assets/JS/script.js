function addDropdownListeners(element, dropdownClass) {
    let timeoutId;
  
    element.addEventListener('mouseenter', function() {
      clearTimeout(timeoutId);
      openMenu(dropdownClass);
    });
  
    element.addEventListener('mouseleave', function() {
      timeoutId = setTimeout(function() {
        closeMenu(dropdownClass);
      }, 200);
    });
  
      const dropdownElement = document.querySelector(`.${dropdownClass}`);
      dropdownElement.addEventListener('mouseenter', function() {
          clearTimeout(timeoutId);
      });
      dropdownElement.addEventListener('mouseleave', function(event) {
          if (!dropdownElement.contains(event.relatedTarget)) {
              closeMenu(dropdownClass);
          }
      });
  }
  
  featuresEL = document.querySelector('.features');
  companyEL = document.querySelector('.company');
  dropdown_features = 'dropdown-features';
  dropdown_company = 'dropdown-company';
  
  addDropdownListeners(featuresEL, dropdown_features);
  addDropdownListeners(companyEL, dropdown_company);
  
  function openMenu(dropdown){
    document.querySelector(`.${dropdown}`).style.display = 'flex';
  }
  
  function closeMenu(dropdown){
    document.querySelector(`.${dropdown}`).style.display = 'none';
  }

  let menuEL = document.querySelector('.menu');
  let navEL = document.querySelector('nav');
  let closeEL = document.querySelector('.close');
  let blackEL = document.querySelector('.black');

  menuEL.addEventListener('click', function() {
    blackEL.style.display = 'block';
    navEL.style.display = 'block';
  })

  closeEL.addEventListener('click', function() {
    blackEL.style.display = 'none';
    navEL.style.display = 'none';

  })
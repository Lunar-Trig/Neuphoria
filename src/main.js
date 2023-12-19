
// for side-menu
function openSlideMenu(){
  document.getElementById('side-menu').style.width = '290px';
  document.getElementById('side-menu').style.display = 'block';
   
}
  function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0px';
  }

// for copying text 
function copyEmail(){
  const text = document.getElementById('email');
  const storage = document.createElement('textarea')
  storage.value = text.innerHTML;
  text.appendChild(storage);
  storage.select();
  document.execCommand('copy');
  text.removeChild(storage);
}

function copyNumber(){
  const text = document.getElementById('num');
  const storage = document.createElement('textarea')
  storage.value = text.innerHTML;
  text.appendChild(storage);
  storage.select();
  document.execCommand('copy');
  text.removeChild(storage);
}
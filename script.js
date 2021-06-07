const btnBelize = document.querySelector('#btn-belize');
const btnPomegranate = document.querySelector('#btn-pomeranate');
const btnCarror = document.querySelector('#btn-carrot');
const btnAmethyst = document.querySelector('#btn-amethyst');
const btnTurquiose = document.querySelector('#btn-turquiose');


// toggle menu function //
const toggleMenu = () =>{
  const menu = document.querySelector('.menu');
  menu.classList.toggle('toggleMenu');
}

// Color reset funtion // 
const resetColor = () => {

  document.body.classList.remove('belize');
  document.body.classList.remove('pomegranate');
  document.body.classList.remove('carrot');
  document.body.classList.remove('amethyst');
  document.body.classList.remove('turquiose');

}
// Update color function //
const updateColor = color => {

  resetColor();
  document.body.classList.toggle(color);
  toggleMenu();

}

const updateText = color => {
  document.querySelector('.colortext').innerHTML = 'De huidige kleur is <strong>' + color + '</strong>';
}


// And execute all the function //

btnBelize.addEventListener('click', () => {
  updateText('Belize Hole');
  updateColor('belize');
  });
  btnBelize.addEventListener('keypress', () => {
    updateText('Belize Hole');
    updateColor('belize');
    });
btnPomegranate.addEventListener('click', () => {
  updateText('Pomegranate');
  updateColor('pomegranate')
  });

btnCarror.addEventListener('click', () => {
  updateText('Carrot');
  updateColor('carrot')
  });

btnAmethyst.addEventListener('click', () => {
  updateText('Amethyst');
  updateColor('amethyst')
  });

btnTurquiose.addEventListener('click', () => {
  updateText('Turquiose');
  updateColor('turquiose')
  });





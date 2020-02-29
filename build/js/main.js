function rotateWheel(degr) {
  let wheel = document.querySelector('.wheel');
  wheel.style.transform = 'rotate('+degr+'deg)';
}

function randomDegrees() {
  let randomFloat = Math.random()*360;
  let descreetDegrees = Math.round(randomFloat / 60) * 60;
  return descreetDegrees;
}

function getCurrentColor(currentDegrees) {
  let colors = ["green", "red", "orange", "cyan", "yellow", "blue"];
  let segmentCount = parseInt(currentDegrees/60);
  let segmentShift = segmentCount % colors.length;
  
  return colors[segmentShift];
}

function launchSpin() {
  currentRotation += randomDegrees();
  
  rotateWheel(currentRotation);
  setTimeout(function() {
    let winColor = getCurrentColor(currentRotation);
    showPopup(winColor);
  }, 3500);
}
  
function showPopup(color) {
  let popHTML = getPopupHTML({
    color: color,
    title: 'Поздравляем!'
  });

  let popupWrapper = document.createElement('div');
      popupWrapper.innerHTML = popHTML;
      popupWrapper.className='popup';
      document.body.append(popupWrapper);

  bindPopupEvents(popupWrapper);
}

function getPopupHTML(data) {
  return `<div class='popup__box' data-modal>
            <span class='close'></span>

            <div class='popup__container'>
              <h1>${data.title}</h1>

              <div class='popup__center'>
                <div id='image' class='${data.color}'>
                </div>

                <div class='popup__description'>
                  Вы выиграли сегмент с цветом <span>${data.color}</span>.
                  <br />
                  Испробуйте Удачу в следующем сегменте!
                </div>
              </div>
              <button class="closest" data-close>
                <span>Крутить еще раз</span>
              </button>
            </div>
          </div>`;
}


function bindPopupEvents(popupEl) {
  let closeButton = popupEl.querySelector('.close');
  let spinButton = popupEl.querySelector('#spin');

  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    popupEl.remove();
  });
}

let currentRotation = 0;
let spinButton = document.querySelector('#spin');
spinButton.addEventListener('click', launchSpin);



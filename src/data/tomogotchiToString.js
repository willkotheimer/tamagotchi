import Tamagotchi from './tamagotchi';

const makeTomagotchi = () => {
  let fourQuads = "";
  Tamagotchi.getTamagotchi().forEach((tg) => {
    fourQuads += `<div class="${tg.quadrantName}">
    <div class="name">${tg.quadrantName}</div>
    <div class="score">${tg.quadrantTotal}</div>
    <div class="buttons">
      <button data-value="${tg.button1Value}" id="${tg.quadrantName.toLowerCase()}-button-1">${tg.button1Name}</button>
      <button data-value="${tg.button2Value}" id="${tg.quadrantName.toLowerCase()}-button-2" class="button-${tg.button2Name}">${tg.button2Name}</button>
    </div>
</div>`;
  });
  return fourQuads;
}

export default { makeTomagotchi }

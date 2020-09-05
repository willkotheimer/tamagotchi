import Tamagotchi from '../../data/tamagotchi';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const domReBuilder = (array) => {
  array.forEach((tg) => {
    console.warn(tg);
    const template = `<div class="${tg.quadrantName}">
    <div class="name">${tg.quadrantName}</div>
    <div class="score">${tg.quadrantTotal}</div>
    <div class="buttons">
      <button data-value="${tg.button1Value}" id="${tg.quadrantName.toLowerCase()}-1">${tg.button1Name}</button>
      <button data-value="${tg.button2Value}" id="${tg.quadrantName.toLowerCase()}-2" class="button-${tg.button2Name}">${tg.button2Name}</button>
    </div>
</div>`;

    printToDom(`${tg.quadrantName.toLowerCase()}`, template);
  });
};

const makeEvent = (id) => {
  const [action, version] = id.split('-');
  const myObj = Tamagotchi.quadFinder(action);
  let num;
  switch (version) {
    case '1': num = myObj.button1Value;
      break;
    case '2': num = myObj.button2Value;
      break;
    default: num = 0;
      break;
  }
  if ((myObj.quadrantTotal + num) <= 100) {
    myObj.quadrantTotal += num;
    domReBuilder(Tamagotchi.getTamagotchi());
  }
};

const addEventListener = (name) => {
  $(document).ready(() => {
    $(document).off('click', `#${name}-1`);
    $(document).on('click', `#${name}-1`, (e) => {
      makeEvent((e.target.id));
    });
    $(document).off('click', `#${name}-2`);
    $(document).on('click', `#${name}-2`, (e) => {
      makeEvent((e.target.id));
    });
  });
};

const domStringBuilder = (array) => {
  array.forEach((tg) => {
    const template = `<div class="${tg.quadrantName}">
  <div class="name">${tg.quadrantName}</div>
  <div class="score">${tg.quadrantTotal}</div>
  <div class="buttons">
    <button data-value="${tg.button1Value}" id="${tg.quadrantName.toLowerCase()}-1">${tg.button1Name}</button>
    <button data-value="${tg.button2Value}" id="${tg.quadrantName.toLowerCase()}-2" class="button-${tg.button2Name}">${tg.button2Name}</button>
  </div>
</div>`;
    printToDom(`${tg.quadrantName.toLowerCase()}`, template);
    addEventListener(`${tg.quadrantName.toLowerCase()}`);
  });
};

export default { domStringBuilder };

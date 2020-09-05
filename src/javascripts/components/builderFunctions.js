const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (array) => {
  array.forEach((tg) => {
    console.warn(tg);
    const template = `<div class="${tg.quadrantName}">
    <div class="name">${tg.quadrantName}</div>
    <div class="score">${tg.quadrantTotal}</div>
    <div class="buttons">
      <button data-value="${tg.button1Value}" id="${tg.quadrantName}-button-1">${tg.button1Name}</button>
      <button data-value="${tg.button2Value}" id="${tg.quadrantName}-button-2" class="button-${tg.button2Name}">${tg.button2Name}</button>
    </div>
</div>`;
    printToDom(`${tg.quadrantName.toLowerCase()}`, template);
  });
};
export default { domStringBuilder };

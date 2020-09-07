import Tamagotchi from '../../data/tamagotchi';

const progress = () => {
  const progressBar = Tamagotchi.avgTotal();
  const template = `<div class="barOverflow">
  <div class="bar"></div>
</div>
<span>${progressBar}</span>%`;
  const selectedDiv = document.getElementById('progress');
  selectedDiv.innerHTML = template;
  /* progress bar adapted from https://codeconvey.com/semi-circle-progress-bar-css/ */
  $(document).ready(() => {
    $('#progress').each(function () {
      const bar = $(this).find('.bar');
      const val = $(this).find('span');
      console.warn(val.text());
      const perc = parseInt(val.text(), 10);
      console.warn(val.innerHTML);
      $({ p: 0 }).animate({ p: perc }, {
        duration: 1000,
        easing: 'swing',
        step: (p) => {
          bar.css({
            transform: `rotate(${(45 + p * 1.8)}deg)`,
          });
          val.text(Math.floor(p));
        }
      });
    });
  });
};

export default { progress };

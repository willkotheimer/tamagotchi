const tomagotchi = [
  {
    quadrantName: 'Eat',
    quadrantTotal: 100,
    button1Name: 'Healthy Food',
    button1Value: 10,
    button2Name: 'Unhealthy Food',
    button2Value: -3
  },
  {
    quadrantName: 'Play',
    quadrantTotal: 100,
    button1Name: 'Super Fun Activity',
    button1Value: 50,
    button2Name: 'Slightly Fun Activity',
    button2Value: 2

  },
  {
    quadrantName: 'Fight',
    quadrantTotal: 100,
    button1Name: 'Running Away (Bravely)',
    button1Value: 1,
    button2Name: 'Committing Violence',
    button2Value: -10

  },
  {
    quadrantName: 'Sleep',
    quadrantTotal: 50,
    button1Name: 'nap',
    button1Value: 50,
    button2Name: 'deep slumber',
    button2Value: 60
  }];

const getTamagotchi = () => tomagotchi;

export default { getTamagotchi };

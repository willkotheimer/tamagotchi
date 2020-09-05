const addEventListener = (name) => {
  const button1 = $(`#${name}-button-1`);
  const button2 = $(`#${name}-button-2`);
  button1.on('click', (e) => {
    console.warn(e.target.id);
  });
  button2.on('click', (e) => {
    console.warn(e.target.id);
  });
};

export default { addEventListener };


# Week 8 - Tamagotchi
This was an assignment to give us the opportunity to use everything we had done thus far in JS modules, event listeners, and templating, while adding sass, webpack, with JS lint. The Tamagotchi is a 1990s toy from Japan that allows the user to pretend to have a pet. Our version had four "actions": eating, sleeping, fighting, and playing, that increased its levels with each thing.


## Motivation
The motivation for this assignment was to build out our skills using sass and webpack, which both force conforming to use rules in coding, but also enable us to eliminate errors as we go.

## Build status
The MVP is complete. One thing I would change that I think would make this better is if the progress bar didn't restart from zero everytime, but would increase or decrese from the point it starts, but this will probably require some thought and reworking of the origin al function, which I asquired online at `https://codeconvey.com/semi-circle-progress-bar-css/`

## Code Style
Jquery ES6, HTML5, SASS, JSLint, Webpack

## Screenshots

![](https://github.com/willkotheimer/tamagotchi/blob/master/src/images/Tagagotchi.PNG)

## URL

[https://ecstatic-einstein-3ebafb.netlify.app/](https://ecstatic-einstein-3ebafb.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/00353d09-21ac-4c14-a8b5-e73f9c67010b/deploy-status)](https://app.netlify.com/sites/ecstatic-einstein-3ebafb/deploys)

## Features
Features to make energy levels increase or decrease on press of button, adding and subtracting levels, and averaging levels and have them display numerically and in a progress bar.

## Code Example
```             
const getTamagotchi = () => tomagotchi;

const quadFinder = (action) => tomagotchi.find((o) => o.quadrantName.toLowerCase() === action);

const avgTotal = () => {
  const sum = getTamagotchi().reduce((currentTotal, nextValue) => currentTotal + nextValue.quadrantTotal, 0);
  const progressBar = sum / 4;
  return progressBar;
};
```
## The Team
[Will Kotheimer](https://github.com/willkotheimer)


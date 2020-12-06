## material-ui

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Material UI](https://material-ui.com/getting-started/installation/)
and react-router-dom.

https://www.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/learn/lecture/16040478#overview



## Dependencies

## material-ui core

```sh
$ npm install @material-ui/core
```

## material-ui style

Yes, it's a [separate package](https://material-ui.com/styles/basics/) for `Css-in-JS` solution. And why do I need it? 

- out-of-box-solution for styling material-ui component (even though you don't have too).
- you can [style (css) dynamically based on current app state (js)](https://material-ui.com/styles/basics/#adapting-based-on-props).

```sh
$ npm install @material-ui/styles
```

There are 3 ways of using style-api:
- hook(`makeStyles`+`useStyles`). If your react supports hooks, use this for greater flexibility. Note: need to have class-name.
- higher-order(`withStyles`). It encapsulates `make-use hook` within the higher-order function - It calls `makeStyles` on input::style and `useStyle` that returns output::classes. If your react doesn't supports hook, use this. Note: need to have class-name.
- styled-component(`styled`). Like higher-order, it abstracts away `make-use hook`. If you're lazy to create a class-name, use this.
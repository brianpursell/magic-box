import React from 'react';
import anime from 'animejs';
<<<<<<< HEAD:web/src/components/Common/Loading.jsx
import styles from '../../styles.scss';
=======
import '../styles.scss';

// Got from https://codepen.io/juliangarnier/pen/rGjMyW, just changed CSS styles, duration and numberOfEls
>>>>>>> 85d02270ef040cc66877516b795cede724c7ce96:react-client/src/components/Loading.jsx

const Header = props => {
  console.log('called');
  {
    const wrapperEl = document.querySelector('.wrapper');
    const numberOfEls = 40;
    const duration = 2000;
    const delay = duration / numberOfEls;

    let tl = anime.timeline({
      duration: delay,
      complete: function() {
        tl.restart();
      }
    });

    function createEl(i) {
      let el = document.createElement('div');
      const rotate = 360 / numberOfEls * i;
      const translateY = -50;
      const hue = Math.round(360 / numberOfEls * i);
      el.classList.add('el');
      el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
      el.style.transform =
        'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
      tl.add({
        begin: function() {
          anime({
            targets: el,
            backgroundColor: [
              'hsl(' + hue + ', 40%, 60%)',
              'hsl(' + hue + ', 60%, 80%)'
            ],
            rotate: [rotate + 'deg', rotate + 10 + 'deg'],
            translateY: [translateY + '%', translateY + 10 + '%'],
            scale: [1, 1.25],
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: duration * 0.1
          });
        }
      });
      wrapperEl.appendChild(el);
    }

    for (let i = 0; i < numberOfEls; i++) createEl(i);
  }
  return <div className="wrapper" />;
};

export default Header;

// WEBPACK FOOTER //
// react-client/src/components/Loading.jsx

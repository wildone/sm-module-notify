const opts = {
  open: {
    easing: simpla.constants.easings.easeOutCubic,
    fill: 'both',
    duration: 100,
  },
  close: {
    easing: 'ease',
    duration: 150
  }
};

export default {

  _openToast(from){
    let attribute = `margin-${from}`,
        original = window.getComputedStyle(this)[attribute];

    this.style.visibility = 'visible'

    this.animate([
      { [`margin-${from}`]: -this.offsetHeight + 'px' },
      { [`margin-${from}`]: original }
    ], opts.open);
  },

  _closeToast() {
    let animation = this.animate([
      { opacity: 1 },
      { opacity: 0 }
    ], opts.close);

    animation.onfinish = () => {
      this.remove()
    }
  }

};

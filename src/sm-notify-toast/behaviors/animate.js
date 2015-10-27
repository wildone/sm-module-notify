const easings = simpla.constants.easings,
      opts = {
        open: {
          easing: simpla.constants.easings.easeOutCubic,
          fill: 'both',
          duration: 200,
        },
        close: {
          easing: 'ease',
          duration: 150
        }
      };

export default {

  _openToast(from){

    this.style.visibility = 'visible'

    this.animate([
      { [`margin-${from}`]: -this.offsetHeight },
      { [`margin-${from}`]: 0 }
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

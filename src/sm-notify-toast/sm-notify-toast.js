import animate from './behaviors/animate';

class SmNotifyToast {
  beforeRegister() {
    this.is = 'sm-notify-toast';

    this.properties = {
      type: {
        type: String,
        reflectToAttribute: true,
        value: 'info'
      },

      icon: {
        type: String,
        computed: '_computeIcon(type)',
        value: 'simpla:info'
      },

      duration: {
        type: Number,
        value: 3000
      },

      persist: {
        type: Boolean,
        value: false
      },

      title: {
        type: String,
        reflectToAttribute: true
      },

      fromPosition: {
        type: String,
        value: 'top'
      }

    }
  }

  get behaviors() {
    return [
      animate
    ];
  }

  show() {
    this._openToast(this.fromPosition);

    if (!this.persist){
      setTimeout(() => {
        this._closeToast();
      }, this.duration);
    }
  }

  destroy() {
    this._closeToast();
  }

  _computeIcon(type) {
    let types = {
      info: 'simpla:info',
      success: 'simpla:happy-smiley',
      warning: 'simpla:shocked-smiley',
      error: 'simpla:sad-smiley'
    };

    return types[type]
  }

}

Polymer(SmNotifyToast);

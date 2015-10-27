class SmModuleNotify {
  beforeRegister() {
    this.is = 'sm-module-notify';

    this.properties = {
      toasts: {
        type: Array,
        value: () => []
      },
      position: {
        type: String,
        value: 'bottom',
        reflectToAttribute: true
      }
    };
  }

  info(title, message) {
    this.notify('info', title, message);
  }

  success(title, message) {
    this.notify('success', title, message);
  }

  warn(title, message) {
    this.notify('warning', title, message);
  }

  error(title, message) {
    this.notify('error', title, message);
  }

  notify(type, title, message, silent = false) {
    let notification;

    console.log(`${title}: ${message}`);

    if (silent) {
      return;
    }

    notification = this._makeToast(type, title, message);

    if (this.position === 'bottom') {
      Polymer.dom(this.root).insertBefore(notification, null);
    } else {
      Polymer.dom(this.root).appendChild(notification);
    }

    notification.show();
  }

  _makeToast(type, title, message) {
    let notification = document.createElement('sm-notify-toast');

    notification.type = type;
    notification.title = title;
    Polymer.dom(notification).innerHTML = message;

    notification.fromPosition = this.position;

    return notification;
  }
}

Polymer(SmModuleNotify);

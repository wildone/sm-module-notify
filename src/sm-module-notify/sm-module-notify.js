class SmModuleNotify {
  beforeRegister() {
    this.is = 'sm-module-notify';

    this.properties = {
      toasts: {
        type: Array,
        value: () => []
      },
      position: {
        type: Object,
        value: 'bottom-right',
        reflectToAttribute: true
      }
    };
  }

  info(message, title, persist) {
    this.notify('info', message, title, persist);
  }

  success(message, title, persist) {
    this.notify('success', message, title, persist);
  }

  warn(message, title, persist) {
    this.notify('warning', message, title, persist);
  }

  error(message, title, persist) {
    this.notify('error', message, title, persist);
  }

  notify(type, message, title, silent = false, persist = false) {
    let notification;

    console.log(`${title || ''}: ${message}`);

    if (silent) {
      return;
    }

    notification = this._makeToast(type, title, message);

    if (this.position.split('-')[0] === 'bottom') {
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
    notification.fromPosition = this.position.split('-')[0];

    return notification;
  }
}

Polymer(SmModuleNotify);

'use strict';

export default class Feeder {
    constructor(options) {
        if (!options.url) {
            throw 'You need to pass a valid URL as a parameter!';
        }

        this.url      = encodeURIComponent(options.url);
        this.size     = options.size || 10;
        this.endpoint = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + this.size + '&q=' + this.url;
        this.callback = options.callback || function () {};

        this.request();
    }

    jsonp(url, callback, context) {
        let name, head, script, extScript;

        name = 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);

        head           = document.head || document.getElementsByTagName('head')[0];
        extScript      = document.createElement('script');
        extScript.type = 'text/javascript';

        script       = extScript.cloneNode();
        script.src   = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + name;
        script.async = true;

        head.appendChild(script);

        window[name] = (data) => {
            callback.call((context || window), data);
            head.removeChild(script);
            script = null;
            delete this.name;
        }
    }

    request() {
        this.jsonp(this.endpoint, this.callback)
    }
}
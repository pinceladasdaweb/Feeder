/*jslint browser: true, debug: true*/
/*global define, module, exports*/
(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Feeder = factory();
    }
}(this, function () {
    'use strict';

    var Feeder = function (options) {
        if (!this || !(this instanceof Feeder)) {
            return new Feeder(options);
        }

        if (!options) {
            options = {};
        }

        if (!options.url) {
            throw 'You need to pass a valid URL as a parameter!';
        }

        this.url      = encodeURIComponent(options.url);
        this.size     = options.size || 10;
        this.endpoint = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + this.size + '&q=' + this.url;
        this.callback = options.callback || function () {};

        this.request();
    };

    Feeder.prototype = {
        jsonp: function (url, callback, context) {
            var name = 'jsonp_' + Math.round(100000 * Math.random()),
                head,
                script,
                extScript;

            head           = document.head || document.getElementsByTagName('head')[0];
            extScript      = document.createElement('script');
            extScript.type = 'text/javascript';

            script       = extScript.cloneNode();
            script.src   = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + name;
            script.async = true;

            head.appendChild(script);

            window[name] = function (data) {
                callback.call((context || window), data);
                head.removeChild(script);
                script = null;
                delete this.name;
            }.bind(this);
        },
        request: function () {
            this.jsonp(this.endpoint, this.callback);
        }
    };

    return Feeder;
}));
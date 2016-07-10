(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Feeder = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports);
        global.feeder = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Feeder = function () {
        function Feeder(options) {
            _classCallCheck(this, Feeder);

            if (!options.url) {
                throw 'You need to pass a valid URL as a parameter!';
            }

            this.url = encodeURIComponent(options.url);
            this.size = options.size || 10;
            this.endpoint = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + this.size + '&q=' + this.url;
            this.callback = options.callback || function () {};

            this.request();
        }

        _createClass(Feeder, [{
            key: 'jsonp',
            value: function jsonp(url, callback, context) {
                var _this = this;

                var name = void 0,
                    head = void 0,
                    script = void 0,
                    extScript = void 0;

                name = 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);

                head = document.head || document.getElementsByTagName('head')[0];
                extScript = document.createElement('script');
                extScript.type = 'text/javascript';

                script = extScript.cloneNode();
                script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + name;
                script.async = true;

                head.appendChild(script);

                window[name] = function (data) {
                    callback.call(context || window, data);
                    head.removeChild(script);
                    script = null;
                    delete _this.name;
                };
            }
        }, {
            key: 'request',
            value: function request() {
                this.jsonp(this.endpoint, this.callback);
            }
        }]);

        return Feeder;
    }();

    exports.default = Feeder;
    module.exports = exports['default'];
});

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZmVlZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFcUIsTTtBQUNqQix3QkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLGdCQUFJLENBQUMsUUFBUSxHQUFiLEVBQWtCO0FBQ2Qsc0JBQU0sOENBQU47QUFDSDs7QUFFRCxpQkFBSyxHQUFMLEdBQWdCLG1CQUFtQixRQUFRLEdBQTNCLENBQWhCO0FBQ0EsaUJBQUssSUFBTCxHQUFnQixRQUFRLElBQVIsSUFBZ0IsRUFBaEM7QUFDQSxpQkFBSyxRQUFMLEdBQWdCLG1FQUFtRSxLQUFLLElBQXhFLEdBQStFLEtBQS9FLEdBQXVGLEtBQUssR0FBNUc7QUFDQSxpQkFBSyxRQUFMLEdBQWdCLFFBQVEsUUFBUixJQUFvQixZQUFZLENBQUUsQ0FBbEQ7O0FBRUEsaUJBQUssT0FBTDtBQUNIOzs7O2tDQUVLLEcsRUFBSyxRLEVBQVUsTyxFQUFTO0FBQUE7O0FBQzFCLG9CQUFJLGFBQUo7QUFBQSxvQkFBVSxhQUFWO0FBQUEsb0JBQWdCLGVBQWhCO0FBQUEsb0JBQXdCLGtCQUF4Qjs7QUFFQSx1QkFBTyxXQUFXLEtBQUssR0FBTCxFQUFYLEdBQXdCLEdBQXhCLEdBQThCLEtBQUssSUFBTCxDQUFVLEtBQUssTUFBTCxLQUFnQixNQUExQixDQUFyQzs7QUFFQSx1QkFBaUIsU0FBUyxJQUFULElBQWlCLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBbEM7QUFDQSw0QkFBaUIsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQWpCO0FBQ0EsMEJBQVUsSUFBVixHQUFpQixpQkFBakI7O0FBRUEseUJBQWUsVUFBVSxTQUFWLEVBQWY7QUFDQSx1QkFBTyxHQUFQLEdBQWUsT0FBTyxJQUFJLE9BQUosQ0FBWSxHQUFaLEtBQW9CLENBQXBCLEdBQXdCLEdBQXhCLEdBQThCLEdBQXJDLElBQTRDLFdBQTVDLEdBQTBELElBQXpFO0FBQ0EsdUJBQU8sS0FBUCxHQUFlLElBQWY7O0FBRUEscUJBQUssV0FBTCxDQUFpQixNQUFqQjs7QUFFQSx1QkFBTyxJQUFQLElBQWUsVUFBQyxJQUFELEVBQVU7QUFDckIsNkJBQVMsSUFBVCxDQUFlLFdBQVcsTUFBMUIsRUFBbUMsSUFBbkM7QUFDQSx5QkFBSyxXQUFMLENBQWlCLE1BQWpCO0FBQ0EsNkJBQVMsSUFBVDtBQUNBLDJCQUFPLE1BQUssSUFBWjtBQUNILGlCQUxEO0FBTUg7OztzQ0FFUztBQUNOLHFCQUFLLEtBQUwsQ0FBVyxLQUFLLFFBQWhCLEVBQTBCLEtBQUssUUFBL0I7QUFDSDs7Ozs7O3NCQXZDZ0IsTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMudXJsKSB7XG4gICAgICAgICAgICB0aHJvdyAnWW91IG5lZWQgdG8gcGFzcyBhIHZhbGlkIFVSTCBhcyBhIHBhcmFtZXRlciEnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cmwgICAgICA9IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLnVybCk7XG4gICAgICAgIHRoaXMuc2l6ZSAgICAgPSBvcHRpb25zLnNpemUgfHwgMTA7XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSAnaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvc2VydmljZXMvZmVlZC9sb2FkP3Y9MS4wJm51bT0nICsgdGhpcy5zaXplICsgJyZxPScgKyB0aGlzLnVybDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAgICAgdGhpcy5yZXF1ZXN0KCk7XG4gICAgfVxuXG4gICAganNvbnAodXJsLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBsZXQgbmFtZSwgaGVhZCwgc2NyaXB0LCBleHRTY3JpcHQ7XG5cbiAgICAgICAgbmFtZSA9ICdqc29ucF8nICsgRGF0ZS5ub3coKSArICdfJyArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcblxuICAgICAgICBoZWFkICAgICAgICAgICA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgZXh0U2NyaXB0ICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgZXh0U2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcblxuICAgICAgICBzY3JpcHQgICAgICAgPSBleHRTY3JpcHQuY2xvbmVOb2RlKCk7XG4gICAgICAgIHNjcmlwdC5zcmMgICA9IHVybCArICh1cmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICsgJ2NhbGxiYWNrPScgKyBuYW1lO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgICAgICB3aW5kb3dbbmFtZV0gPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgoY29udGV4dCB8fCB3aW5kb3cpLCBkYXRhKTtcbiAgICAgICAgICAgIGhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5uYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdCgpIHtcbiAgICAgICAgdGhpcy5qc29ucCh0aGlzLmVuZHBvaW50LCB0aGlzLmNhbGxiYWNrKVxuICAgIH1cbn0iXX0=

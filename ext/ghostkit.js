(function(window) {
    'use strict';

    var ghostkit = window.ghostkit = {
        version: '0.0.1',
        queue: {
            mobile: [],
            desktop: [],
            default: []
        },
        mobile: null
    },

    push = Array.prototype.push;

    ghostkit.register = function(status, fun) {
        push.call(ghostkit.queue[status], fun);
        return ghostkit;
    };

    ghostkit.isMobile = function() {
        var ua = window.navigator.userAgent;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
            return true;
        } else {
            return false;
        }
    };

    ghostkit.init = function() {
        var queue = [];
        ghostkit.mobile = ghostkit.isMobile();
        if(ghostkit.mobile) {
            queue = ghostkit.queue.mobile;
        } else {
            queue = ghostkit.queue.desktop;
        }
        queue.forEach(function(fun) {
            fun();
        });
        ghostkit.queue.default.forEach(function(defFun) {
            defFun();
        });
        return ghostkit;
    };

})(window);

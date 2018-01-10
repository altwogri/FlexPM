'use strict';
window.mocks = window.mocks || {};
window.mocks.logincaptivating = window.mocks.logincaptivating || {};
window.mocks.logincaptivating.submit = function ($scope, params, app) {
    if (window.plugins && window.plugins.touchid) {
        window.plugins.touchid.save('credentials', JSON.stringify(params.data), function () {
            alert('logged in!');
        }, function (err) {
            alert(err);
        });
    }
};
angular.module('app').controller('app_mytasks', app_mytasks);
function app_mytasks($scope, app) {
    'use strict';
    app.init($scope);
}

exports.login = function (page,params) {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://flexpm-it.flextronics.com:8015/service.asmx?op=PerformWFAction";
    var reqResponse = [];
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            // for (var i = 0; i < response.length; i++) {
            //     reqResponse[i] = {'name': response[i].name,'email':response[i].email,'phone':response[i].phone,'username':response[i].username,'website':response[i].website};
            // }
        }
    };
    xmlhttp.open("POST", url, false);
    xmlhttp.send(params);

    //Is the below method is used to pass the response to the next page?
    // page.data(function(data) {
    //     data.list = list;
    // })
    //     .screen("result");
}

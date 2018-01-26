angular.module('app').controller('app_mytasks', app_mytasks);
function app_mytasks($scope, app) {
    'use strict';
    app.init($scope);
}

angular.module('app').controller('approveTask', approveTask);
function approveTask() {
    $http({
        url: 'https://flexpm-it.flextronics.com:8015/service.asmx?op=PerformWFAction',
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: { UserAD : username,
                Group : 'Infor ERP',
                TaskNo : task,
                Action : 'PDA done'
        }
    })
    .then(function(response) {
            // success
    }, 
    function(response) { // optional
            // failed
    });
}
/*
//function approve_task(page,params) {
    $scope.approveTask = function () {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://flexpm-it.flextronics.com:8015/service.asmx?op=PerformWFAction";
        var reqResponse = "";
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
            }
        };
        xmlhttp.open("POST", url, false);
        xmlhttp.send("UserAD=data.username&Group='Infor%20ERP'&TaskNo=item.task&Action='PDA%20done'");

    //Is the below method is used to pass the response to the next page?
    // page.data(function(data) {
    //     data.list = list;
    // })
    //     .screen("result");
}
*/
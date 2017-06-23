var app = angular.module('formlyApp', ['ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // route to show our basic form (/form)
        .state('base', {
            url: '/base',
            templateUrl: 'base.html'
        })

        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('base.login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: 'LoginController'
        })

        // url will be /form/interests
        .state('base.educate', {
            url: '/educate',
            templateUrl: 'educate.html',
            controller: 'EduController'
        })

        // url will be /form/payment
        .state('base.work', {
            url: '/work',
            templateUrl: 'work.html',
            controller: 'WorkController'
        })

        .state('base.deeds', {
            url: '/deeds',
            templateUrl: 'deeds.html',
            controller: 'DeedController'
        })

        // url will be /form/payment
        .state('base.skills', {
            url: '/skills',
            templateUrl: 'skills.html',
            controller: 'SkillController'
        })

        .state('base.tools', {
            url: '/tools',
            templateUrl: 'tools.html',
            controller: 'ToolController'
        });
    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/base/login');
});


app.controller("ListController", ['$scope', function ($scope) {

    $scope.formData = {};
    $scope.formDataList = [];
    $scope.model = {
        user: [],
        selected: {},
        recent: {}
    };

    $scope.IsVisible = false;
    $scope.reverseSort = false;
    $scope.showTheForm = false;
    $scope.editIndex = null;

    $scope.addNew = function () {
        $scope.showTheForm = !$scope.showTheForm;

        if ($scope.editIndex !== null) {
            $scope.saveEdu();
        } else {
            var tmp = this.formData;
            tmp["id"] = $scope.model.user.length + 1;
            $scope.model.user.push(tmp);

            $scope.formDataList.push(this.formData);
            $scope.model.recent = this.formData;
            this.formData = {};
        }
    };

    $scope.remove = function (index) {
        var tmpUser = [];
        var ind = 0;
        var tmpFormList = [];

        angular.forEach($scope.formDataList, function (selected) {
            if (index != selected["id"]) {
                selected["id"] = ind;
                tmpUser.push(selected);
                tmpFormList.push(selected);
                ind += 1;
            }
        });

        $scope.formDataList = tmpFormList;
        $scope.model.user = tmpUser;
    };

    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.showme = !$scope.showme;
    };

    $scope.getTemplate = function (user) {
        if (user.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.editEdu = function (index) {
        $scope.editIndex = index;
        $scope.formData = $scope.formDataList[index];
        $scope.showTheForm = !$scope.showTheForm;
    };

    $scope.saveEdu = function () {
        $scope.formDataList[$scope.editIndex] = angular.copy($scope.formData);

        $scope.model.user[$scope.editIndex]["id"] = $scope.editIndex;
        $scope.model.user[$scope.editIndex]["school"] = $scope.formData.school;
        $scope.model.user[$scope.editIndex]["major"] = $scope.formData.major;
        $scope.model.user[$scope.editIndex]["start"] = $scope.formData.start;
        $scope.model.user[$scope.editIndex]["end"] = $scope.formData.end;
        $scope.model.user[$scope.editIndex]["status"] = $scope.formData.status;
        $scope.model.user[$scope.editIndex]["honors"] = $scope.formData.honors;
        $scope.reset();
    };

    $scope.reset = function () {
        $scope.model.selected = {};
        $scope.editIndex = null;
        $scope.formData = {};
    };

}]);

app.controller("WorkController", function ($scope) {
    $scope.formData = {};
    $scope.formDataList = [];
    $scope.model = {
        user: [],
        selected: {},
        recent: {}
    };

    $scope.IsVisible = false;
    $scope.reverseSort = false;
    $scope.showTheForm = false;
    $scope.shownew = true;
    $scope.sameEmployer = false;
    $scope.editIndex = null;

    $scope.addNew = function () {
        $scope.showTheForm = !$scope.showTheForm;

        if ($scope.editIndex !== null) {
            $scope.saveEdu();
        } else {
            var tmp = this.formData;
            tmp["id"] = $scope.model.user.length + 1;
            $scope.model.user.push(tmp);

            $scope.formDataList.push(this.formData);
            $scope.model.recent = this.formData;
            this.formData = {};
        }
    };

    $scope.setSameEmployerTrue = function () {
        $scope.formData["ename"] = $scope.model.recent["ename"];
    };

    $scope.setSameEmployerFalse = function () {
        $scope.formData = {};
    };

    $scope.remove = function (index) {
        var tmpUser = [];
        var ind = 0;
        var tmpFormList = [];

        angular.forEach($scope.formDataList, function (selected) {
            if (index != selected["id"]) {
                selected["id"] = ind;
                tmpUser.push(selected);
                tmpFormList.push(selected);
                ind += 1;
            }
        });

        $scope.formDataList = tmpFormList;
        $scope.model.user = tmpUser;
    };

    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.model.user, function (user) {
            user.selected = $scope.selectedAll;
        });
    };

    $scope.processForm = function () {
        // execute something
        $scope.showTheForm = false;
    };

    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.showme = !$scope.showme;
    };

    $scope.resetForm = function () {
        $scope.regForm = angular.copy($scope.originForm); // Assign clear state to modified form
        $scope.myForm.$setPristine(); // this line will update status of your form, but will not clean your data, where `registrForm` - name of form.
    };

    $scope.getTemplate = function (user) {
        if (user.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.reset = function () {
        $scope.model.selected = {};
        $scope.editIndex = null;
        $scope.formData = {};
    };

    $scope.editEdu = function (index) {
        $scope.editIndex = index;
        $scope.formData = $scope.formDataList[index];
        $scope.showTheForm = !$scope.showTheForm;
    };

    $scope.saveEdu = function () {
        $scope.formDataList[$scope.editIndex] = angular.copy($scope.formData);

        $scope.model.user[$scope.editIndex]["id"] = $scope.editIndex;
        $scope.model.user[$scope.editIndex]["esector"] = $scope.formData.esector;
        $scope.model.user[$scope.editIndex]["ename"] = $scope.formData.ename;
        $scope.model.user[$scope.editIndex]["region"] = $scope.formData.region;
        $scope.model.user[$scope.editIndex]["smonth"] = $scope.formData.smonth;
        $scope.model.user[$scope.editIndex]["start"] = $scope.formData.start;
        $scope.model.user[$scope.editIndex]["emonth"] = $scope.formData.emonth;
        $scope.model.user[$scope.editIndex]["end"] = $scope.formData.end;
        $scope.model.user[$scope.editIndex]["position"] = $scope.formData.position;
        $scope.model.user[$scope.editIndex]["primary"] = $scope.formData.primary;
        $scope.model.user[$scope.editIndex]["role"] = $scope.formData.role;

        $scope.reset();
    };

    $scope.processForm1 = function () {
        // execute something
        $scope.showbutton = true;
        $scope.shownew = false;
    };


});


app.controller("DeedController", function ($scope) {
    $scope.formData = {};
    $scope.formDataList = [];
    $scope.model = {
        deeds: [],
        selected: {},
        recent: {}
    };

    $scope.IsVisible = false;
    $scope.reverseSort = false;
    $scope.showTheForm = false;
    $scope.editIndex = null;

    $scope.addNew = function () {
        $scope.showTheForm = !$scope.showTheForm;

        console.log($scope);

        if ($scope.editIndex !== null) {
            $scope.saveDeed();
        } else {

            $scope.model.deeds.push({
                'id': $scope.model.deeds.length + 1,
                'smonth': this.formData.smonth,
                'syear': this.formData.syear,
                'category': this.formData.category,
                'activity': this.formData.activity,
                'deeddes': this.formData.deeddes,
                'pub':this.formData.pub,
                'art':this.formData.art
            });

            $scope.formDataList.push(this.formData);

            $scope.model.recent = this.formData;
            this.formData = {};
        }

    };

    $scope.remove = function (index) {
        var tmpDeed = [];
        var ind = 0;
        var tmpFormList = [];

        angular.forEach($scope.formDataList, function (selected) {
            if (index != selected["id"]) {
                selected["id"] = ind;
                tmpDeed.push(selected);
                tmpFormList.push(selected);
                ind += 1;
            }
        });

        $scope.formDataList = tmpFormList;
        $scope.model.deeds = tmpDeed;
    };


    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.model.user, function (user) {
            user.selected = $scope.selectedAll;
        });
    };

    $scope.processForm = function () {
        // execute something
        $scope.showTheForm = false;
    };

    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.showme = !$scope.showme;
    };

    $scope.resetForm = function () {
        $scope.regForm = angular.copy($scope.originForm); // Assign clear state to modified form
        $scope.myForm.$setPristine(); // this line will update status of your form, but will not clean your data, where `registrForm` - name of form.
    };

    $scope.getTemplate = function (deed) {
        if (deed.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.reset = function () {
        $scope.model.selected = {};
        $scope.editIndex = null;
        $scope.formData = {};
    };

    $scope.editDeed = function (index) {
        $scope.editIndex = index;
        $scope.formData = $scope.formDataList[index];
        $scope.showTheForm = !$scope.showTheForm;

        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById($scope.formData.category).style.display = "block";
    };

    $scope.setCategory = function (category) {
        $scope.formData.category = category;
    };

    $scope.saveDeed = function () {
        $scope.formDataList[$scope.editIndex] = angular.copy($scope.formData);

        $scope.model.deeds[$scope.editIndex]["id"] = $scope.editIndex;
        $scope.model.deeds[$scope.editIndex]["smonth"] = $scope.formData.smonth;
        $scope.model.deeds[$scope.editIndex]["syear"] = $scope.formData.syear;
        $scope.model.deeds[$scope.editIndex]["category"] = $scope.formData.category;
        $scope.model.deeds[$scope.editIndex]["activity"] = $scope.formData.activity;
        $scope.model.deeds[$scope.editIndex]["deeddes"] = $scope.formData.deeddes;
        $scope.model.deeds[$scope.editIndex]["pub"] = $scope.formData.pub;
        $scope.model.deeds[$scope.editIndex]["art"] = $scope.formData.art;

        $scope.reset();
    };

    $scope.processForm1 = function () {
        // execute something
        $scope.showbutton = true;
        $scope.shownew = false;
    };
});

app.controller("SkillController", ['$scope', function($scope) {
    $scope.personalDetails = [];
    $scope.reverseSort = false;
    $scope.addNew = function(personalDetail){
        $scope.personalDetails.push({
            'category': "",
            'software': "",
            'vendor': "",
            'linkedin': "",
            'proficiency': "",
            'year': "",
            'formal': "",
            'usage': ""
        });
    };

    $scope.remove = function(){
        var newDataList=[];
        $scope.selectedAll = false;
        angular.forEach($scope.personalDetails, function(selected){
            if(!selected.selected){
                newDataList.push(selected);
            }
        });
        $scope.personalDetails = newDataList;
    };

    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.personalDetails, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };
}]);

app.controller("ToolController", ['$scope', function($scope) {
    $scope.personalDetails = [];
    $scope.reverseSort = false;
    $scope.addNew = function(personalDetail){
        $scope.personalDetails.push({
            'category': "",
            'software': "",
            'vendor': "",
            'linkedin': "",
            'proficiency': "",
            'year': "",
            'formal': "",
            'usage': ""
        });
    };

    $scope.remove = function(){
        var newDataList=[];
        $scope.selectedAll = false;
        angular.forEach($scope.personalDetails, function(selected){
            if(!selected.selected){
                newDataList.push(selected);
            }
        });
        $scope.personalDetails = newDataList;
    };

    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.personalDetails, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };
}]);

app.controller("LoginController", ['$scope', function($scope) {
    $scope.login = [];

    $scope.addNew = function(personalDetail){
        $scope.personalDetails.push({
            'user': "",
            'password': ""
        });
    };

}]);

app.controller("EduController", ['$scope', function($scope) {
    $scope.personalDetails = [];
    $scope.reverseSort = false;

    $scope.addNew = function(personalDetail){

        console.log(personalDetail);

        $scope.personalDetails.push({
            'school': "",
            'field': "",
            'degree': "",
            'start': "",
            'end': "",
            'status': "",
            'honor': ""
        });

        console.log($scope.personalDetails);
    };

    $scope.remove = function(){
        var newDataList=[];
        $scope.selectedAll = false;
        angular.forEach($scope.personalDetails, function(selected){
            if(!selected.selected){
                newDataList.push(selected);
            }
        });
        $scope.personalDetails = newDataList;
    };

    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.personalDetails, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };
}]);
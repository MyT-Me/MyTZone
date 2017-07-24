var app = angular.module('formlyApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // route to show our basic form (/form)
        .state('base', {
            url: '/base',
            templateUrl: '/sub/base',
            controller: 'Controller'
        })

        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('base.login', {
            url: '/login',
            templateUrl: '/sub/login'
        })

        // url will be /form/interests
        .state('base.educate', {
            url: '/educate',
            templateUrl: '/sub/education'
        })

        // url will be /form/payment
        .state('base.work', {
            url: '/work',
            templateUrl: '/sub/workExperience'
        })

        .state('base.deeds', {
            url: '/deeds',
            templateUrl: '/sub/deeds'
        })

        .state('base.skills', {
            url: '/skills',
            templateUrl: '/sub/skills'
        })

        .state('base.tools', {
            url: '/tools',
            templateUrl: '/sub/tools'
        });


    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/base/login');
});

app.controller("Controller", ['$scope','$http','$location', function($scope,$http,$location) {


    var year = 1900;
    var till = 2020;
    var range = [];

    var options = "";
    for(var y=year; y<=till; y++){
        range.push(y);
    }
    $scope.years = range;

    // LOGIN
    $scope.loginDetails = [];

    $scope.addNewLogin = function(loginDetails){
        $scope.loginDetails.push({
            'user': "",
            'password': ""
        });
    };

    $scope.checkEmail = function(){

            var email = document.getElementById('username');
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (!filter.test(email.value)) {
                email.focus;
                document.getElementById('username').style.borderColor = "red";
                return false;

            }
            else{

                document.getElementById('username').style.borderColor = "#a6a6a6";
                return true;
            }

    };

    // EDUCATION
    $scope.eduDetails = [];
    $scope.reverseSort = false;

    function sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }

    $scope.educationInit = function(){
        alert("Education Initialized");
        console.log("Education Page Initialized");
        console.log($location.url());
        $http.get('/api/education')
            .then(function(res){
                if(res.data != null)
                {
                    if(res.data.educationData != null)
                    {
                        $scope.eduDetails = [];
                        var ourEducationData = res.data.educationData;
                        ourEducationData.forEach(function(educationElement){
                            console.log(educationElement);
                            $scope.eduDetails.push({
                                 'school': educationElement.schoolName,
                                 'field': educationElement.fieldOfStudy,
                                 'degree': educationElement.typeOfProgram,
                                 'start': educationElement.startYear,
                                 'end': educationElement.yearAwarded,
                                 'status': educationElement.programStatus,
                                  'honor': "",
                                'ind': $scope.eduDetails.length + 1
                             });
                        });
                    }
                }
            })
            .catch(function (err){
                console.log(err.toString());
            });
        }
    
    $scope.addNewEdu = function(){

        var tempSend = {
        
        }

        $scope.eduDetails = sortByKey($scope.eduDetails, "ind");

        $scope.eduDetails.push({
            'school': "",
            'field': "",
            'degree': "",
            'start': "",
            'end': "",
            'status': "",
            'honor': "",
            'ind': $scope.eduDetails.length + 1
        });

        // var tmp = this.workData;
        // console.log(tmp);
        // console.log($scope);
        // tmp["id"] = $scope.model.user.length + 1;
        // $scope.model.user.unshift(tmp);
        //
        // $scope.workDataList.unshift(this.workData);
        // $scope.model.recent = this.workData;
        // this.workData = {};
        console.dir($scope.eduDetails);
        console.log($scope.eduDetails);
    };

    $scope.removeEdu = function(){
        var newDataList=[];
        $scope.selectedAll = false;
        angular.forEach($scope.eduDetails, function(selected){
            if(!selected.selected){
                newDataList.push(selected);
            }
        });
        $scope.eduDetails = newDataList;
    };

    $scope.checkAllEdu = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.eduDetails, function(eduDetails) {
            eduDetails.selected = $scope.selectedAll;
        });
    };

    $scope.validate = function(){
        var start = document.getElementById("start");
        var end = document.getElementById("end");

        if(end.value < start.value){
            document.getElementById('end').style.borderColor = "red";
            return false;
        }
        else{
            document.getElementById('end').style.borderColor = "#a6a6a6";
            return true;
        }

    };

    // WORK
    $scope.workData = {};
    $scope.workDataList = [];
    $scope.model = {
        user: [],
        deeds: [],
        selected: {},
        recent: {}
    };

    $scope.IsVisible = false;
    $scope.reverseSort = false;
    $scope.showTheFormWork = false;
    $scope.showQuestionsWork = false;
    $scope.shownew = true;
    $scope.sameEmployer = false;
    $scope.editIndexWork = null;

    $scope.addNewWork = function () {
        if ($scope.editIndexWork !== null) {
            $scope.saveWork();
        } else {
            var tmp = this.workData;
            console.log(tmp);
            console.log($scope);
            tmp["id"] = $scope.model.user.length + 1;
            $scope.model.user.unshift(tmp);

            $scope.workDataList.unshift(this.workData);
            $scope.model.recent = this.workData;
            this.workData = {};
        }
        $scope.showTheFormWork = false;
        this.showTheFormWork = false;
        $scope.showQuestionsWork = false;
        this.showQuestionsWork = false;
        // this.showTheFormWork = !this.showTheFormWork;
        // $scope.showTheFormWork = this.showTheFormWork;
    };

    $scope.setSameEmployerTrue = function () {
        $scope.workData["ename"] = $scope.model.recent["ename"];
    };

    $scope.setSameEmployerFalse = function () {
        $scope.workData = {};
    };

    $scope.removeWork = function (index) {
        var tmpUser = [];
        var ind = 0;
        var tmpFormList = [];

        angular.forEach($scope.workDataList, function (selected) {
            if (index != selected["id"]) {
                selected["id"] = ind;
                tmpUser.push(selected);
                tmpFormList.push(selected);
                ind += 1;
            }
        });

        $scope.workDataList = tmpFormList;
        $scope.model.user = tmpUser;
        $scope.editIndexWork = null;
    };

    $scope.checkAllWork = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.model.user, function (user) {
            user.selected = $scope.selectedAll;
        });
    };

    // $scope.processFormWork = function () {
    //     // execute something
    //     $scope.showTheFormWork = !$scope.showTheFormWork;
    // };

    $scope.ShowHideWork = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.showme = !$scope.showme;
    };

    $scope.resetFormWork = function () {
        $scope.regForm = angular.copy($scope.originForm); // Assign clear state to modified form
        $scope.myForm.$setPristine(); // this line will update status of your form, but will not clean your data, where `registrForm` - name of form.
    };

    $scope.getTemplateWork = function (user) {
        if (user.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.resetWork = function () {
        $scope.model.selected = {};
        $scope.editIndexWork = null;
        $scope.workData = {};
    };

    $scope.editWork = function (index) {
        $scope.editIndexWork = index;
        $scope.workData = $scope.workDataList[index];

        // $scope.showTheFormWork = true;
        console.log("inside edit work");
        console.log($scope.workData);
        console.log($scope.showTheFormWork);
        this.showTheFormWork = !this.showTheFormWork;
        $scope.showTheFormWork = this.showTheFormWork;
        //
        // if ($scope.showTheFormWork === false) {
        //     $scope.showTheFormWork = true;
        // }

        // console.log($scope.showTheFormWork);
        // console.log(this.showTheFormWork);
        return true;
    };

    $scope.questionWork = function (index) {
        $scope.editIndexWork = index;
        $scope.workData = $scope.workDataList[index];

        this.showQuestionsWork = !this.showQuestionsWork;
        $scope.showQuestionsWork = this.showQuestionsWork;

        console.log($scope.showQuestionsWork);
        console.log(this.showQuestionsWork);

        return true;
    };

    $scope.saveWork = function () {
        console.log("inside save work");
        $scope.workDataList[$scope.editIndexWork] = angular.copy($scope.workData);

        $scope.model.user[$scope.editIndexWork]["id"] = $scope.editIndexWork;
        $scope.model.user[$scope.editIndexWork]["esector"] = $scope.workData.esector;
        $scope.model.user[$scope.editIndexWork]["ename"] = $scope.workData.ename;
        $scope.model.user[$scope.editIndexWork]["region"] = $scope.workData.region;
        $scope.model.user[$scope.editIndexWork]["smonth"] = $scope.workData.smonth;
        $scope.model.user[$scope.editIndexWork]["start"] = $scope.workData.start;
        $scope.model.user[$scope.editIndexWork]["emonth"] = $scope.workData.emonth;
        $scope.model.user[$scope.editIndexWork]["end"] = $scope.workData.end;
        $scope.model.user[$scope.editIndexWork]["position"] = $scope.workData.position;
        $scope.model.user[$scope.editIndexWork]["primary"] = $scope.workData.primary;
        $scope.model.user[$scope.editIndexWork]["role"] = $scope.workData.role;

        console.log($scope.model.user);

        $scope.resetWork();
    };

    $scope.processForm1 = function () {
        // execute something
        $scope.showbutton = true;
        $scope.shownew = false;
    };

    //DEED
    $scope.formDatadeed = {};

    $scope.IsVisible = false;
    $scope.showTheFormdeed = false;
    $scope.editIndexdeed = null;

    // Get the element with id="defaultOpen" and click on it
    // document.getElementById("defaultOpen").click();


    $scope.deedsInit = function(){
        console.log("Deeds Page Initialized");
        $http.get('/api/deeds')
            .then(function (res){
                if(res.data != null)
                {
                    if(res.data.educationData != null)
                    {
                        var ourDeedData = res.data.deeds;
                        ourDeedData.forEach(function(deedElement){
                                $scope.model.deeds.push({
                                'id': $scope.model.deeds.length + 1,
                                'smonth': deedElement.startMonth,
                                'syear': deedElement.startYear,
                                'category': deedElement.deedCategory,
                                'activity': deedElement.activity,
                                'deeddes': deedElement.description
                                });
                        });
                    }
                }
            });
    }


    $scope.addNewdeed = function (category) {
        
        console.log("Adding New Deed");
        
        var postUrl = 'https://mytzone.herokuapp.com/api/deeds/';
        var localUrl = 'http://localhost:8080/api/deeds/';
        var postId = "";
        var toSend = {}
        var tmpDeed = {
                                'id': $scope.model.deeds.length + 1,
                                'smonth': this.formDatadeed.smonth,
                                'syear': this.formDatadeed.syear,
                                'category': category,
                                'activity': this.formDatadeed.activity,
                                'deeddes': this.formDatadeed.deeddes,
                                'pub':this.formDatadeed.pub,
                                'art':this.formDatadeed.art
            };
        console.log("category" + category )
        switch (category.toLowerCase()){
            case 'certificates':
                postId = "certificates"
                toSend = {
                    specificActivity:this.formDatadeed.activity,
                    description:this.formDatadeed.deeddes,
                    month:this.formDatadeed.smonth,
                    year:this.formDatadeed.syear
                }
                console.log("Certificate");
                break;
            case 'takingclasses':
                postId = "takingClasses";
                toSend = {
                    specificActivity:this.formDatadeed.activity,
                    description:this.formDatadeed.deeddes,
                    month:this.formDatadeed.smonth,
                    year:this.formDatadeed.syear
                }
                console.log("Taking Classes");
                break;
            case 'conductingclasses':
                postId = "conductingClasses"
                console.log("Conducting Classes");
                toSend = {
                    specificActivity:this.formDatadeed.activity,
                    description:this.formDatadeed.deeddes,
                    month:this.formDatadeed.smonth,
                    year:this.formDatadeed.syear
                }
                break;
            case 'mentoring':
                postId = "mentoring"
                console.log("mentoring");
                toSend = {
                    specificActivity:this.formDatadeed.activity,
                    description:this.formDatadeed.deeddes,
                    month:this.formDatadeed.smonth,
                    year:this.formDatadeed.syear
                }
                break;
            case 'writing':
                postId = "writings"
                console.log("Writing");
                toSend = {
                    publicationName:this.formDatadeed.pub,
                    specificActivity:this.formDatadeed.activity,
                    articleTitle:this.formDatadeed.deeddes,
                    month:this.formDatadeed.smonth,
                    year:this.formDatadeed.syear
                }
                break;
            case 'conferences':
                postId = "confrences"
                console.log("conferences");
                toSend = {
                    publicationName:this.formDatadeed.pub,
                    specificActivity:this.formDatadeed.activity,
                    articleTitle:this.formDatadeed.deeddes,
                    month:this.formDatadeed.smonth,
                    year:this.formDatadeed.syear
                }
                break;
            case 'Awards':
                postId = "awards"
                console.log("Awards");
                toSend = {
                    confrenceSponsor:this.formDatadeed.pub,
                    specificActivity:this.formDatadeed.activity,
                    presentationTitle:this.formDatadeed.deeddes,
                    month:this.formDatadeed.smonth,
                    year:this.formDatadeed.syear                }
                break;
            case 'recognized expertise':
                postId = "recognizedExpertise"
                console.log("recognized expertise");
                toSend = {
                        specificActivity: this.formDatadeed.activity,
                        deedDescription: this.formDatadeed.deeddes,
                        month:this.formDatadeed.smonth,
                        year:this.formDatadeed.syear
                }
                break;
            case 'patents':
                postId = "patents"
                console.log("conferences");
                toSend = {
                    specificActivity: this.formDatadeed.activity,
                    deedDescription: this.formDatadeed.deeddes,
                    month:this.formDatadeed.smonth,
                    year:this.formDatadeed.syear
                }
                break;
            case 'leisure':
                postId = "leisureTravel"
                console.log("Leisure Travel");
                toSend = {
                    specificActivity: this.formDatadeed.activity,
                    deedDescription: this.formDatadeed.deeddes,
                    month:this.formDatadeed.smonth,
                    year:this.formDatadeed.syear
                }
                break;
            case 'languages':
                postId = "languages"
                console.log("languages");
                toSend = {
                    specificActivity: this.formDatadeed.activity,
                    deedDescription: this.formDatadeed.deeddes,
                    month:this.formDatadeed.smonth,
                    year:this.formDatadeed.syear
                }
                break;
        }
        console.log(localUrl+postId);
        $http.post(localUrl+postId,toSend,{headers:{'Content-Type':'application/json'}})
            .then(function(res){
                        console.log(res)
                        if(res.status===201){

            $scope.model.deeds.push(tmpDeed);

            $scope.model.deeds = sortByKey($scope.model.deeds, "id");

            this.formDatadeed = {};
            $scope.formDatadeed = {};                
                        }               
        })
            .catch(function(err){
            console.log(err)
            $scope.model.deeds.push(tmpDeed);

            $scope.model.deeds = sortByKey($scope.model.deeds, "id");

            this.formDatadeed = {};
            $scope.formDatadeed = {};                            
                                })

        /*
        $http.post(localUrl,toSend,{headers:{'Content-Type':'application/json'}})
            .then(function(res){console.log(res)})
            .catch(function(err){console.log(err)});
            */
        
        if ($scope.editIndexdeed !== null) {
            $scope.saveDeed();
        } else {

            
        }

        $scope.showTheFormdeed = false;
        this.showTheFormdeed = false;

    };


    $scope.removedeed = function (deedId) {
        var tmpDeed = [];
        var ind = 0;

        angular.forEach($scope.model.deeds, function (selected) {
            if (deedId != selected["id"]) {
                selected["id"] = ind;
                tmpDeed.push(selected);
                ind += 1;
            }
        });

        $scope.model.deeds = tmpDeed;
    };


    // $scope.checkAlldeed = function () {
    //     if (!$scope.selectedAll) {
    //         $scope.selectedAll = true;
    //     } else {
    //         $scope.selectedAll = false;
    //     }
    //     angular.forEach($scope.model.user, function (user) {
    //         user.selected = $scope.selectedAll;
    //     });
    // };

    // $scope.ShowHidedeed = function () {
    //     //If DIV is visible it will be hidden and vice versa.
    //     $scope.showme = !$scope.showme;
    // };

    // $scope.resetFormdeed = function () {
    //     $scope.regForm = angular.copy($scope.originForm); // Assign clear state to modified form
    //     $scope.myForm.$setPristine(); // this line will update status of your form, but will not clean your data, where `registrForm` - name of form.
    // };

    $scope.getTemplatedeed= function (deed) {
        if (deed.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.resetdeed = function () {
        $scope.model.selected = {};
        $scope.editIndexdeed = null;
        $scope.formDatadeed = {};
    };

    $scope.editDeed = function (deedId) {
        $scope.editDeedId = deedId;
        $scope.formDatadeed = {};

        angular.forEach($scope.model.deeds, function (selected) {
            if (deedId == selected["id"]) {
                $scope.formDatadeed = selected;
            }
        });

        this.showTheFormdeed = !this.showTheFormdeed;
        $scope.showTheFormdeed = this.showTheFormdeed;

        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }
        document.getElementById($scope.formDatadeed.category).style.display = "block";
    };

    $scope.openDeed = function (event, deed) {
        var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(deed).style.display = "block";
            event.currentTarget.className += " active";

            if(document.getElementById('defaultOpen') !== null){
                document.getElementById("defaultOpen").click();
            }
        };

        // Get the element with id="defaultOpen" and click on it
        // document.getElementById("defaultOpen").click();

    $scope.setDefaultDeed = function () {
        $scope.openDeed(null, "certificates");
        document.getElementById("defaultOpen").click();
    };

    $scope.setCategorydeed = function (category) {
        console.log(category);
        $scope.formDatadeed.category = category;
    };

    $scope.saveDeed = function () {
        
        console.log("Inside save deed");
        
        
        $scope.model.deeds[$scope.editIndexdeed] = angular.copy($scope.formDatadeed);
        $scope.model.deeds[$scope.editIndexdeed]["id"] = $scope.editIndexdeed;
        $scope.model.deeds[$scope.editIndexdeed]["smonth"] = $scope.formDatadeed.smonth;
        $scope.model.deeds[$scope.editIndexdeed]["syear"] = $scope.formDatadeed.syear;
        $scope.model.deeds[$scope.editIndexdeed]["category"] = $scope.formDatadeed.category;
        $scope.model.deeds[$scope.editIndexdeed]["activity"] = $scope.formDatadeed.activity;
        $scope.model.deeds[$scope.editIndexdeed]["deeddes"] = $scope.formDatadeed.deeddes;
        $scope.model.deeds[$scope.editIndexdeed]["pub"] = $scope.formDatadeed.pub;
        $scope.model.deeds[$scope.editIndexdeed]["art"] = $scope.formDatadeed.art;
        $scope.resetdeed();
    };

    $scope.processForm1deed = function () {
        // execute something
        $scope.showbutton = true;
        $scope.shownew = false;
    };

//Skills Controller

    $scope.personalDetailsSkills = [];
    $scope.reverseSortSkills = false;
    $scope.addNewSkill = function(){

        $scope.personalDetailsSkills = sortByKey($scope.personalDetailsSkills, "ind");
        $scope.personalDetailsSkills.push({
            'category': "",
            'software': "",
            'vendor': "",
            'linkedin': "",
            'proficiency': "",
            'year': "",
            'formal': "",
            'usage': "",
            'ind': $scope.personalDetailsSkills.length
        });

        console.log($scope.personalDetailsSkills);
    };

    $scope.removeSkills = function(){
        var newDataList=[];
        $scope.selectedAll = false;
        angular.forEach($scope.personalDetailsSkills, function(selected){
            if(!selected.selected){
                newDataList.push(selected);
            }
        });
        $scope.personalDetailsSkills = newDataList;
    };

    $scope.checkAllSkills = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.personalDetailsSkills, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };

///ToolsController
    $scope.personalDetailsTools = [];
    $scope.reverseSortTools = false;
    $scope.addNewtools = function(){
        $scope.personalDetailsTools = sortByKey($scope.personalDetailsTools, "ind");
        $scope.personalDetailsTools.push({
            'category': "",
            'software': "",
            'vendor': "",
            'linkedin': "",
            'proficiency': "",
            'year': "",
            'formal': "",
            'usage': "",
            'ind': $scope.personalDetailsTools.length
        });

        console.log($scope.personalDetailsTools);

    };

    $scope.removeTools = function(){
        var newDataList=[];
        $scope.selectedAll = false;
        angular.forEach($scope.personalDetailsTools, function(selected){
            if(!selected.selected){
                newDataList.push(selected);
            }
        });
        $scope.personalDetailsTools = newDataList;
    };

    $scope.checkAllTools = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.personalDetailsTools, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };
    }]);

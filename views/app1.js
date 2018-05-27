$(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});
// var Highcharts = require('highcharts');
// import Highcharts from '../highcharts';

// Load module after Highcharts is loaded
//require('highcharts/modules/exporting')(Highcharts);


var app = angular.module('formlyApp', ['ui.router', 'chart.js']).run(['$rootScope', function($rootScope) {
    $rootScope.concessionLoadingScreen = true;
}])

//Building A Custom Service For Authentication
angular.module('formlyApp').service('authentication', authentication).run(['$rootScope', function($rootScope) {
    $rootScope.concessionLoadingScreen = true;
}]);
authentication.$inject = ['$window'];

function authentication($window) {
    var saveToken = function(token) {
        $window.localStorage['my-t-me'] = token;
    };
    var getToken = function() {
        return $window.localStorage['my-t-me'];
    };
    var logout = function() {
        $window.localStorage.removeItem('my-t-me');
    };
    var login = function(token) {
        saveToken(token);
    };
    var isLoggedIn = function() {
        var token = getToken()
        if (token) {
            payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date. now() / 1000;
        } else {
            return false;
        }
    };
    var test = function() {
        alert("Authentication Ran :)");
    };
    return {
        saveToken: saveToken,
        getToken: getToken,
        logout: logout,
        login: login,
        isLoggedIn: isLoggedIn,
        test: test
    };
}

//Building A HTTP Interceptor to add Authentication Values
angular.module('formlyApp').service('authenticationAdder', authenticationAdder).run(['$rootScope', function($rootScope) {
    $rootScope.concessionLoadingScreen = true;
}]);
authenticationAdder.$inject = ['authentication'];

function authenticationAdder(authentication) {
    var request = function(config) {
        console.log("HTTP REQUEST RAN");
        if (authentication.isLoggedIn()) {
            config.headers.Authorization = 'Bearer ' + authentication.getToken()
        }
        return config;
    }
    return {
        'request': request
    }
}

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(authenticationAdder);
}])


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('base', {
            url: '/base',
            templateUrl: '/pages/base',
            controller: 'Controller'
        })
        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('base.login', {
            url: '/login',
            templateUrl: '/pages/login'
        })

        //Url for resiterations
        .state('base.registration', {
            url: '/registration',
            templateUrl: '/pages/registration',
        })

        // url will be /form/interests
        .state('base.educate', {
            url: '/educate',
            templateUrl: '/sub/education',
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
        })

        .state('base.chart', {
            url: '/chart',
            templateUrl: '/sub/chart'
        })
        .state('test', {
            url: '/test',
            templateUrl: '/test'
        })


    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/base/login');
});




app.controller("Controller", ['$scope', '$http', '$location', 'authentication', function($scope, $http, $location, authentication) {


    var year = 2021;
    var till = 1900;
    var range = [];

    var options = "";
    for (var y = year; y >= till; y--) {
        range.push(y);
    }
    $scope.years = range;

    //Config Values
    var config = {
        headers: { headers: { 'Content-Type': 'application/json' } },
        CERTIFICATES: 'certificates',
        TAKING_CLASSES: 'takingClasses',
        CONDUCTING_CLASSES: 'conductingClasses',
        MENTORING: 'mentoring',
        WRITINGS: 'writings',
        CONFERENCES: 'conferences',
        AWARDS: 'awards',
        RECOGNIZED_EXPERTISE: 'recognizedExpertise',
        PATENTS: 'patents',
        LANGUAGES: 'languages',
        LEISURE_TRAVEL: 'leisureTravel',
        TOOLS: 'tools',
        SKILLS: 'skills',
        POINTS: 'points'
    };

    var colorHex = {
        EMRALD: '#2ecc71',
        CARROT: '#e67e22',
        AMETHIEST: '#9b59b6',
        PETER: '#3498db'
    };
    var colorSchemas = {
        BASIC: 'EMRALD',
        INTER: 'CARROT',
        ADVANCED: 'PETER',
        EXPERT: 'AMETHIEST'
    }

    //Common Functions

    var getMaximumIndex = function(detailsObject) {
        var max = 0;
        detailsObject.forEach(function(each) {
            if (each.ind !== null) {
                if (max < each.ind) {
                    max = each.ind;
                };
            };
        });
        return max;
    }

    var getIndex = function(detailsObject, indexValue) {
        for (var i = 0; i < detailsObject.length; i++) {
            if (detailsObject[i].ind === indexValue) {
                return i;
            }
        }
    }

    var setBoolean = function(input) {
        if (input.toLowerCase() === 'no') {
            return false;
        } else {
            return true;
        }
    }

    var getFromBoolean = function(input) {
        if (input) {
            return "Yes";
        } else {
            return "No";
        }
    };

    var remover = function(arayObject, deedName) {
        console.log("Inside the Remover");
        console.log(arayObject);
        var ids = [];
        arayObject.forEach(function(eachObject) {
            console.log((eachObject.selected));
            if (eachObject.selected) {
                ids.push(eachObject.id);
            }
        });
        var queryParam = "";
        console.log("Ids Length");
        console.log(ids.length);
        if (ids.length === 0) {
            return;
        }
        for (i = 0; i < ids.length - 1; i++) {
            queryParam = queryParam + 'ids=' + ids[i] + '&';
        }

        queryParam = queryParam + 'ids=' + ids[ids.length - 1];
        var url = '/api/' + deedName;
        url = url + '?' + queryParam;
        console.log("URL");
        console.log(url);
        $http.delete(url).then(function(response) {
            console.log(response);
        }, function(response) {
            console.log(response);
        });
    }

    Array.prototype.extend = function(newArray) {
        newArray.forEach(function(element) {
            console.log(element.ind);
            this.push(element);
        }, this);
    }


    $scope.removeSkills = function() {
        remover($scope.personalDetailsSkills, "skills");
        var newDataList = [];
        $scope.selectedAll = false;
        angular.forEach($scope.personalDetailsSkills, function(selected) {
            if (!selected.selected) {
                newDataList.push(selected);
            }
        });
        $scope.personalDetailsSkills = newDataList;
    };

    // LOGIN
    $scope.login = {}

    $scope.loginInit = function() {
        if (authentication.isLoggedIn()) {
            $location.path("/base/educate");
        }
    }

    $scope.loginUser = function() {
        loginJson = {
            "userName": $scope.login.user,
            "password": $scope.login.password
        }
        console.log(loginJson);
        $http.post('/login', loginJson, config.headers).then(function(response) {
            console.log("Success Response");
            console.log(response);
            if (response.data.token) {
                var token = response.data.token
                authentication.saveToken(token);
            }
            console.log("Trying to Set the Path");
            $location.path("/base/educate");
        }, function(response) {
            alert("Incorrect UserName or Password - Please try again");
            console.log("Failure Response");
            console.log(response);
        });
    }

    $scope.checkEmail = function() {

        var email = document.getElementById('username');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email.value)) {
            email.focus;
            document.getElementById('username').style.borderColor = "red";
            return false;
        } else {
            document.getElementById('username').style.borderColor = "#a6a6a6";
            return true;
        }

    };

    //SCope Logout
    $scope.Logout = function() {
        authentication.logout()
        $location.path('/base/login');
    }
    //REGISTRATION
    $scope.registration = {}

    $scope.registerUser = function() {
        //console.log($scope.registration);
        //JSON For Registration
        registerUser = {
            "userName": $scope.registration.username,
            "lastName": $scope.registration.lastname,
            "firstName": $scope.registration.firstname,
            "firstYear": $scope.registration.startyear,
            "dateOfBirth": $scope.registration.dateofBirth,
            "email": $scope.registration.email,
            "password": $scope.registration.password
        }
        console.log(registerUser);
        //Calling Registration
        //Sending JSON to API - /signUp
        $http.post('/signUp', registerUser, config.headers).then(function(response) {
            authentication.saveToken(response.data.token);
            alert("User Creation Done");
            $location.path("/base/educate");
        }, function(response) {
            alert("Unable To Register Now");
        });

    }

    // EDUCATION
    $scope.eduDetails = [];
    $scope.reverseSort = false;

    function sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 0 : 1));
        });
    }

    $scope.eduInit = function() {
        //Get Existing Data From the Database

        $http.get('/api/education').then(function(response) {
            //Positive Response
            $scope.eduDetails = [];
            console.log("Positive Init");
            var responseData = response.data;
            var responseArray = angular.fromJson(responseData["deedData"]);
            //Checking the Start and End Years
            angular.forEach(responseArray, function(eachResponse, index) {
                responseArray[index].start = parseInt(responseArray[index].start)
                responseArray[index].end = parseInt(responseArray[index].end)
            });
            console.log("This is Repsonse");
            console.log(responseArray);
            $scope.eduDetails.extend(responseArray);
            console.log("This EduDEtails");
            console.log($scope.eduDetails);
            addNewBlankEduField();
        }, function(response) {
            //Negative Response
            console.log("Negative Init");
            console.log(response);
        });
    };

    var addNewBlankEduField = function() {
        $scope.eduDetails = sortByKey($scope.eduDetails, "ind");
        //var ind = getIndex($scope.eduDetails);
        var ind = getMaximumIndex($scope.eduDetails);
        $scope.eduDetails.push({
            'school': "",
            'field': "",
            'degree': "",
            'start': "",
            'end': "",
            'status': "",
            'honor': "",
            'id': "",
            'ind': ind + 1
        });
    }

    $scope.addNewEdu = function() {

        var eduListLength = $scope.eduDetails.length;
        if (eduListLength > 0) {
            console.log("Grater Than 0");
            var latestIndex = getMaximumIndex($scope.eduDetails);
            var latestEduDetail = $scope.eduDetails.find(function(eduDetail) {
                return eduDetail.ind === latestIndex;
            });
            console.log(latestEduDetail);
            var toSend = {
                "schoolUniversityName": latestEduDetail.school,
                "majorFiedOfStudy": latestEduDetail.field,
                "typeOfDegree": latestEduDetail.degree,
                "startYear": latestEduDetail.start,
                "endYear": latestEduDetail.end,
                "degreeProgramStatus": latestEduDetail.status,
            };

            if (latestEduDetail.honor !== "") {
                toSend["honors"] = latestEduDetail.honor;
            }
            var deedURL = "/api/deeds/"
            var v2testURL = "/v2Post/"
            console.log(toSend)
            $http.post('/api/deeds/education', toSend, config.headers).then(function(response) {

                //Success handling

                console.log(response.data);
                $scope.eduDetails[$scope.eduDetails.length - 1]['id'] = response.data.dbid;
                $scope.eduDetails[$scope.eduDetails.length - 1]['timestamp'] = response.data.timestamp;
                addNewBlankEduField();
                console.log($scope.eduDetails);
            }, function(response) {
                //Failure Handing
                console.log(response);
                alert("Sorry Could Not Add to Database");
            });
            //addNewBlankEduField();
        } else {
            console.log("0");
            addNewBlankEduField();
        }
    };

    $scope.removeEdu = function() {
        remover($scope.eduDetails, "education");
        var newDataList = [];
        $scope.selectedAll = false;
        angular.forEach($scope.eduDetails, function(selected) {
            if (!selected.selected) {
                newDataList.push(selected);
            }
        });
        $scope.eduDetails = newDataList;
    };

    $scope.checkAllEdu = function() {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.eduDetails, function(eduDetails) {
            eduDetails.selected = $scope.selectedAll;
        });
    };

    $scope.validate = function() {
        var start = document.getElementById("start");
        var end = document.getElementById("end");

        if (end.value < start.value) {
            document.getElementById('end').style.borderColor = "red";
            return false;
        } else {
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

    $scope.addNewWork = function() {
        if ($scope.editIndexWork !== null) {
            $scope.saveWork();
        } else {
            var tem = this.workData;
            console.log(tem);
            console.log($scope);
            var toSend = {
                "operationsResponsibilities": {
                    "OR_selectLocations": tem.q1,
                    "OR_selectEquipment": tem.q2,
                    "OR_selectManagingLabor": tem.q3,
                    "OR_determineProcessing": tem.q4,
                },
                "criticalThinking": {
                    "CT_requiredMetoFormGoals": tem.q5,
                    "CT_requiredSystematicApproach": tem.q6,
                    "CT_requiredInquisitive": tem.q7,
                    "CT_requiredPrioritize": tem.q8,
                    "CT_requiredConfidence": tem.q9
                },
                "systemAndOperationInnovation": {
                    "SOI_evaluateApplications": tem.q10,
                    "SOI_selectApplicationsAndSolutions": tem.q11,
                    "SOI_specificApplicationsAndSolutions": tem.q12,
                    "SOI_buildApplicationsAndSolutions": tem.q13,
                    "SOI_accessBenifitCostValueSolutions": tem.q14
                },
                "employerSectionOfFocus": tem.esector,
                "employerOrganizationName": tem.ename,
                "locationRegion": tem.region,
                "startYear": String(tem.syear),
                "endYear": String(tem.eyear),
                "startMonth": tem.smonth,
                "endMonth": tem.emonth,
                "positionDescription": tem.position,
                "primaryFunction": tem.primary,
                "teamSize": tem.team,
                "multiDisciplinaryMakeup": tem.multidis,
                "multiCulturalMakeup": tem.multicul,
                "paidUnpaid": tem.paid,
                "role": tem.role

            };
            console.log("to send");
            console.log(toSend);
            $http.post('/api/deeds/workExperience', toSend, config.headers).then(function(response) {
                //Positive
                //alert("Worked Added");
                console.log("Worked");
            }, function(response) {
                //Negative
                alert("Didn't Add");
                console.log(response);
            });


            tem["id"] = $scope.model.user.length + 1;
            $scope.model.user.unshift(tem);

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

    $scope.setSameEmployerTrue = function() {
        $scope.workData["ename"] = $scope.model.recent["ename"];
    };

    $scope.setSameEmployerFalse = function() {
        $scope.workData = {};
    };

    $scope.removeWork = function(index) {
        var tmpUser = [];
        var ind = 0;
        var tmpFormList = [];

        angular.forEach($scope.workDataList, function(selected) {
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

    $scope.checkAllWork = function() {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.model.user, function(user) {
            user.selected = $scope.selectedAll;
        });
    };

    // $scope.processFormWork = function () {
    //     // execute something
    //     $scope.showTheFormWork = !$scope.showTheFormWork;
    // };

    $scope.ShowHideWork = function() {
        //If DIV is visible it will be hidden and vice versa.
        $scope.showme = !$scope.showme;
    };

    $scope.resetFormWork = function() {
        $scope.regForm = angular.copy($scope.originForm); // Assign clear state to modified form
        $scope.myForm.$setPristine(); // this line will update status of your form, but will not clean your data, where `registrForm` - name of form.
    };

    $scope.getTemplateWork = function(user) {
        if (user.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.resetWork = function() {
        $scope.model.selected = {};
        $scope.editIndexWork = null;
        $scope.workData = {};
    };

    $scope.editWork = function(index) {
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

    $scope.questionWork = function(index) {
        $scope.editIndexWork = index;
        $scope.workData = $scope.workDataList[index];

        this.showQuestionsWork = !this.showQuestionsWork;
        $scope.showQuestionsWork = this.showQuestionsWork;

        console.log($scope.showQuestionsWork);
        console.log(this.showQuestionsWork);

        return true;
    };

    $scope.saveWork = function() {
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

    $scope.processForm1 = function() {
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

    //Adding A Blank Deed
    var addBlankDeed = function() {

    };


    $scope.addNewdeed = function(category) {
        console.log("Submit Clicked");
        console.log("CATEGORY check");
        console.log(category);
        var formDatadeed = $scope.formDatadeed;
        console.log($scope.formDatadeed);
        //Loading the Common JSON parameters now
        var toSend = {
            specificActivity: this.formDatadeed.activity,
            month: this.formDatadeed.smonth,
            year: this.formDatadeed.syear
        }

        switch (category) {
            case config.WRITINGS:
                toSend["PublicationName"] = this.formDatadeed.publication;
                toSend["ArticleTitle"] = this.formDatadeed.deeddes;
                break;
            case config.CONFERENCES:
                // alert("Inside COnfrences");
                toSend["ConferenceSponsor"] = this.formDatadeed.publication;
                toSend["PresentationTitle"] = this.formDatadeed.deeddes;
                break;
            case config.AWARDS:
                toSend["AwardSponsor"] = this.formDatadeed.publication;
                toSend["AwardTitle"] = this.formDatadeed.deeddes;
                break;
            default:
                toSend['description'] = this.formDatadeed.deeddes;
                break;
        }
        console.log("Trying to Print Sending JSON");
        console.log(toSend);
        //Sending http POST request to the backend
        $http.post('/api/deeds/' + category, toSend, config.headers).then(function(response) {
            //Positive
            // alert("Worked Added");
            console.log("Worked");
        }, function(response) {
            //Negative
            alert("Didn't Add");
            console.log(response);
        });


        if ($scope.editIndexdeed !== null) {
            $scope.saveDeed();
        } else {

            var tmpDeed = {
                'id': $scope.model.deeds.length + 1,
                'smonth': this.formDatadeed.smonth,
                'syear': this.formDatadeed.syear,
                'category': category,
                'activity': this.formDatadeed.activity,
                'deeddes': this.formDatadeed.deeddes,
                'pub': this.formDatadeed.pub,
                'art': this.formDatadeed.art
            };
            $scope.model.deeds.push(tmpDeed);

            $scope.model.deeds = sortByKey($scope.model.deeds, "id");

            this.formDatadeed = {};
            //$scope.formDatadeed = {};
        }

        $scope.showTheFormdeed = false;
        this.showTheFormdeed = false;

    };


    $scope.removedeed = function(deedId) {
        var tmpDeed = [];
        var ind = 0;

        angular.forEach($scope.model.deeds, function(selected) {
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


    //Adding SCore Section


    $scope.getTemplatedeed = function(deed) {
        if (deed.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.resetdeed = function() {
        $scope.model.selected = {};
        $scope.editIndexdeed = null;
        $scope.formDatadeed = {};
    };

    $scope.editDeed = function(deedId) {
        $scope.editDeedId = deedId;
        $scope.formDatadeed = {};

        angular.forEach($scope.model.deeds, function(selected) {
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

    $scope.openDeed = function(event, deed) {
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


        if (event) {
            event.currentTarget.className += " active";
        } else {
            if (document.getElementById('defaultOpen') !== null) {
                document.getElementById("defaultOpen").click();
            }
        }

    };

    // Get the element with id="defaultOpen" and click on it
    // document.getElementById("defaultOpen").click();

    $scope.setDefaultDeed = function() {
        $scope.openDeed(null, "certificates");
        document.getElementById("defaultOpen").click();
    };

    $scope.setCategorydeed = function(category) {
        console.log(category);
        $scope.formDatadeed.category = category;
    };

    $scope.saveDeed = function() {
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

    $scope.processForm1deed = function() {
        // execute something
        $scope.showbutton = true;
        $scope.shownew = false;
    };

    //Common for SKills and Tools

    $scope.dropDownColorSetter = function(value, proficiencyType) {
        var returnValue;
        if (value === "" || value === undefined) {
            returnValue = "None";
        } else {
            switch (proficiencyType) {
                case 'basic':
                    returnValue = colorHex[colorSchemas.BASIC];
                    break;
                case 'inter':
                    returnValue = colorHex[colorSchemas.INTER];
                    break;
                case 'advanced':
                    returnValue = colorHex[colorSchemas.ADVANCED];
                    break;
                case 'expert':
                    returnValue = colorHex[colorSchemas.EXPERT];
                    break;
            }
        }
        // console.log(returnValue);
        return returnValue;
    }
    var skillsToolsJSONBuilder = function(receivedObject) {
        var returnJSON = {
            'category': receivedObject.category,
            'software': receivedObject.software,
            'vendor': receivedObject.vendor,
            'linkedin': receivedObject.linkedin,
            'basicyear': "",
            'interyear': "",
            'advancedyear': "",
            'expertyear': "",
            'formal': getFromBoolean(receivedObject.formal),
            'usage': getFromBoolean(receivedObject.usage),
            'ind': receivedObject.ind,
            'id': receivedObject.id
        }
        returnJSON[receivedObject.proficiencyType + 'year'] = receivedObject.proficiencyYear;
        return returnJSON;

    }

    //Skills Controller

    $scope.personalDetailsSkills = [];
    $scope.reverseSortSkills = false;

    $scope.skillsInit = function() {
        $http.get('/api/skills').then(function(response) {
            //Positive Response
            $scope.personalDetailsSkills = [];
            console.log("Positive Init skills");
            var responseData = response.data;
            var responseArray = angular.fromJson(responseData["deedData"]);
            console.log("This is Repsonse Unaltered");
            console.log(responseData);
            console.log("This is Repsonse");
            console.log(responseArray);
            responseArray.forEach(function(eachResponse) {
                $scope.personalDetailsSkills.push(skillsToolsJSONBuilder(eachResponse));
            })
            addNewBlankSkills();
        }, function(response) {
            //Negative Response
            console.log("Negative Init");
            console.log(response);
        });
    };

    $scope.addNewSkill = function() {
        var skillListLength = $scope.personalDetailsSkills.length;
        if (!(skillListLength > 0)) {
            console.log("Blank Tools List");
            addNewBlankSkills();
        } else {
            console.log("Data Present in Tools List");
            var latestIndex = getMaximumIndex($scope.personalDetailsSkills);
            var latestSkillDetail = $scope.personalDetailsSkills.find(function(skillDetail) {
                return skillDetail.ind === latestIndex;
            });
            var toSend = {
                category: latestSkillDetail.category,
                softwareDeviceName: latestSkillDetail.software,
                vendorDistributor: latestSkillDetail.vendor,
                numberOfLinkedEndorsments: latestSkillDetail.linkedin,
                formalCertification: setBoolean(latestSkillDetail.formal),
                usagein3Years: latestSkillDetail.usage
            }
            var proficiencyType, proficiencyYear;
            if (latestSkillDetail.basicyear !== "") {
                proficiencyType = "basic";
                proficiencyYear = latestSkillDetail.basicyear;
            } else if (latestSkillDetail.interyear) {
                proficiencyType = "inter";
                proficiencyYear = latestSkillDetail.interyear;
            } else if (latestSkillDetail.advancedyear) {
                proficiencyType = "advanced";
                proficiencyYear = latestSkillDetail.advancedyear;
            } else if (latestSkillDetail.expertyear) {
                proficiencyType = "expert";
                proficiencyYear = latestSkillDetail.expertyear;
            }
            toSend["proficiencyType"] = proficiencyType;
            toSend["proficiencyYear"] = proficiencyYear;
            console.log(toSend);
            $http.post('/api/deeds/skills', toSend, config.headers).then(function(response) {
                //Success handling
                console.log(response.data);
                console.log($scope.personalDetailsSkills);
                var currentIndex = getIndex($scope.personalDetailsSkills, latestIndex);
                console.log(currentIndex);
                $scope.personalDetailsSkills[currentIndex]['id'] = response.data.dbid;
                $scope.personalDetailsSkills[currentIndex]['timestamp'] = response.data.timestamp;
                addNewBlankSkills();
            }, function(response) {
                //Failure Handing
                console.log(response);
                alert("Sorry Could Not Add to Database");
            });
        }
    };


    var addNewBlankSkills = function() {
        console.log("Being Called");
        $scope.personalDetailsSkills = sortByKey($scope.personalDetailsSkills, "ind");
        $scope.personalDetailsSkills.push({
            'category': "",
            'software': "",
            'vendor': "",
            'linkedin': "",
            'basicyear': "",
            'interyear': "",
            'advancedyear': "",
            'expertyear': "",
            'formal': "",
            'usage': "",
            'id': "",
            'ind': getMaximumIndex($scope.personalDetailsSkills) + 1
        });
        console.log($scope.personalDetailsSkills);
    }

    $scope.checkAllSkills = function() {
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


    $scope.toolsInit = function() {
        $http.get('/api/tools').then(function(response) {
            //Positive Response
            $scope.personalDetailsTools = [];
            console.log("Positive Init");
            var responseData = response.data;
            var responseArray = angular.fromJson(responseData["deedData"]);
            console.log("This is Repsonse Unaltered");
            console.log(responseData);
            console.log("This is Repsonse");
            console.log(responseArray);
            //$scope.eduDetails.extend(responseArray);
            responseArray.forEach(function(eachResponse) {
                $scope.personalDetailsTools.push(skillsToolsJSONBuilder(eachResponse));
            })
            addNewBlankTools();
        }, function(response) {
            //Negative Response
            console.log("Negative Init");
            console.log(response);
        });
    };

    var addNewBlankTools = function() {
        console.log("Being Called");
        $scope.personalDetailsTools = sortByKey($scope.personalDetailsTools, "ind");
        $scope.personalDetailsTools.push({
            'category': "",
            'software': "",
            'vendor': "",
            'linkedin': "",
            'basicyear': "",
            'interyear': "",
            'advancedyear': "",
            'expertyear': "",
            'year': "",
            'formal': "",
            'usage': "",
            "id": "",
            'ind': getMaximumIndex($scope.personalDetailsSkills) + 1
        });
    }

    $scope.skillsClearDropDowns = function(value, index) {
        toolsSkillsClearDropDowns(value, index, "skills");
    };

    $scope.toolsClearDropDowns = function(value, index) {
        toolsSkillsClearDropDowns(value, index, "tools");
    };

    var toolsSkillsClearDropDowns = function(value, index, page) {
        id = event.target.id;
        console.log("Inside our cleaner");
        console.log(value);
        if (value === "" || value === undefined) {
            return;
        }
        var proficiencyObject;
        if (page === 'skills') {
            proficiencyObject = $scope.personalDetailsSkills;
        } else if (page === 'tools') {
            proficiencyObject = $scope.personalDetailsTools;
        }
        switch (id) {
            case 'basicyear':
                /*
                    document.getElementById('interyear').value = "";
                    document.getElementById('advancedyear').value = "";
                    document.getElementById('expertyear').value = "";
                */
                proficiencyObject[index].interyear = "";
                proficiencyObject[index].advancedyear = "";
                proficiencyObject[index].expertyear = "";
                break;
            case 'interyear':
                /*
                document.getElementById('basicyear').value = "";
                document.getElementById('advancedyear').value = "";
                document.getElementById('expertyear').value = "";
                */
                proficiencyObject[index].basicyear = "";
                proficiencyObject[index].advancedyear = "";
                proficiencyObject[index].expertyear = "";
                break;
            case 'advancedyear':
                /*
                    document.getElementById('basicyear').value = "";
                    document.getElementById('interyear').value = "";
                    document.getElementById('expertyear').value = "";
                */
                proficiencyObject[index].interyear = "";
                proficiencyObject[index].basicyear = "";
                proficiencyObject[index].expertyear = "";
                break;
            case 'expertyear':
                /*
                    document.getElementById('basicyear').value = "";
                    document.getElementById('interyear').value = "";
                    document.getElementById('advancedyear').value = "";
                */
                proficiencyObject[index].basicyear = "";
                proficiencyObject[index].interyear = "";
                proficiencyObject[index].advancedyear = "";
                break;
        };
    }
    /*
    $scope.addNewtools = function(){
        console.log("Length Of Tool Details");
        var toolListLength = $scope.personalDetailsTools.length;
        console.log(toolListLength);
        if(toolListLength>0) {
            var latestToolDetails = $scope.personalDetailsTools.find(function(toolDetail){
                console.log("Each Object");
                console.log(toolDetail);
                return toolDetail.ind === toolListLength;
            });
            console.log("Latest Ones");
            console.log(latestToolDetails);
            addNewBlankTools();
        } else {
            console.log("Empty Call");
            addNewBlankTools();
        }

    };*/





    $scope.addNewtools = function() {
        console.log("add new tools from app1||||||||||||||||");
        var toolListLength = $scope.personalDetailsTools.length;
        if (!(toolListLength > 0)) {
            console.log("Blank Tools List");
            addNewBlankTools();
        } else {
            console.log("Data Present in Tools List");
            var latestIndex = getMaximumIndex($scope.personalDetailsTools);
            console.log("latest Ind");
            console.log(latestIndex);
            var latestToolDetail = $scope.personalDetailsTools[toolListLength - 1]
            // find(function(toolDetail){
            //     return toolDetail.ind === latestIndex;
            // });
            console.log("latest tool detail");
            console.log(latestToolDetail);
            var toSend = {
                category: latestToolDetail.category,
                softwareDeviceName: latestToolDetail.software,
                vendorDistributor: latestToolDetail.vendor,
                numberOfLinkedEndorsments: latestToolDetail.linkedin,
                formalCertification: setBoolean(latestToolDetail.formal),
                usagein3Years:latestToolDetail.usage
            }
            var proficiencyType, proficiencyYear;
            if (latestToolDetail.basicyear !== "") {
                proficiencyType = "basic";
                proficiencyYear = latestToolDetail.basicyear;
            } else if (latestToolDetail.interyear) {
                proficiencyType = "inter";
                proficiencyYear = latestToolDetail.interyear;
            } else if (latestToolDetail.advancedyear) {
                proficiencyType = "advanced";
                proficiencyYear = latestToolDetail.advancedyear;
            } else if (latestToolDetail.expertyear) {
                proficiencyType = "expert";
                proficiencyYear = latestToolDetail.expertyear;
            }
            toSend["proficiencyType"] = proficiencyType;
            toSend["proficiencyYear"] = proficiencyYear;
            console.log(toSend);
            $http.post('/api/deeds/tools', toSend, config.headers).then(function(response) {
                //Success handling
                console.log(response.data);
                console.log($scope.personalDetailsTools);
                var currentIndex = getIndex($scope.personalDetailsTools, latestIndex);
                console.log(currentIndex);
                $scope.personalDetailsTools[currentIndex]['id'] = response.data.dbid;
                $scope.personalDetailsTools[currentIndex]['timestamp'] = response.data.timestamp;
                addNewBlankTools();
            }, function(response) {
                //Failure Handing
                console.log(response);
                alert("Sorry Could Not Add to Database");
            });
        }
    };

    $scope.removeTools = function() {
        console.log("From Inside the Tools Function")
        console.log($scope.personalDetailsTools);
        remover($scope.personalDetailsTools, "tools");
        var newDataList = [];
        $scope.selectedAll = false;
        angular.forEach($scope.personalDetailsTools, function(selected) {
            if (!selected.selected) {
                newDataList.push(selected);
            }
        });
        $scope.personalDetailsTools = newDataList;
    };

    $scope.checkAllTools = function() {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.personalDetailsTools, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };
    //SCore Cmputing Engine
    $scope.computedScores = [];
    $scope.educationScore = 0;
    $scope.membershipScore = 0;
    $scope.methodsScore = 0;
    $scope.operationalScore = 0;
    $scope.proficiencyScore = 0;
    //SCore COmputing Engine



    $scope.computedScores = [];

    $scope.scoreInitialized;
    $scope.scoreRunner = function() {

        console.log('%c You will get your score here ', 'background: #222; color: #bada55');
        console.log("I run when page is loaded!");
        $http.get('/api/scores').then(function(response) {
            //Positive Response
            console.log(response["data"]);

            $scope.fulltStem = 0
            $scope.educationScore = response["data"]["My_T_Stem"]["Education, Briefings, and Teaching"];
            $scope.fulltStem = $scope.fulltStem + $scope.educationScore
            $scope.membershipScore = response["data"]["My_T_Stem"]["Memberships, Authorships, and Recognitions"];
            $scope.fulltStem = $scope.fulltStem + $scope.membershipScore
            $scope.methodsScore = response["data"]["My_T_Stem"]["Methods/Skills Proficiency"];
            $scope.fulltStem = $scope.fulltStem + $scope.methodsScore;
            $scope.operationalScore = response["data"]["My_T_Stem"]["Operations responsibilities and expertise"];
            $scope.fulltStem = $scope.fulltStem + $scope.operationalScore
            $scope.proficiencyScoreBefore = $scope.proficiencyScore;
            $scope.proficiencyScore = response["data"]["My_T_Stem"]["Software/Device Proficiency"];
            $scope.fulltStem = $scope.fulltStem + $scope.proficiencyScore
            //T-top
            $scope.fulltTop = 0;
            $scope.communicationScore = response["data"]["My_T_Top"]["Communications"];
            $scope.fulltTop = $scope.fulltTop + $scope.communicationScore;
            $scope.criticalScore = response["data"]["My_T_Top"]["Critical Thinking"];
            $scope.fulltTop = $scope.fulltTop + $scope.criticalScore;
            $scope.empathyScore = response["data"]["My_T_Top"]["Empathy"];
            $scope.fulltTop = $scope.fulltTop + $scope.empathyScore;
            $scope.globalUnderstandScore = response["data"]["My_T_Top"]["Global understandng"];
            $scope.fulltTop = $scope.fulltTop + $scope.globalUnderstandScore;
            $scope.networkingScore = response["data"]["My_T_Top"]["Networking"];
            $scope.fulltTop = $scope.fulltTop + $scope.networkingScore;
            $scope.designScore = response["data"]["My_T_Top"]["Organizational design"];
            $scope.fulltTop = $scope.fulltTop + $scope.designScore;
            $scope.perspectiveScore = response["data"]["My_T_Top"]["Perspective"];
            $scope.fulltTop = $scope.fulltTop + $scope.perspectiveScore;
            $scope.managementScore = response["data"]["My_T_Top"]["Project management"];
            $scope.fulltTop = $scope.fulltTop + $scope.managementScore;
            $scope.teamworkScore = response["data"]["My_T_Top"]["Teamwork"];
            $scope.fulltTop = $scope.fulltTop + $scope.teamworkScore;
            $scope.fulltScore = $scope.fulltTop + $scope.fulltStem;

            if ($scope.scoreInitialized != 1) {
                console.log("Tracking Variables Initialized!");
                //Variables to hold previous score values and initialize to current values
                $scope.fulltStemPrevious = $scope.fulltStem;
                $scope.fulltTopPrevious = $scope.fulltTop;
                $scope.fulltScorePrevious = $scope.fulltScore;
                $scope.educationScorePrevious = $scope.educationScore;
                $scope.membershipScorePrevious = $scope.membershipScore;
                $scope.methodsScorePrevious = $scope.methodsScore;
                $scope.operationalScorePrevious = $scope.operationalScore;
                $scope.proficiencyScorePrevious = $scope.proficiencyScore;

                $scope.communicationScorePrevious = $scope.communicationScore;
                $scope.criticalScorePrevious = $scope.criticalScore;
                $scope.empathyScorePrevious = $scope.empathyScore;
                $scope.globalUnderstandScorePrevious = $scope.globalUnderstandScore;
                $scope.networkingScorePrevious = $scope.networkingScore;
                $scope.designScorePrevious = $scope.designScore;
                $scope.perspectiveScorePrevious = $scope.perspectiveScore;
                $scope.managementScorePrevious = $scope.managementScore;
                $scope.teamworkScorePrevious = $scope.teamworkScore;




                //String to hold all previous values
                $scope.fulltStemPreString = [$scope.roundMe($scope.fulltStemPrevious)];
                $scope.fulltTopPreString = [$scope.roundMe($scope.fulltTopPrevious)];
                $scope.fulltScorePreString = [$scope.roundMe($scope.fulltScorePrevious)];
                $scope.educationScorePreString = [$scope.roundMe($scope.educationScorePrevious)];
                $scope.membershipScorePreString = [$scope.roundMe($scope.membershipScorePrevious)];
                $scope.methodsScorePreString = [$scope.roundMe($scope.methodsScorePrevious)];
                $scope.operationalScorePreString = [$scope.roundMe($scope.operationalScorePrevious)];
                $scope.proficiencyScorePreString = [$scope.roundMe($scope.proficiencyScorePrevious)];

                $scope.communicationScorePreString = [$scope.roundMe($scope.communicationScorePrevious)];
                $scope.criticalScorePreString = [$scope.roundMe($scope.criticalScorePrevious)];
                $scope.empathyScorePreString = [$scope.roundMe($scope.empathyScorePrevious)];
                $scope.globalUnderstandScorePreString = [$scope.roundMe($scope.globalUnderstandScorePrevious)];
                $scope.networkingScorePreString = [$scope.roundMe($scope.networkingScorePrevious)];
                $scope.designScorePreString = [$scope.roundMe($scope.designScorePrevious)];
                $scope.perspectiveScorePreString = [$scope.roundMe($scope.perspectiveScorePrevious)];
                $scope.managementScorePreString = [$scope.roundMe($scope.managementScorePrevious)];
                $scope.teamworkScorePreString = [$scope.roundMe($scope.teamworkScorePrevious)];

                //Variables to hold Delta score values
                $scope.fulltStemDelta = 0;
                $scope.fulltTopDelta = 0;
                $scope.fulltScoreDelta = 0;
                $scope.educationScoreDelta = 0;
                $scope.membershipScoreDelta = 0;
                $scope.methodsScoreDelta = 0;
                $scope.operationalScoreDelta = 0;
                $scope.proficiencyScoreDelta = 0;

                $scope.communicationScoreDelta = 0;
                $scope.criticalScoreDelta = 0;
                $scope.empathyScoreDelta = 0;
                $scope.globalUnderstandScoreDelta = 0;
                $scope.networkingScoreDelta = 0;
                $scope.designScoreDelta = 0;
                $scope.perspectiveScoreDelta = 0;
                $scope.managementScoreDelta = 0;
                $scope.teamworkScoreDelta = 0;

                $scope.scoreInitialized = 1;
            } else {
                console.log("Checking Values");

                //Compute Deltas and Previous Values of T Dataset
                [$scope.fulltStem, $scope.fulltStemPrevious, $scope.fulltStemPreString, $scope.fulltStemDelta] = computeAnalytics($scope.fulltStem, $scope.fulltStemPrevious, $scope.fulltStemPreString, $scope.fulltStemDelta, "fullTStem");
                [$scope.fulltTop, $scope.fulltTopPrevious, $scope.fulltTopPreString, $scope.fulltTopDelta] = computeAnalytics($scope.fulltTop, $scope.fulltTopPrevious, $scope.fulltTopPreString, $scope.fulltTopDelta, "fulltTopDelta");
                [$scope.fulltScore, $scope.fulltScorePrevious, $scope.fulltScorePreString, $scope.fulltScoreDelta] = computeAnalytics($scope.fulltScore, $scope.fulltScorePrevious, $scope.fulltScorePreString, $scope.fulltScoreDelta, "fulltScore");
                [$scope.educationScore, $scope.educationScorePrevious, $scope.educationScorePreString, $scope.educationScoreDelta] = computeAnalytics($scope.educationScore, $scope.educationScorePrevious, $scope.educationScorePreString, $scope.educationScoreDelta, "education");
                [$scope.membershipScore, $scope.membershipScorePrevious, $scope.membershipScorePreString, $scope.membershipScoreDelta] = computeAnalytics($scope.membershipScore, $scope.membershipScorePrevious, $scope.membershipScorePreString, $scope.membershipScoreDelta, "membership");
                [$scope.methodsScore, $scope.methodsScorePrevious, $scope.methodsScorePreString, $scope.methodsScoreDelta] = computeAnalytics($scope.methodsScore, $scope.methodsScorePrevious, $scope.methodsScorePreString, $scope.methodsScoreDelta, "methods");
                [$scope.operationalScore, $scope.operationalScorePrevious, $scope.operationalScorePreString, $scope.operationalScoreDelta] = computeAnalytics($scope.operationalScore, $scope.operationalScorePrevious, $scope.operationalScorePreString, $scope.operationalScoreDelta, "operational");
                [$scope.proficiencyScore, $scope.proficiencyScorePrevious, $scope.proficiencyScorePreString, $scope.proficiencyScoreDelta] = computeAnalytics($scope.proficiencyScore, $scope.proficiencyScorePrevious, $scope.proficiencyScorePreString, $scope.proficiencyScoreDelta, "proficiency");
                [$scope.communicationScore, $scope.communicationScorePrevious, $scope.communicationScorePreString, $scope.communicationScoreDelta] = computeAnalytics($scope.communicationScore, $scope.communicationScorePrevious, $scope.communicationScorePreString, $scope.communicationScoreDelta, "comms");
                [$scope.criticalScore, $scope.criticalScorePrevious, $scope.criticalScorePreString, $scope.criticalScoreDelta] = computeAnalytics($scope.criticalScore, $scope.criticalScorePrevious, $scope.criticalScorePreString, $scope.criticalScoreDelta, "critical");
                [$scope.empathyScore, $scope.empathyScorePrevious, $scope.empathyScorePreString, $scope.empathyScoreDelta] = computeAnalytics($scope.empathyScore, $scope.empathyScorePrevious, $scope.empathyScorePreString, $scope.empathyScoreDelta, "empathy");
                [$scope.globalUnderstandScore, $scope.globalUnderstandScorePrevious, $scope.globalUnderstandScorePreString, $scope.globalUnderstandScoreDelta] = computeAnalytics($scope.globalUnderstandScore, $scope.globalUnderstandScorePrevious, $scope.globalUnderstandScorePreString, $scope.globalUnderstandScoreDelta, "understand");
                [$scope.networkingScore, $scope.networkingScorePrevious, $scope.networkingScorePreString, $scope.networkingScoreDelta] = computeAnalytics($scope.networkingScore, $scope.networkingScorePrevious, $scope.networkingScorePreString, $scope.networkingScoreDelta, "networking");
                [$scope.designScore, $scope.designScorePrevious, $scope.designScorePreString, $scope.designScoreDelta] = computeAnalytics($scope.designScore, $scope.designScorePrevious, $scope.designScorePreString, $scope.designScoreDelta, "design");
                [$scope.perspectiveScore, $scope.perspectiveScorePrevious, $scope.perspectiveScorePreString, $scope.perspectiveScoreDelta] = computeAnalytics($scope.perspectiveScore, $scope.perspectiveScorePrevious, $scope.perspectiveScorePreString, $scope.perspectiveScoreDelta, "perspective");
                [$scope.managementScore, $scope.managementScorePrevious, $scope.managementScorePreString, $scope.managementScoreDelta] = computeAnalytics($scope.managementScore, $scope.managementScorePrevious, $scope.managementScorePreString, $scope.managementScoreDelta, "management");
                [$scope.teamworkScore, $scope.teamworkScorePrevious, $scope.teamworkScorePreString, $scope.teamworkScoreDelta] = computeAnalytics($scope.teamworkScore, $scope.teamworkScorePrevious, $scope.teamworkScorePreString, $scope.teamworkScoreDelta, "teamwork");

                console.log($scope.fulltStemDelta);
                console.log("String: ", $scope.fulltStemPreString);

            }

            //Calculate T Chart Percentage values
            $scope.communicationScorePerc = $scope.roundMe(($scope.communicationScore / $scope.fulltTop) * 100);
            $scope.criticalScorePerc = $scope.roundMe(($scope.criticalScore / $scope.fulltTop) * 100);
            $scope.empathyScorePerc = $scope.roundMe(($scope.empathyScore / $scope.fulltTop) * 100);
            $scope.globalUnderstandScorePerc = $scope.roundMe(($scope.globalUnderstandScore / $scope.fulltTop) * 100);
            $scope.networkingScorePerc = $scope.roundMe(($scope.networkingScore / $scope.fulltTop) * 100);
            $scope.designScorePerc = $scope.roundMe(($scope.designScore / $scope.fulltTop) * 100);
            $scope.perspectiveScorePerc = $scope.roundMe(($scope.perspectiveScore / $scope.fulltTop) * 100);
            $scope.managementScorePerc = $scope.roundMe(($scope.managementScore / $scope.fulltTop) * 100);
            $scope.teamworkScorePerc = $scope.roundMe(($scope.teamworkScore / $scope.fulltTop) * 100);

            $scope.educationScorePerc = $scope.roundMe(($scope.educationScore / $scope.fulltStem) * 100);
            $scope.membershipScorePerc = $scope.roundMe(($scope.membershipScore / $scope.fulltStem) * 100);
            $scope.operationalScorePerc = $scope.roundMe(($scope.operationalScore / $scope.fulltStem) * 100);
            $scope.methodsScorePerc = $scope.roundMe(($scope.methodsScore / $scope.fulltStem) * 100);
            $scope.proficiencyScorePerc = $scope.roundMe(($scope.proficiencyScore / $scope.fulltStem) * 100);
            console.log($scope.proficiencyScore)
            console.log($scope.proficiencyScorePerc)

            console.log("T Top Skills");
            console.log($scope.communicationScorePerc, $scope.networkingScorePerc, $scope.criticalScorePerc, $scope.empathyScorePerc, $scope.globalUnderstandScorePerc, $scope.designScorePerc, $scope.perspectiveScorePerc, $scope.managementScorePerc, $scope.teamworkScorePerc);
            console.log("T Stem Skills")
            console.log($scope.educationScorePerc, $scope.membershipScorePerc, $scope.methodsScorePerc, $scope.operationalScorePerc, $scope.proficiencyScorePerc);

         //Calculate Upper Bounds for raw score charts
            $scope.tTopUpper = Math.ceil($scope.fulltTop / 1000) * 1000;
            $scope.tStemUpper = Math.ceil($scope.fulltStem / 1000) * 1000;

            //Generate Charts

            new Chartist.Bar('#tTopBreak', {
                labels: ['Q1'],
                series: [

                    [$scope.communicationScorePerc],
                    [$scope.criticalScorePerc],
                    [$scope.empathyScorePerc],
                    [$scope.globalUnderstandScorePerc],
                    [$scope.networkingScorePerc],
                    [$scope.designScorePerc],
                    [$scope.perspectiveScorePerc],
                    [$scope.managementScorePerc],
                    [$scope.teamworkScorePerc]
                ]
            }, {
                height: 70,
                high: 100,
                stackBars: true,
                //         plugins: [
                //     Chartist.plugins.legend()
                // ],
                horizontalBars: true,
                chartPadding: { 
                left: 0,
             //   top: 0,
             //   bottom: 0,
             // right: 0
            },

                axisX: {
                    showLabel: false,
                    showGrid: true,
           offset: 0,

                },
                axisY: {

                    showLabel: false,
                    showGrid: true,
                               offset: 0,

                }

            })

            var tTopTicks = [$scope.tTopUpper - 1000, $scope.tTopUpper];

            new Chartist.Bar('#tTopQuant', {
                series: [
                    [$scope.fulltTop],

                ]
            }, {
                horizontalBars: true,
                height: 100,
                high: $scope.tTopUpper,
                low: $scope.tTopUpper - 1000,
                chartPadding: { 
          left: 0,
      //     top: 0,
      //     bottom: 0,
          right: 50,
      },
                axisX: {
                    type: Chartist.FixedScaleAxis,
                    ticks: tTopTicks,

                    showLabel: true,
                    showGrid: false,
                    position: 'start',

                    labelOffset: {
                        x: 5,
                        y: 20
                    },
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
           offset: 0,



                }
            })

            var elmnt = document.getElementById('tTopBreak');

            // var elmnt2 = <HTMLElement>document.querySelector("g.ct-grids");

            var txt = "Height with padding and border: " + elmnt.offsetHeight + "px<br>";
            txt += "Width with padding and border: " + elmnt.offsetWidth + "px";

            // var txt2 = "Height with padding and border: " + elmnt2.offsetHeight + "px<br>";
            // txt2 += "Width with padding and border: " + elmnt2.offsetWidth + "px";
            var chartHeight = elmnt.offsetWidth - 50;
            $scope.chartWidth = elmnt.offsetWidth;
            console.log("ChartWidth")
            console.log($scope.chartWidth);
            // console.log(txt2)

            var topLegend = document.getElementById("topLegend");
            topLegend.setAttribute("style", `width: ${$scope.chartWidth}px`);
            // Create a new line chart object where as first parameter we pass in a selector
            // that is resolving to our chart container element. The Second parameter
            // is the actual data object.
            // Initialize a Line chart in the container with the ID chart2
            new Chartist.Bar('#tStemBreak', {
                series: [
                    [$scope.educationScorePerc],
                    [$scope.membershipScorePerc],
                    [$scope.methodsScorePerc],
                    [$scope.operationalScorePerc],
                    [$scope.proficiencyScorePerc],
                ]
            }, {
                stackBars: true,
                high: 100,
                height: chartHeight,
                fullWidth: true,

                chartPadding: {
                    left: 0,
                    top: 10,
                    bottom: 0,
                    right: 0,
                },
                axisY: {

                    showGrid: false,
                    showLabel: false,

                },
                axisX: {
                    showLabel: false,

                    showGrid: false,
                }
            })

            var tStemTicks = [$scope.tStemUpper - 1000, $scope.tStemUpper];
            console.log("tStem Ticks: ", tStemTicks)
            new Chartist.Bar('#tStemQuant', {
                series: [
                    [$scope.fulltStem],
                ]
            }, {
                height: chartHeight,
                high: $scope.tStemUpper,
                low: $scope.tStemUpper - 1000,

                axisX: {
                    showLabel: false,
                    showGrid: false,
                },
                axisY: {
                    type: Chartist.FixedScaleAxis,
                    position: 'start',
                    showGrid: false,
                    ticks: tStemTicks,
                    labelOffset: {
                        x: 0,
                        y: 20,
                    },

                },

            })

        }, function(response) {
            //Negative Response
            console.log("Negative Init");
        });

    }

    $scope.roundMe = function(value, decimals = 1) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    function computeAnalytics(curVal, preVal, preString, deltaVal, id) {
        console.log(id, curVal, preVal, preString, deltaVal)

        if (curVal != preVal) {
            //compute delta
            // deltaVal = $scope.roundMe(curVal - preVal);
            console.log(preString[0]);
            if (preString[preString.length - 1] != $scope.roundMe(preVal)) {
                preString.push($scope.roundMe(preVal));
            }
            deltaVal = $scope.roundMe(curVal - preVal);

            preVal = curVal;
            console.log(id, deltaVal, preString, curVal);
        } else {
            console.log("All Values Unchanged");
        }

        return [curVal, preVal, preString, deltaVal];

    }




    console.log("TEST")
    //Load MightyT Chart once DOM elements are loaded!
    angular.element(document).ready(function() {

        console.log('page loading completed');
        console.log($scope.educationScorePerc)

        setTimeout(function() {

            $(document).ready(function() {
                console.log("creating DataTable")
                $('#topSkills').DataTable({
                    "paging": false,
                    "searching": false,
                    "columnDefs": [
                        { className: "dt-body-center", "targets": [1] },
                        { "width": "20%", "targets": 1 }
                    ]
                });

            });

            $(document).ready(function() {
                console.log("creating DataTable")
                $('#stemSkills').DataTable({
                    "paging": false,
                    "searching": false,
                    "columnDefs": [
                        { className: "dt-body-center", "targets": [1] },
                        { "width": "20%", "targets": 1 }
                    ]

                });

            });

            console.log("Value")
            console.log($scope.communicationScore, $scope.criticalScore, $scope.empathyScore, $scope.globalUnderstandScore, $scope.networkingScore, $scope.designScore, $scope.perspectiveScore, $scope.managementScore, $scope.teamworkScore)
            let topData = {
                labels: ['Communications', 'Critical Thinking', 'Empathy', 'Global Understanding', 'Networking', 'Organizational Design', 'Perspective', 'Project Management', 'Teamwork'],
                datasets: [{
                    label: "Top Score",
                    backgroundColor: "#00bcd4",
                    borderColor: "#00bcd4",
                    data: [$scope.communicationScore, $scope.criticalScore, $scope.empathyScore, $scope.globalUnderstandScore, $scope.networkingScore, $scope.designScore, $scope.perspectiveScore, $scope.managementScore, $scope.teamworkScore]
                }]
            }
            let stemData = {
                labels: ['Education', 'Memberships', 'Skills', 'Operations', 'Software'],
                datasets: [{
                    label: "Stem Score",
                    backgroundColor: "#f44336",
                    borderColor: "#f44336",
                    data: [$scope.educationScore, $scope.membershipScore, $scope.methodsScore, $scope.operationalScore, $scope.proficiencyScore]
                }]
            }

            let topOptions = {
                label: "Top Score"
            }

            let stemOptions = {
                label: "Stem Score"

            }

            var tTopSource = document.getElementById("tTopRadar");
            console.log("Loading Radar Charts")
            var tTopChart = new Chart(tTopSource, {
                type: 'radar',
                data: topData,
                options: topOptions
            });

            var tStemSource = document.getElementById("tStemRadar");
            var tStemChart = new Chart(tStemSource, {
                type: 'radar',
                data: stemData,
                options: stemOptions
            });
        }, 500);




    });

}]);
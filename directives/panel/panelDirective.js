weatherApp.directive("panelView", function(){
    return{
        restrict: "AE",
        templateUrl: "directives/panel/panelView.html",
        replace: true,
        scope: {
            weatherObject: "=",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});
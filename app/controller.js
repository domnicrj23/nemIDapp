/**
 * Created by sofieskovmortensen on 16/02/16.
 */
var d={
};
var jsonArr = new XMLHttpRequest();


//console.log(d);
getVal= function(key){
    if(key == undefined)
        return null;
  return  d[key];
};
app.controller("getNemKey", function($scope, $http){
    $http.get("../lib/out.json")
        .then(function(response) {
            d = response.data;
            console.log(d);
        });
    $scope.value= function(){
        return getVal($scope.key);
    }//$scope.key;//
})
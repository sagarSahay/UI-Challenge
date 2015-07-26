/**
 * Created by Sagar on 25/07/2015.
 */

angular.module("myApp").factory('DeepSpaceFactory',function($http){
   var result=null;
    return{
        'getAll':function(){
            var url="http://api.duckduckgo.com/?q=star+trek+deep+space+nine+characters&format=json&p";
            var request={
                callback:"JSON_CALLBACK",
            };
            return $http({
                method:'JSONP',
                url:url,
                params:request,
                cache:true
            }).success(function(response){
                result=response;
            }).error(function(error){
                result=error;
            });
        }
    }
});

/**
 * Created by Sagar on 25/07/2015.
 */

angular.module("myApp").factory('DeepSpaceFactory',function($http){
   var castList=null;
    var selectedList=[];

    return{
        'getAll':function(){
            var url="http://api.duckduckgo.com/?q=star+trek+deep+space+nine+characters&format=json&p";
            var request={
                callback:"JSON_CALLBACK",
            };
            return $http({
                method:'JSONP',
                url:url,
                params:request
            }).success(function(response){
                castList=response.RelatedTopics;
            }).error(function(error){
                castList=error;
            });
        },
        'add':function(index){
            selectedList.push(castList[index]);
            castList.splice(index, 1);
        },
        'remove':function(index){
            castList.push(selectedList[index]);
            selectedList.splice(index, 1);
        },
        'castList':castList,
        'selectedCastList':selectedList
    }
});

var app = angular.module('wildridgeApp', []);

app.factory('wildridgeHomePageService', function ($http) {
  return {
    getLatestVideos: function () {
       //since $http.get returns a promise,
       //and promise.then() also returns a promise
       //that resolves to whatever value is returned in it's 
       //callback argument, we can return that.
      return $http.get('http://speakglobally.net/api/videos/latest').then(function (result) {
        return result.data.rows;
      });
    },
    getLatestOneVideo: function () {
      return $http.get('http://speakglobally.net/api/videos/latest_one').then(function (result) {
        return result.data.rows;
      });
    },
    getTop5News: function () {
      return $http.get('/api/news/top5').then(function (result) {
        return result.data.rows;
      });
    },
    getFeaturedVideo: function () {
      return $http.get('http://speakglobally.net/api/videos/home_video').then(function (result) {
        return result.data.rows;
      });
    }
  };
});

app.controller('WildridgeHome', function ($scope, wildridgeHomePageService) {
  //the clean and simple way
  $scope.latestVideos = wildridgeHomePageService.getLatestVideos();
  $scope.latestVideo = wildridgeHomePageService.getLatestOneVideo();
  $scope.top5 = wildridgeHomePageService.getTop5News();
});
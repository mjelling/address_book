angular
  .module('mainController', ['EntriesAPI'])
  .controller('MainController', ['$scope', '$http', 'entriesAPI',
    function( $scope, $http, entriesAPI) {

      $scope.entries = [];
      $scope.firstName;
      $scope.lastName;
      $scope.email;
      $scope.mobilePhone;
      $scope.workPhone;
      $scope.address;
      $scope.city;
      $scope.state;
      $scope.country;
      $scope.company;
      $scope.website;

      $scope.newEntry = {
        entry: {
        }
      };

      $scope.currentUserID = Cookies.getJSON('current_user')._id;
      $scope.currentUserName = Cookies.getJSON('current_user').username;

      $scope.checkDataBinding = function(){
        console.log($scope.firstName+','+$scope.lastName+','+
          $scope.email+','+$scope.mobilePhone+','+$scope.workPhone+','+
          $scope.address+','+ $scope.city+','+ $scope.state+','+ $scope.country+','+
          $scope.company+','+ $scope.website)
      }

      $scope.getEntriesByUser = function(){
        entriesAPI.getByUser($scope.currentUserID).then(function(response){
          console.log(response);
          $scope.entries = response.data;
          console.log($scope.entries);
        })
      };

      $scope.saveEntry = function(newEntry){
        console.log("newEntry: ");
        console.log(newEntry);
        entriesAPI.save(newEntry).then(function(response) {
          console.log(response);
          $scope.entries.push(response.data);
          $scope.getAllAlbums();
        })
      }

      $scope.createNewEntry = function(){
        var newData = $scope.newEntry.entry;
        newData.userID =$scope.currentUserID;
        newData.username = $scope.currentUserName;
        newData.first_name = $scope.firstName;
        newData.last_name = $scope.lastName;
        newData.email = $scope.email;
        newData.mobile_phone = $scope.mobilePhone;
        newData.work_phone = $scope.workPhone;
        newData.address = $scope.address;
        newData.city = $scope.city;
        newData.state = $scope.state;
        newData.country = $scope.country;
        newData.company = $scope.company;
        newData.website_url = $scope.website;
        console.log($scope.newEntry);
        $scope.saveEntry($scope.newEntry);
        $scope.getEntriesByUser();
      };




    }
  ]);

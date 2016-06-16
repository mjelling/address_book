angular
  .module('EntriesAPI', [])
  .factory('entriesAPI', ['$http',
    function($http) {
      return {

        getAll: function() {
          console.log('hello');
          return $http.get('/api/entries');
        },

        getByUser: function(userID) {
          console.log('getting by user');
          return $http.get('/api/entries/'+userID);
        },

        save: function(newCollected) {
          console.log("saving: ")
          console.log(newCollected);
          return $http.post('/api/entries/', newCollected );
        },

        remove: function(id) {
          return $http.delete('/api/entries/'+id);
        }
      }
    }])

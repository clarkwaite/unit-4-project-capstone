HomeController.$inject = ["homeService", "favoritesService", "$auth", '$stateParams', '$state', '$http'];

function HomeController(homeService, favoritesService, $auth, $stateParams, $state, $http) {
  const vm = this;
  vm.userId = $stateParams.userId;
  vm.user = $auth.user.id;
  vm.currentUser = $auth.user
  vm.userStates = $auth.user.states;
  vm.events = [];
  vm.favorites = null;

  activate();

  function activate() {
     return $http.get("/users/" + vm.userId + "/favorites")
      .then(res => {
        vm.favorites = res.data.favorites;
        var event = res.data.events;
        event.forEach(function(event){
          if (event.region === vm.userStates) {
            vm.events.push(event)
          }
        })
      });
  }


}//close


export default HomeController;
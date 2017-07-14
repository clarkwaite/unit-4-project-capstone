HeaderController.$inject = ['$auth', '$state'];
function HeaderController($auth, $state) {
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate() {

    if (vm.currentUser) {
      $state.go('home')
    } else {
      $state.go('signIn')
  }
}

vm.signOut = function () {
  $auth.signOut()
    .then(function (response) {
      console.log('successful sign out');
      console.log(response.status);
      $state.go('signIn');
    })
    .catch(function (response) {
      console.log('error signing out');
      console.log(response);
    })
}
}
export default HeaderController;
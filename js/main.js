/*登录*/
function onClickLogin() {
  var username = $('#login-username').val();
  var password = $('#login-password').val();
  if (username == 'admin' && password == 'admin') {
    alert('登录成功');
    //$.cookie('name', 'admin', {path: '/'});
    window.location.href = '/Dessert/';
  } else {
    alert('账户或密码错误');
  }
}

function onClickLogout() {
  //$.cookie('name', null);
  window.location.href = '/Dessert/';
}

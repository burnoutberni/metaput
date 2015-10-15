window.onload = function () {
  var loggedOn = false;
  var accessToken;

  if (document.location.hash && document.location.hash.indexOf("#access_token") > -1) {
    var loggedOn = true;
    var accessToken = document.location.hash.split("=")[1];
  }

  var login = document.getElementById("login");

  if (loggedOn) {
    login.style.display = "none";
  } else {
    login.onclick = function () {
      this.href = "https://api.put.io/v2/oauth2/authenticate?client_id="+clientId+"&response_type=token&redirect_uri="+redirectUri;
    }
  }

  var json = httpGet("https://api.put.io/v2/files/list?oauth_token="+accessToken);

  console.log(json);
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

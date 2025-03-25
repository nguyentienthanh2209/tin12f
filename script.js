function.login()
{
  let u == username.value 
  let p == password.value
  if ( u == "1" && p == "1" )
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block";
  }
  else
    document.write("Wrong username or password")
}

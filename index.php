<!DOCTYPE html>
<html lang="en">
<head>
  <title>User Form</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="./assets/css/app.css">
</head>
<body>

<div class="container">
    <div class="col-md-6 col-md-offset-3">
  <h2>User Form</h2>
  <form action="/action_page.php">
    <div class="form-group">
      <input type="text" class="form-control" id="userName" placeholder="User Name" name="userName">
      <span class="error errorUser"></span>
    </div>
    <div class="form-group">
      <input type="email" class="form-control" id="email" placeholder="Your Email Id" name="email">
      <span class="error errorEmail"></span>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="phone" placeholder="Your Mobile No" name="phone">
      <span class="error errorPhone"></span>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="age" placeholder="Your age" name="age">
      <span class="error errorAge"></span>
    </div>
    <div class="form-group">
      <input type="password" class="form-control" id="pwd" placeholder="Your Password" name="pwd">
      <span class="error errorPwd"></span>
    </div>
    <button type="submit" class="btn btn-default" id="formSubmit" >Submit</button>
  </form>
  </div>
  <div class="col-md-6 col-md-offset-3">
      <div id="result"></div>
    </div>
</div>
    <script src="./assets/js/jquery.min.js"></script>
    <script src="./assets/js/bootstrap.min.js"></script>
    <script src="./assets/js/app.js"></script>
</body>
</html>

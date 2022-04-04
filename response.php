 <div class="success"> You have successfully submit form !! </div>
 <table class="table">
    <tbody>
      <tr>
        <td>Hello <?php echo $_POST["userName"]; ?> ! !</td>
      </tr>
      <tr>
        <td>Your email is <?php echo $_POST["email"]; ?> !!</td>
      </tr>
      <tr>
        <td>Your phone number is <?php echo $_POST["phone"]; ?> !!</td>
      </tr>
      <tr>
        <td>Your age is <?php echo $_POST["age"]; ?> !!</td>
      </tr>
    </tbody>
  </table>
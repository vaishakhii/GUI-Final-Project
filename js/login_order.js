    // id = ("#ID")
    // class = (".class)
    
    // submit button
    $('#submit_btn').click(function () {
        // if employee radio button is checked navigate to Employee Order page
        var is_employee_checked = $('#u_employee').is(':checked');
        if (is_employee_checked) {
            $('#employ-login-order-email').val("");
            $('#login_content').css("display","none");
            $('#EmployloginOrder').modal('show')
        }
        
        // if Management or Order Handler radio button is checked then shows log in page
        var is_management_checked = $('#u_manager').is(':checked');
        var is_handler_checked = $('#u_handler').is(':checked');
        if (is_management_checked || is_handler_checked) {
            $('#login_content').css("display","none");
            $('#u_email').val("");
            $('#u_password').val("");
            $('#loginOrder').modal('show')
        }
    });



    $('#Login-Order-close-btn').click(function () {
            $('#login_content').css("display","block");
    });
    $('#Employ-Login-Order-close-btn').click(function () {
            $('#login_content').css("display","block");
    });

    $('#Employ-Login-Order-btn').click(function () {

        if(($("#employ-login-order-email").val()).trim() != ""){
            $('#login_content').css("display","none");
            $('#dashboard_content').css("display","block");
            $('#EmployloginOrder').modal('hide')

            var user_email = ($("#employ-login-order-email").val()).trim();
            set_login_user("Employ",user_email);
        }

    });

    $('#user-logout-tag').click(function () {
            $('#login_content').css("display","block");
            $('#dashboard_content').css("display","none");
    });



    
    $('#Login-Order-btn').click(function () {     
        var email = ($('#u_email').val()).trim();
        var password = ($('#u_password').val()).trim();
        var is_management_checked = $('#u_manager').is(':checked');
        var is_handler_checked = $('#u_handler').is(':checked');
        
        if (is_management_checked && email == "manager@gmail.com" && password == "manager123") {
            $('#login_content').css("display","none");
            $('#dashboard_content').css("display","block");
            $('#loginOrder').modal('hide')

            set_login_user("Manager",email);

        } else if (is_handler_checked && email == "order_handler@gmail.com" && password == "h_123") {
            $('#login_content').css("display","none");
            $('#dashboard_content').css("display","block");
            $('#loginOrder').modal('hide')

            set_login_user("Order_Handler",email);

        } else {
            alert("Please provide correct Email amd Password");
        }
        
    });
    
    $('#cancle_btn').click(function () {
        //window.location.href = 'order.html';
    });
 





   var USER_POSITION = " ";
   var USER_EMAIL = " ";

   function set_login_user(user_position,user_email){
      USER_POSITION = user_position;
      USER_EMAIL = user_email;
      login_to_dashboard();
      set_user_datatable();
   }
  

   function set_user_datatable(){
        document.getElementById("loggedin_user_email").innerHTML = "Email : " + USER_EMAIL;

        $('#place-order-email').val(USER_EMAIL);

        if (USER_POSITION == "Employ") {
            $('#Requested-Orders').css("display","inline-block");
            $('#Approved-Orders').css("display","none");
            $('#Placed-Orders').css("display","none");
            $('#Request-Order').css("display","inline-block");
            $('#Delete-Order-request').css("display","inline-block");
            $('#Approve-Order-request').css("display","none");
            $('#Place-Order-request').css("display","none");
        } else if (USER_POSITION == "Manager") {
            $('#Requested-Orders').css("display","none");
            $('#Approved-Orders').css("display","inline-block");
            $('#Placed-Orders').css("display","none");
            $('#Request-Order').css("display","none");
            $('#Delete-Order-request').css("display","none");
            $('#Approve-Order-request').css("display","inline-block");
            $('#Place-Order-request').css("display","none");
        } else if (USER_POSITION == "Order_Handler") {
            $('#Requested-Orders').css("display","none");
            $('#Approved-Orders').css("display","none");
            $('#Placed-Orders').css("display","inline-block");
            $('#Request-Order').css("display","none");
            $('#Delete-Order-request').css("display","none");
            $('#Approve-Order-request').css("display","none");
            $('#Place-Order-request').css("display","inline-block");
        }

   }


   function login_to_dashboard(){
       $('#requested-order-data').css("display","none");
       $('#approved-order-data').css("display","none");
       $('#placed-order-data').css("display","none");
       $('#delete-order-request-data').css("display","none");
       $('#approve-order-request-data').css("display","none");
       $('#place-order-request-data').css("display","none");

   }


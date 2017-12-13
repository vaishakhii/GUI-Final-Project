$(document).ready(function(){

   /*
   var USER_POSITION = " ";
   var USER_EMAIL = " ";

   function set_login_user(user_position,user_email){
      USER_POSITION = user_position;
      USER_EMAIL = user_email;
   }
   */

   document.getElementById("Requested-Orders").onclick =
                           function() {Requested_Orders()};
   document.getElementById("Approved-Orders").onclick =
                           function() {Approved_Orders()};
   document.getElementById("Placed-Orders").onclick =
                           function() {Placed_Orders()};

   document.getElementById("Request-Order").onclick =
                           function() {Request_Order()};

   document.getElementById("Delete-Order-request").onclick =
                           function() {Delete_Order_request()};
   document.getElementById("Approve-Order-request").onclick =
                           function() {Approve_Order_request()};
   document.getElementById("Place-Order-request").onclick =
                           function() {Place_Order_request()};



   // ================== Requested_Orders List  =================
   $("#requested-order-table").DataTable().draw();
   function Requested_Orders(){
       $('#requested-order-data').css("display","block"); // block
       $('#approved-order-data').css("display","none");
       $('#placed-order-data').css("display","none");
       $('#delete-order-request-data').css("display","none");
       $('#approve-order-request-data').css("display","none");
       $('#place-order-request-data').css("display","none");

       UpdateRequestedOrdeTable();
   }

   // ================== Approved_Orders List  =================
   $("#approved-order-table").DataTable().draw();
   function Approved_Orders(){
       $('#requested-order-data').css("display","none");
       $('#approved-order-data').css("display","block"); // block
       $('#placed-order-data').css("display","none");
       $('#delete-order-request-data').css("display","none");
       $('#approve-order-request-data').css("display","none");
       $('#place-order-request-data').css("display","none");

       UpdateApprovedOrdeTable();
   }

   // ================== Placed_Orders List  =================
   $("#placed-order-table").DataTable().draw();
   function Placed_Orders(){
       $('#requested-order-data').css("display","none");
       $('#approved-order-data').css("display","none");
       $('#placed-order-data').css("display","block"); // block
       $('#delete-order-request-data').css("display","none");
       $('#approve-order-request-data').css("display","none");
       $('#place-order-request-data').css("display","none");

       UpdatePlacedOrdeTable();
   }


   // ================== Request-Order  =================
   function Request_Order(){
       $('#requested-order-data').css("display","none");
       $('#approved-order-data').css("display","none");
       $('#placed-order-data').css("display","none");
       $('#delete-order-request-data').css("display","none");
       $('#approve-order-request-data').css("display","none");
       $('#place-order-request-data').css("display","none");

      // clear form
      $("#place-order-item-name").val("");
      $("#place-order-quantity").val("");
      $("#place-order-cost").val("");
      $("#place-order-reason").val("");

   }

   document.getElementById("Placing-Order-btn").onclick = function() {saving_place_order()};

    function saving_place_order(){

             if ((($("#place-order-email").val()).trim() == "") ||
                 (($("#place-order-item-name").val()).trim() == "") ||
                 (($("#place-order-quantity").val()).trim() == "") ||
                 (($("#place-order-cost").val()).trim() == "") ||
                 (($("#place-order-reason").val()).trim() == "")){
                     $('#place-order-error').css("display","block");
             } else {
                 var obj_data = {
                        "Order_Data_Id" : Order_Data_Id,
                        "Email" : $("#place-order-email").val(),
                        "ItemName" : $("#place-order-item-name").val(),
                        "Quantity" : $("#place-order-quantity").val(),
                        "Cost" : $("#place-order-cost").val(),
                        "Description" : $("#place-order-reason").val(),
                        "OrderStatus" : "Requested"
                        };

                 console.log(obj_data);
                 Order_Data.push(obj_data)
                 Order_Data_Id += 1;
                 console.log(Order_Data);

                 // clear form
                          $("#place-order-item-name").val("");
                          $("#place-order-quantity").val("");
                          $("#place-order-cost").val("");
                          $("#place-order-reason").val("");
                 // Closing dialog input box
                 $('#place-order-error').css("display","none");
                 $('#requestOrder').modal('hide')

             }


    }


   // ================== Delete_Order_request  =================
   $("#delete-order-request-table").DataTable().draw();
   function Delete_Order_request(){
       $('#requested-order-data').css("display","none");
       $('#approved-order-data').css("display","none");
       $('#placed-order-data').css("display","none");
       $('#delete-order-request-data').css("display","block"); // block
       $('#approve-order-request-data').css("display","none");
       $('#place-order-request-data').css("display","none");

       UpdateDeleteRequestOrdeTable();
   }


   // ================== Approve_Order_request  =================
   $("#approve-order-request-table").DataTable().draw();
   function Approve_Order_request(){
       $('#requested-order-data').css("display","none");
       $('#approved-order-data').css("display","none");
       $('#placed-order-data').css("display","none");
       $('#delete-order-request-data').css("display","none");
       $('#approve-order-request-data').css("display","block"); // block
       $('#place-order-request-data').css("display","none");

       UpdateApproveRequestOrdeTable();
   }


   // ================== Place_Order_request  =================
   $("#place-order-request-table").DataTable().draw();
   function Place_Order_request(){
       $('#requested-order-data').css("display","none");
       $('#approved-order-data').css("display","none");
       $('#placed-order-data').css("display","none");
       $('#delete-order-request-data').css("display","none");
       $('#approve-order-request-data').css("display","none");
       $('#place-order-request-data').css("display","block"); // block

       UpdatePlaceRequestOrdeTable();
   }



});

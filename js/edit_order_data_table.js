
   // ================== Requested_Orders List  =================
   function UpdateDeleteRequestOrdeTable() {
                // Update order data from csv 
                delete_order_request_table.rows().remove();
                upload_delete_order_request_table();
   }


    var delete_order_request_table =
            $("#delete-order-request-table").DataTable(
                  {"columns" : [ {"title" : "ItemNumber"},
                         {"title" : "Email-Id"},
                         {"title" : "Item-Name"},
                         {"title" : "Item-Quentities"},
                         {"title" : "Item-Cost",
                          "render" : $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
                         {"title" : "Description"},
                         {"title" : "Order-Status"},
                         {"data": null,
                          "className": "center",
                          "defaultContent": '<a href="" class="editor_remove">Delete</a>'}
                         ],

                    "info" : false,
                    "ordering": true,
                    "scrollX" : "500px",
                    "scrollCollapse" : false,
                    "searching" : false});

            document.getElementsByClassName("dataTables_scroll")[3].style.overflow = "scroll";
            document.getElementsByClassName("dataTables_scrollHead")[3].style.overflow = "";
            document.getElementsByClassName("dataTables_scrollBody")[3].style.overflow = "";




    // Delete a record
    $('#delete-order-request-table').on( 'click', 'a.editor_remove', function (e) {
        e.preventDefault();
        console.log("remove");
        if (selected_order_detail != ""){
           display_deleting_order_data(selected_order_detail);
        }
    });
    // Selected raw data from deleting process by users
    var selected_order_detail = "";
    $('#delete-order-request-table tbody').on( 'click', 'tr', function () {
                  delete_order_request_table.$('tr.selected').removeClass('selected');
                  $(this).addClass('selected');
                  selected_order_detail = delete_order_request_table.row('.selected').data();

                  //NOTE: display selected data and open dialog box for confirmation about
                  //      deleting process
                  console.log(selected_order_detail);
    });


    function display_deleting_order_data(obj){
             console.log(obj);
             $("#delete-order-email-data").val(obj[1])     // (obj.id)
             $("#delete-order-itemName-data").val(obj[2])  // (obj.itemName)
             $("#delete-order-quantity-data").val(obj[3])  // (obj.quantity)
             $("#delete-order-cost-data").val(obj[4])      // (obj.cost)
             $("#delete-order-reason-data").val(obj[5])    // (obj.description)

             $('#DeleteOrder').modal('show')
    }


    function upload_delete_order_request_table(){
                 delete_order_request_table.rows().remove();
                 obj = Order_Data;
                 for(var i = 0; i < obj.length; i++){
                    if (obj[i]["OrderStatus"] == "Requested" &&
                        obj[i]["Email"] == USER_EMAIL){
                           delete_order_request_table.row.add([
                                  obj[i]["Order_Data_Id"],
                                  obj[i]["Email"],
                                  obj[i]["ItemName"],
                                  obj[i]["Quantity"],
                                  obj[i]["Cost"],
                                  obj[i]["Description"],
                                  obj[i]["OrderStatus"]
                             ])
                    }
                 }
                 delete_order_request_table.draw(false); // redraw
    }

    document.getElementById("delete-order-submit").onclick = function() {deleting_place_order()};
    function deleting_place_order(){
        if (selected_order_detail != ""){
           deleting_order_data_id = parseInt(selected_order_detail[0]);
        }
        
        Order_Data.removeValue('Order_Data_Id', deleting_order_data_id);
        console.log(Order_Data);

        $('#DeleteOrder').modal('hide')
        selected_order_detail = "";
        upload_delete_order_request_table();
    }
























   // ================== Approved_Orders List  =================
   function UpdateApproveRequestOrdeTable() {
                // Update order data from csv 
                approve_order_request_table.rows().remove();
                upload_approve_order_request_table();
   }


    var approve_order_request_table =
            $("#approve-order-request-table").DataTable(
                  {"columns" : [ {"title" : "ItemNumber"},
                         {"title" : "Email-Id"},
                         {"title" : "Item-Name"},
                         {"title" : "Item-Quentities"},
                         {"title" : "Item-Cost",
                          "render" : $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
                         {"title" : "Description"},
                         {"title" : "Order-Status"},
                         {"data": null,
                          "className": "center",
                          "defaultContent": '<a href="" class="editor_remove">Approve</a>'}
                         ],


                    "info" : false,
                    "ordering": true,
                    "scrollX" : "500px",
                    "scrollCollapse" : false,
                    "searching" : false});

            document.getElementsByClassName("dataTables_scroll")[4].style.overflow = "scroll";
            document.getElementsByClassName("dataTables_scrollHead")[4].style.overflow = "";
            document.getElementsByClassName("dataTables_scrollBody")[4].style.overflow = "";


    // Approve a record
    $('#approve-order-request-table').on( 'click', 'a.editor_remove', function (e) {
        e.preventDefault();
        console.log("approve");
        if (selected_requested_order_detail != ""){
           display_approving_order_data(selected_requested_order_detail);
        }
    });
    // Selected raw data from deleting process by users
    var selected_requested_order_detail = "";
    $('#approve-order-request-table tbody').on( 'click', 'tr', function () {
                  approve_order_request_table.$('tr.selected').removeClass('selected');
                  $(this).addClass('selected');
                  selected_requested_order_detail = approve_order_request_table.row('.selected').data();

                  //NOTE: display selected data and open dialog box for confirmation about
                  //      approving process
                  console.log(selected_requested_order_detail);
    });


    function display_approving_order_data(obj){
             console.log(obj);
             $("#approve-order-email-data").val(obj[1])     // (obj.id)
             $("#approve-order-itemName-data").val(obj[2])  // (obj.itemName)
             $("#approve-order-quantity-data").val(obj[3])  // (obj.quantity)
             $("#approve-order-cost-data").val(obj[4])      // (obj.cost)
             $("#approve-order-reason-data").val(obj[5])    // (obj.description)

             $('#ApproveOrder').modal('show')
    }


    function upload_approve_order_request_table(){
                 approve_order_request_table.rows().remove();
                 obj = Order_Data;
                 for(var i = 0; i < obj.length; i++){
                    // we select requested to edit and approve
                    if (obj[i]["OrderStatus"] == "Requested"){
                           approve_order_request_table.row.add([
                                  obj[i]["Order_Data_Id"],
                                  obj[i]["Email"],
                                  obj[i]["ItemName"],
                                  obj[i]["Quantity"],
                                  obj[i]["Cost"],
                                  obj[i]["Description"],
                                  obj[i]["OrderStatus"]
                             ])
                    }
                 }
                 approve_order_request_table.draw(false); // redraw
    }

    document.getElementById("approve-order-submit").onclick = function() {approving_place_order()};
    function approving_place_order(){
        if (selected_requested_order_detail != ""){
           approving_order_data_id = parseInt(selected_requested_order_detail[0]);
        }
        
        for(var i = 0; i < Order_Data.length; i++){
            // we select requested to edit and approve
            if (Order_Data[i]["Order_Data_Id"] == approving_order_data_id){
                obj[i]["OrderStatus"] = "Approved";
                break;
            }
        }
        console.log(Order_Data);

        $('#ApproveOrder').modal('hide')
        selected_requested_order_detail = "";
        upload_approve_order_request_table();
    }





















   // ================== Placed_Orders List  =================
   function UpdatePlaceRequestOrdeTable() {
                // Update order data from csv 
                place_order_request_table.rows().remove();
                upload_place_order_request_table();
   }


    var place_order_request_table =
            $("#place-order-request-table").DataTable(
                  {"columns" : [ {"title" : "ItemNumber"},
                         {"title" : "Email-Id"},
                         {"title" : "Item-Name"},
                         {"title" : "Item-Quentities"},
                         {"title" : "Item-Cost",
                          "render" : $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
                         {"title" : "Description"},
                         {"title" : "Order-Status"},
                         {"data": null,
                          "className": "center",
                          "defaultContent": '<a href="" class="editor_remove">Place</a>'}
                         ],

                    "info" : false,
                    "ordering": true,
                    "scrollX" : "500px",
                    "scrollCollapse" : false,
                    "searching" : false});

            document.getElementsByClassName("dataTables_scroll")[5].style.overflow = "scroll";
            document.getElementsByClassName("dataTables_scrollHead")[5].style.overflow = "";
            document.getElementsByClassName("dataTables_scrollBody")[5].style.overflow = "";


    // Place a record
    $('#place-order-request-table').on( 'click', 'a.editor_remove', function (e) {
        e.preventDefault();
        console.log("place");
        if (selected_approved_order_detail != ""){
           display_placing_order_data(selected_approved_order_detail);
        }
    });
    // Selected raw data from deleting process by users
    var selected_approved_order_detail = "";
    $('#place-order-request-table tbody').on( 'click', 'tr', function () {
                  place_order_request_table.$('tr.selected').removeClass('selected');
                  $(this).addClass('selected');
                  selected_approved_order_detail = place_order_request_table.row('.selected').data();

                  //NOTE: display selected data and open dialog box for confirmation about
                  //     placing process
                  console.log(selected_approved_order_detail);
    });


    function display_placing_order_data(obj){
             console.log(obj);
             $("#place-order-email-data").val(obj[1])     // (obj.id)
             $("#place-order-itemName-data").val(obj[2])  // (obj.itemName)
             $("#place-order-quantity-data").val(obj[3])  // (obj.quantity)
             $("#place-order-cost-data").val(obj[4])      // (obj.cost)
             $("#place-order-reason-data").val(obj[5])    // (obj.description)

             $('#PlaceOrder').modal('show')
    }


    function upload_place_order_request_table(){
                 place_order_request_table.rows().remove();
                 obj = Order_Data;
                 for(var i = 0; i < obj.length; i++){
                    // we select approved to edit and place
                    if (obj[i]["OrderStatus"] == "Approved"){
                           place_order_request_table.row.add([
                                  obj[i]["Order_Data_Id"],
                                  obj[i]["Email"],
                                  obj[i]["ItemName"],
                                  obj[i]["Quantity"],
                                  obj[i]["Cost"],
                                  obj[i]["Description"],
                                  obj[i]["OrderStatus"]
                             ])
                    }
                 }
                 place_order_request_table.draw(false); // redraw
    }

    document.getElementById("place-order-submit").onclick = function() {placing_place_order()};
    function placing_place_order(){
        if (selected_approved_order_detail != ""){
           placing_order_data_id = parseInt(selected_approved_order_detail[0]);
        }
        
        for(var i = 0; i < Order_Data.length; i++){
            // we select requested to edit and approve
            if (Order_Data[i]["Order_Data_Id"] == placing_order_data_id){
                obj[i]["OrderStatus"] = "Placed";
                break;
            }
        }
        console.log(Order_Data);

        $('#PlaceOrder').modal('hide')
        selected_approved_order_detail = "";
        upload_place_order_request_table();
    }





   // ================== Requested_Orders List  =================
   function UpdateRequestedOrdeTable() {
                // Update order data from csv 
                requested_order_table.rows().remove();
                upload_requested_order_data_table();
   }


    var requested_order_table =
            $("#requested-order-table").DataTable(
                  {"columns" : [ {"title" : "ItemNumber"},
                         {"title" : "Email-Id"},
                         {"title" : "Item-Name"},
                         {"title" : "Item-Quentities"},
                         {"title" : "Item-Cost",
                          "render" : $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
                         {"title" : "Description"},
                         {"title" : "Order-Status"}],

                    "info" : false,
                    "ordering": true,
                    "scrollX" : "500px",
                    "scrollCollapse" : false,
                    "searching" : false});

            document.getElementsByClassName("dataTables_scroll")[0].style.overflow = "scroll";
            document.getElementsByClassName("dataTables_scrollHead")[0].style.overflow = "";
            document.getElementsByClassName("dataTables_scrollBody")[0].style.overflow = "";


    function upload_requested_order_data_table(){
                 obj = Order_Data;
                 for(var i = 0; i < obj.length; i++){
                    if (obj[i]["Email"] == USER_EMAIL){
                           requested_order_table.row.add([
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
                 requested_order_table.draw(false); // redraw
    }


   // ================== Approved_Orders List  =================
   function UpdateApprovedOrdeTable() {
                // Update order data from csv 
                approved_order_table.rows().remove();
                upload_approved_order_data_table();
   }


    var approved_order_table =
            $("#approved-order-table").DataTable(
                  {"columns" : [ {"title" : "ItemNumber"},
                         {"title" : "Email-Id"},
                         {"title" : "Item-Name"},
                         {"title" : "Item-Quentities"},
                         {"title" : "Item-Cost",
                          "render" : $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
                         {"title" : "Description"},
                         {"title" : "Order-Status"}],

                    "info" : false,
                    "ordering": true,
                    "scrollX" : "500px",
                    "scrollCollapse" : false,
                    "searching" : false});

            document.getElementsByClassName("dataTables_scroll")[1].style.overflow = "scroll";
            document.getElementsByClassName("dataTables_scrollHead")[1].style.overflow = "";
            document.getElementsByClassName("dataTables_scrollBody")[1].style.overflow = "";


    function upload_approved_order_data_table(){
                 obj = Order_Data;
                 for(var i = 0; i < obj.length; i++){
                    if (obj[i]["OrderStatus"] == "Approved" ||
                        obj[i]["OrderStatus"] == "Placed" ){
                        approved_order_table.row.add([
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
                 approved_order_table.draw(false); // redraw
    }



   // ================== Placed_Orders List  =================
   function UpdatePlacedOrdeTable() {
                // Update order data from csv 
                placed_order_table.rows().remove();
                upload_placed_order_data_table();
   }


    var placed_order_table =
            $("#placed-order-table").DataTable(
                  { "columns" : [ {"title" : "ItemNumber"},
                         {"title" : "Email-Id"},
                         {"title" : "Item-Name"},
                         {"title" : "Item-Quentities"},
                         {"title" : "Item-Cost",
                          "render" : $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
                         {"title" : "Description"},
                         {"title" : "Order-Status"}],

                    "info" : false,
                    "ordering": true,
                    "scrollX" : "500px",
                    "scrollCollapse" : false,
                    "searching" : false});

            document.getElementsByClassName("dataTables_scroll")[2].style.overflow = "scroll";
            document.getElementsByClassName("dataTables_scrollHead")[2].style.overflow = "";
            document.getElementsByClassName("dataTables_scrollBody")[2].style.overflow = "";


    function upload_placed_order_data_table(){
                 obj = Order_Data;
                 for(var i = 0; i < obj.length; i++){
                    if (obj[i]["OrderStatus"] == "Placed"){
                        placed_order_table.row.add([
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
                 placed_order_table.draw(false); // redraw
    }


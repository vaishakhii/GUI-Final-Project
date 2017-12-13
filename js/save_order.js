
var Order_Data_Id = 1;
var Order_Data = []




Array.prototype.removeValue = function(name, value){
   var array = $.map(Order_Data, function(v,i){
      return v[name] === value ? null : v;
   });
   Order_Data.length = 0; //clear original array
   Order_Data.push.apply(this, array); //push all elements except the one we want to delete
}

//Order_Data.removeValue('name', 'Albania');



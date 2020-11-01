setInterval(function () {
  var now = moment();
  $("#time").text(now);
}, 1000);

// Date Picker Function
$(document).ready(function(){
  var date_input=$('input[name="date"]');
  var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
  var options={
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);
})


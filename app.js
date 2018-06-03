$(document).ready(function(){
   $("body").children().css({"margin-top":"250px"});
   $("form").css({"margin-top":"40px"});
   $("#submito").button();
   $("#reset").button();
   $( "#date_birth" ).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: '1950:2020'
    });
   $("div").find("label").addClass("col-xs-12 col-md-2");
   // $("div").find("span").addClass("col-xs-12 col-md-12");
   $("div").find("label").css({"font-size":"20px"});
   // $("div").find("input").css({"margin-top":"50px"});
   $("div").find("input").addClass("col-xs-12 col-md-8 ");
   $("#alert").addClass("col-xs-12 col-md-2 ");
   $("#title").click(
     function(){
       $("#title").hide(200);
     }
   )
   $("#commit_password").blur(
     function(){

       if($("#commit_password").val()!=$("#password").val()){
         // $("#alert").css({"display":"block"})
         $("#alert").show(200);
       }else if($("#commit_password").val()==$("#password").val()){
         // $("#alert").css({"display":"none"})
         $("#alert").hide(200);
       }
     }
   )
   $("#commit_password").focus(
     function(){

       if($("#commit_password").val()!=$("#password").val()){
         // $("#alert").css({"display":"block"})
         $("#alert").show(200);
       }else if($("#commit_password").val()==$("#password").val()){
         // $("#alert").css({"display":"none"})
         $("#alert").hide(200);
       }
     }
   )

})

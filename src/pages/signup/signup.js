
$(".eyeicon").on("click",() =>{
    const type= $(".password").attr("type");
    if(type==="password"){
        $(".eyeicon").removeClass("fas fa-eye");
        $(".eyeicon").addClass("fas fa-eye-slash");
        $(".password").attr("type","text");
    }else{
        $(".eyeicon").removeClass("fas fa-eye-slash");
        $(".eyeicon").addClass("fas fa-eye");
        $(".password").attr("type","password");
    }
})

function verify() {  
    var pw = $(".password").val();  
    
    if(pw === "") {  
       $("#passwordHelpInline").html("**Fill the password!");  
       $("#passwordHelpInline").css("color","red");
       return false;  
    }       
    if(pw.length < 8) {  
        $("#passwordHelpInline").html("** length must be atleast 8 characters");
        $("#passwordHelpInline").css("color","red"); 
       return false;  
    }     
    if(pw.length > 20) {  
        $("#passwordHelpInline").html("** length must not exceed 20 characters");
        $("#passwordHelpInline").css("color","red");
       return false;  
    }else{
        $("#passwordHelpInline").html("");
        return true; 
    }
}  

$("form").on("submit", function (e){
    if(!verify()){
       e.preventDefault(); 
    }
});
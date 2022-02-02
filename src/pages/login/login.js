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
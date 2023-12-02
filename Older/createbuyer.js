window.onload = function(){
    var gender=document.getElementByTagname("gender");
    var name=document.getElementByTagname("username");
    var btn=document.getElementById("btn");
    //var n=username[0].getElementByTagname("div");
    btn.onclick=function(){
        if((!oinputs[0].value || !oinputs[1].value)){
            alert("Input can't be empty!");
        }else{
            $ajax({
                method:"post",
                url:".././php/register.php",
                data :{
                    username:oinput[0].value,
                    password:oinput[1].value,
                },
                error:function(msg){
                    
                }
            })
        }
    }


}
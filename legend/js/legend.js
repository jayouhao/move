/*
* @Author: banjiajia
* @Date:   2019-03-05 16:16:14
* @Last Modified by:   banjiajia
* @Last Modified time: 2019-03-07 15:53:17
*/

$(function(){	
    $(".navigation img,.sidebar-ul .colonel-button,.sidebar1-list-button img,.popup .popup-download,.popup .popup-close,.open-connect img,.open-tub img").mouseover(function (){  
        var tsurl=$(this).attr("src");
        this.tsurl=tsurl;
        if(tsurl.includes("默认")){
        	var enter=tsurl.replace("默认","鼠标经过");        	
        	$(this).attr("src",enter)
        }else{
        	this.tsurl="";
        }        
    }).mouseout(function (){    
    	if(this.tsurl){
    		  var enter=this.tsurl.replace("鼠标经过","默认");        	
        	$(this).attr("src",enter)
    	}         
    }); 


 //回到顶部
    $(".sidebar1-right .sidebar1-head").click(function(){
      $("html,body").animate({scrollTop: 0},300);
    })

     // 关闭
    $(".popup .popup-close").click(function(event) {
      $(this).parents(".popup-backgrund").fadeOut();        
    });
       
})


// 监听滚动距离
window.onscroll=function(){
    //获取滚动条的滚动距离
    var t =document.documentElement.scrollTop;
    console.log(t);
    if(t>850){      
      $(".sidebar1-right").fadeIn();
    }else{
      $(".sidebar1-right").fadeOut();      
    }
}

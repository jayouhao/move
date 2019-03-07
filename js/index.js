/*
* @Author: banjiajia
* @Date:   2019-03-05 16:16:14
* @Last Modified by:   banjiajia
* @Last Modified time: 2019-03-07 15:20:17
*/

$(function(){	    

    //回到顶部
    $(".sidebar1-right .sidebar1-head").click(function(){
      $("html,body").animate({scrollTop: 0},300);
    })
    $(".navigation img,.multiplayer .gos,.QQflock img,.bottom-img,.arrows img,.prefecture-nav img,\
        .cruel .cruel-button,.rule img,.unit img,\
        .sidebar-ul .colonel-button,.sidebar1-list-button img,.popup .popup-download,.popup .popup-close,.open-connect img,.open-tub img").mouseover(function (){  
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

    // 关闭
    $(".popup .popup-close").click(function(event) {
      $(this).parents(".popup-backgrund").fadeOut();        
    });




        $(".multiplayer .up").mouseover(function (){  
        var tsurl=$(this).find("img").attr("src");
        this.tsurl=tsurl;
        if(tsurl.includes("默认")){
            var enter=tsurl.replace("默认","鼠标经过");           
            $(this).find("img").attr("src",enter)
        }else{
            this.tsurl="";
        }        
    }).mouseout(function (){    
        if(this.tsurl){
              var enter=this.tsurl.replace("鼠标经过","默认");            
            $(this).find("img").attr("src",enter)
        }         
    });   
    //上一页
    $(".lastp").click(function(){
        $(".multiplayer .swiper-button-prev").click();
    })
    //下一页
    $(".nextp").click(function(){
     $(".multiplayer .swiper-button-next").click();   
    })
    //1
    $(".arrows-left").click(function(){
        $(".Boutique .swiper-button-prev").click();
    })
    //1
    $(".arrows-right").click(function(){
     $(".Boutique .swiper-button-next").click();   
    })
})

var swiper = new Swiper('.middle-container', {
  slidesPerView: 1,      
  loop: true,      
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiper = new Swiper('.Boutique-container', {
  slidesPerView: 1,      
  loop: true,      
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// 监听滚动距离
window.onscroll=function(){
    //获取滚动条的滚动距离
    var t =document.documentElement.scrollTop;
    console.log(t);
    if(t>200){      
      $(".sidebar1-right").fadeIn();
    }else{
      $(".sidebar1-right").fadeOut();      
    }
}

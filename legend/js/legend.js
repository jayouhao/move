/*
* @Author: banjiajia
* @Date:   2019-03-05 16:16:14
* @Last Modified by:   banjiajia
* @Last Modified time: 2019-03-06 16:46:14
*/

$(function(){	
    $(".navigation img").mouseover(function (){  
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
       
})

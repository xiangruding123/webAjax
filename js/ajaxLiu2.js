$(function(){
	//定义的函数
    function ajaxDate(type,url,data,success,error){
        data.flag ='wap';       //全局参数
        data.deviceid ="wap";
        data.market = "wap";
        data.vercode=310;
        data.vername='3.1.0';
        $.ajax({
            url: url,
            type: type,
            data:data,
            dataType: 'json',
            success: success,
            error:error
        })
    }
    
	//把函数注册到命名空间中---方便调用
	(function() {
		
	      //注册命名空间gyb到window对象上
	      window['FL'] = {};
	
	      window['FL']['ajaxDate'] = ajaxDate;//获取接口数据
	      
	  })();
	
});


  

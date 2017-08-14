## webAjax
### ajax项目应用的简单介绍及使用


#### 文件导航：

#### ajax1.html 关于原生ajax的相关介绍

#### ajaxLiu1.html  --LiuJingZhao
#### ajaxLiu2.html  --LiuJingZhao


#### demo1.html/demo2.html/demo3jquery.html/demo5.html  --jquery ajax的介绍！
#### demo4jsonp.html/  --jsonp访问后台数据

#### jsajaxdemo1.html/jsajaxdemo2.html/          --zuokeliang

#### jsajaxdemo3.html/jsajaxdemo4.html/          --wangyang



#### tst1.html/      --json返回的数据类型 string->object
### test2.html/      --wangyang-Dom直接插入的实现！！

#### test3.html  	 --$.each遍历json对象

#### test4.html  
```javascript
//引入jqury
<script type="text/javascript">
	//$.each遍历数组
	var str = [{"name": "limeng","email": "limeng@123.com"}, {"name": "zhanghao","email": "zhanghao@123.com"}] ;
	
	$.each( str , function(i, n) {
				console.log("索引: "+i+", 对应值name为：" + n.name+", 对应值email为："+n.email);
			});
	
	
	//=================================================
	console.log("000000000000000");
	var arr1 = [ "one", "two", "three", "four", "five" ];
	$.each(arr1, function(){
		console.log(this);
		console.log(typeof(this));      //arry-->objec
	});
	//输出：one   two  three  four   five
	
	
	console.log("--------------------");
	//=================================================
	var arr1_1 = ["a", "b", "c"]
	$.each(arr1_1, function(i,val){ 
		console.log(i);   // 0   1   2     
		console.log(typeof(i));   // number
		console.log(val);   //a  b  c   
		console.log(typeof(val));  //string
	});
	
	
	console.log("1111111111111111");
	//=================================================
	var arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	$.each(arr2, function(i, item){
		console.log(item[0]);
		console.log(typeof(item[0]));            //number
	});
	//输出：1   4   7
	
	console.log("22222222222222222");
	//=================================================
	var obj = { "one":"1", "two":"2", "three":"3", "four":"4", "five":"5" };
	$.each(obj, function(key, val) {
		console.log(obj[key]);
		console.log(typeof(obj[key]));         //object-->string
	});
	//输出：1   2  3  4  5
			
</script>
```




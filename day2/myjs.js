//JS文件中直接保存函数就可以了
function test(age){
		//这里的形参age前不加 var  这一点倒是和php一样
		//如果在形参前面写上var，会报一个标识符无效的错误
		if(age > 100 ){
			window.alert("年龄过大！") ;
		}
}
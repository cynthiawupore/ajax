var request = new XMLHttpRequest()

if(window.XMLHttpRequest){
	request = new XMLHttpRequest()
}else{
	request = new ActiveXObject("Microsoft.XMLHTTP")
}

request.open('POST','create.php',true)
request.setRequestHeader('Content-type','application/x-www-from-urlencoded')
request.send('name=王二狗&sex=女')

request.onreadystatechange = function(){
	if(request.readyState === 4 && request.status ===200){
		// do sth
	}
}
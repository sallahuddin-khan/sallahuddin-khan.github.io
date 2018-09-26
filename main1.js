$('#button1').click(function(){
	var f1 = $('#field1').val();
	var f2 = $('#field2').val();
	var f3 = $('#field3').val();

		if(f1===""){
			alert('fill name');
			return;
		}
		else if(f2===""){
			alert('email should not be empty');
			return;
		}
		else if(f3===""){
			alert('please give a message');
			return;
		}
		if(/\d/.test(f1)){
			alert('Name should not contain a number');
			return;
		}
		if(!f2.includes('@')){
			alert('invalid email');
			return;
		}
		if(!f2.includes('.')){
			alert('invalid email');
			return;
		}
		alert('Done');
			window.location.replace('index.html');
	
})
     $('#button2').on('click', () => {

	window.location.replace('index.html');

 })
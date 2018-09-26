

 $('#Next').on('click', () => {

 $('.overlay').slideDown();
  $('.overlay1').show();

 })
 
  $('#Next1').on('click', () => {

 $('.overlay1').slideDown();
  $('.overlay2').show();

 })
   $('#Next2').on('click', () => {

 $('.overlay2').slideDown();
  $('.overlay3').show();

 })
 
    $('#Next3').on('click', () => {

 $('.overlay3').slideDown();
  $('.overlay4').show();

 })
 
    $('#Next4').on('click', () => {

 $('.overlay4').slideDown();
  $('.overlay5').show();

 })
 
     $('#Next5').on('click', () => {

	window.location.replace('index1.html');

 })
 
 $('.imageClass').on('click',()=>{
	  $('.overlay1').slideDown();
  $('.overlay').show();

 })
 
 	 $('#prev').on('click', () => {
 $('.overlay1').slideUp();
  $('.overlay').show();
 })
 
  	 $('#prev1').on('click', () => {
 $('.overlay2').slideUp();
  $('.overlay1').show();
 })
 
  	 $('#prev2').on('click', () => {
 $('.overlay3').slideUp();
  $('.overlay2').show();
 })
 
  	 $('#prev3').on('click', () => {
 $('.overlay4').slideUp();
  $('.overlay3').show();
 })
 
  	 $('#prev4').on('click', () => {
 $('.overlay5').slideUp();
  $('.overlay4').show();
 })

 
 function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();




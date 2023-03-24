var dayHour=parseInt(prompt('Enter a Number:'));
if(dayHour<=11){
	a="Hi Good Morning";
}
else if(dayHour>=12 && dayHour<=15){
	a="Hi Good Afternoon";
}
else if(dayHour>=16 && dayHour<=18){
	a="Hi Good Evening";
}
else{
	a="Hi Good Night";
}
document.write("<h2>"+a);



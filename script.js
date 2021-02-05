function getmarks(){
	var php= Number(document.getElementById("php").value);
	var html= Number(document.getElementById("html").value);
	var js= Number(document.getElementById("js").value);
	var python= Number(document.getElementById("python").value);

	var totalmarks=400;
	var marks=php+html+js+python;
	var percentage=(marks/totalmarks)*100;
	document.getElementById("per").innerHTML=percentage+"%";
	
var grade="";
	if(percentage> 90)
	{
		grade="A";
	}
	else if(percentage < 90 && percentage > 80)
	{
		grade="B";
	}
	else if(percentage < 60)
	{
		grade="C"
	}
	document.getElementById("grade").innerHTML=grade;

	if(percentage < 60)
	{
		document.getElementById("pass").innerHTML="Sorry! you failed.. Please try next time.";
	}
	else{
		document.getElementById("pass").innerHTML="Congrats :) you passed.";
	}
	
}
function drawMargins()
{
	var leftMargin = document.getElementById("leftMargin");
	var rightMargin = document.getElementById("rightMargin");
	
	var marginWidth = 9;
	var marginHeightRight = 30;
	var marginHeightLeft = 60;


	for(var i = 0; i < 9; i++){
		var column1 = document.createElement("div");
		var column2 = document.createElement("div");

		column1.className += "column";
		column2.className += "column";

		leftMargin.appendChild(column1);
		rightMargin.appendChild(column2);
		
		marginHeightLeft -= 3;
		marginHeightRight +=3;
		
		for(var j = 0; j < marginHeightLeft; j++){
			var node1 = document.createElement("div");
			
			node1.className += "square";
			node1.style.backgroundColor = randClr();
			column1.appendChild(node1);
		}
		
		for(var j = 0; j < marginHeightRight; j++){
			var node2 = document.createElement("div");
			
			node2.className += "square";
			node2.style.backgroundColor = randClr();
			column2.appendChild(node2);
		}

	}
}

function randClr(){
	var colors = ["#877967", "#E5BD03", "#C0C4CA", "#C0C4CA", "#DF8371", "#D8ECDB"];
	var clr = colors[Math.floor(Math.random()*6)];
	return clr;
}

function setAccount() {
	var userName = document.querySelector('input[name=username').value;
	var passWord = document.querySelector('input[name=password').value;
	var fullName = document.querySelector('input[name=name').value;
	var eMail = document.querySelector('input[name=email').value;
	var dateBirth = document.querySelector('input[name=birthday').value;
	var theGender = document.querySelector('input[name=gender').value;
	var theTitle = document.querySelector('input[name=title').value;
	var creditCard = document.querySelector('input[name=credit').value;
								
	document.cookie = 'username=' + userName;
	document.cookie = 'password=' + passWord;
	document.cookie = 'name=' + fullName;
	document.cookie = 'email=' + eMail;
	document.cookie = 'birthday=' + dateBirth;
	document.cookie = 'gender=' + theGender;
	document.cookie = 'title=' + theTitle;
	document.cookie = 'credit=' + creditCard;
								
	alert(document.cookie);
								
	/*window.location.reload();*/
}

function init() {
	var theInfo = document.cookie.split(';'),
	i=0;
	
	for(;;) {
		if (i > 7) {
			break;
		}
		var section = theInfo[i].split('=');
		if (section[1] != "") {
			
		}
		
		i++
	}
	
	if (i = 7) {
		alert("Thank You for Supporting");
		window.location = 'http://people.emich.edu/dwalla21/fall16-231/231/project%201/index.html';
	}
}
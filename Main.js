var objPeople = [
	{ 
		username: "JohnDoe",
		password: "Student1"
	},
	{ 
		username: "MerikKuhn",
		password: "Student2"
	},
	{ 
		username: "AsherPage",
		password: "Student3"
	},
	{ 
		username: "AndrewSilaghi",
		password: "Student4"
	},
	{ 
		username: "AnthonyLucas",
		password: "Student5"
	},
	{ 
		username: "JordanReed",
		password: "Student6"
	},
	{ 
		username: "KyleSmith",
		password: "Student7"
	},
	{ 
		username: "BlakeReed",
		password: "Student8"
	},
	{ 
		username: "EmmaTaylor",
		password: "Student9"
	},
	{ 
		username: "AlexandraReed",
		password: "Student10"
	},
	{ 
		username: "JadynDemarco",
		password: "Student11"
	},
	{ 
		username: "JaciRobinson",
		password: "Student12"
	},
]

function getInfo() {
	var username = document.getElementById('username').value.toString();
	var password = document.getElementById('password').value.toString();

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
            location.href = "studentPage.html";
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return

		}
	}
    
	console.log("incorrect username or password")
    document.getElementById('print').innerHTML
                = 'INVALID LOGIN';

    
}
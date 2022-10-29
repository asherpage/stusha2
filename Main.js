var objPeople = [
	{ // Object @ 0 index
		username: "asher",
		password: "page"
	},
	{ // Object @ 1 index
		username: "andrew68",
		password: "1234"
	},
	{ // Object @ 2 index
		username: "k-man",
		password: "Bernie"
	}

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
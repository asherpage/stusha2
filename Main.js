var objPeople = [
	{ // Object @ 0 index
		username: "asher",
		password: "page",
		class: "english"
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

var currentUser=""
function testy(){
	for(let i = 0; i < objPeople.length; i++){
			if(currentUser == objPeople[i].username){
				document.getElementById("prac").innerHTML = "LETS SEE"
			}
		}
}
function getInfo() {

	var username = document.getElementById('username').value.toString();
	var password = document.getElementById('password').value.toString();
	currentUser = username;
	console.log(currentUser)
	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			location.href = "studentPage.html";
			console.log(username + " is logged in!!!")
			document.getElementById("prac").innerHTML = "lets see"
			document.getElementById("print").innerHTML = "lets see"
			
		}

		
	}
	
	console.log("incorrect username or password")
    document.getElementById('print').innerHTML = 'INVALID LOGIN';
}

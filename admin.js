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
	var username = document.getElementById('Uname').value;
	var password = document.getElementById('Pass').value;

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
            location.href = "stdsearch.html";
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return

		}
	}
    
	console.log("incorrect username or password")
    document.getElementById('print').innerHTML
                = 'INVALID LOGIN';

 
}
//search fucntion for student info
const data =[{firstName:"| Name: John", lastName:"Doe |", age:"Age:15", studentId:45},{studentId:78 ,firstName:"Merik", lastName:"Kuhn", age: "Age:17", }]
function search(srch){
	console.log(srch)
	for(let k = 0; k < data.length; k++ ){
		
		if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("prnt").innerHTML=`<p>Id:${data[k].studentId}   ${data[k].firstName} ${data[k].lastName} ${data[k].age}</p>`
			
		}
	}
}
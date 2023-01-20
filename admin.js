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
const data =[
	{studentId:1 , firstName:"John",lastName:"Doe",age:"14",grade: "9th"},
{studentId:2 ,firstName:"Merik", lastName:"Kuhn", age: "17",grade: "11th"},
{studentId:3 ,firstName:"Asher", lastName:"Page", age: "18",grade: "12th"},
{studentId:4 ,firstName:"Andrew", lastName:"silaghi", age: "17",grade: "11th"},
{studentId:5 ,firstName:"Anthony", lastName:"Lucas", age: "16",grade: "10th"},
{studentId:6 ,firstName:"Jordan", lastName:"Reed", age: "16",grade: "10th"},
{studentId:7 ,firstName:"Kyle", lastName:"Smith", age: "15",grade: "9th"},
{studentId:8 ,firstName:"Blake", lastName:"Reed", age: "17",grade: "11th"},
{studentId:9 ,firstName:"Emma", lastName:"Taylor", age: "18",grade: "12th"},
{studentId:10 ,firstName:"Alexandra", lastName:"Reed", age: "17",grade: "11th"},
{studentId:11 ,firstName:"Jadyn", lastName:"DeMarco", age: "16",grade: "10th"},
{studentId:12 ,firstName:"Jaci", lastName:"Robinson", age: "17",grade: "11th"}
]
function search(srch){
	console.log(srch)
	for(let k = 0; k < data.length; k++ ){
		
		if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("prnt").innerHTML=`<p>Id: ${data[k].studentId} | Name: ${data[k].firstName} ${data[k].lastName} | Age: ${data[k].age} | Grade: ${data[k].grade}</p>`
			
		}
				if(data[k].firstName==(srch)){
			console.log(data[k])
			console.log((srch))
			document.getElementById("prnt").innerHTML=`<p>Id: ${data[k].studentId} | Name: ${data[k].firstName} ${data[k].lastName} | Age: ${data[k].age} | Grade: ${data[k].grade}</p>`
			
		}
	}
}
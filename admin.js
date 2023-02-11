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

class person{
	constructor(id,firstName,lastName,age,grade,classOne){
	this.studentId =id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.grade = grade;
	this.classOne = classOne;
}
}
	let id = 13
function grab(){

	let firstName =document.getElementById("firstName").value;
	let lastName =document.getElementById("lastName").value;
	let grade =document.getElementById("grade").value;
	let age = "0"
	let per=new person(id, firstName, lastName, age, grade)
	id++;
	data.push(per)
	console.log(data)
}
function grab1(){
	console.log("hello")
}
const data =[
	{studentId:1 , firstName:"John",lastName:"Doe",age:"14",grade: "9th",classOne:"Algebra 1-2H",classTwo:"Biology",classThree:"English 1-2H",classFour:"P.E",g1s1:"87%",g2s1:"91%",g3s1:"72%",g4s1:"96%"},

{studentId:2 ,firstName:"Merik", lastName:"Kuhn", age: "17",grade: "11th",classOne:"English 5-6",classTwo:"US History",classThree:"Triginometry",classFour:"Art",g1s1:"",g2s1:"",g3s1:"",g4s1:""},

{studentId:3 ,firstName:"Asher", lastName:"Page", age: "18",grade: "12th",classOne:"English 7-8",classTwo:"AP stats",classThree:"Economy",classFour:"Forensic Science",g1s1:"",g2s1:"",g3s1:"",g4s1:""},

{studentId:4 ,firstName:"Andrew", lastName:"silaghi", age: "17",grade: "11th",classOne:"Art",classTwo:"English 5-6",classThree:"Algebra 3-4",classFour:"",g1s1:"",g2s1:"",g3s1:"",g4s1:""},

{studentId:5 ,firstName:"Anthony", lastName:"Lucas", age: "16",grade: "10th",classOne:"Earth Science",classTwo:"Geometry H",classThree:"English 3-4",classFour:"",g1s1:"",g2s1:"",g3s1:"",g4s1:""},

{studentId:6 ,firstName:"Jordan", lastName:"Reed", age: "16",grade: "10th",classOne:"Geometry",classTwo:"",classThree:"",classFour:"",g1s1:"",g2s1:"",g3s1:"",g4s1:""},

{studentId:7 ,firstName:"Kyle", lastName:"Smith", age: "15",grade: "9th",classOne:"Spanish 1-2",classTwo:"",classThree:"",classFour:"",g1s1:"",g2s1:"",g3s1:"",g4s1:""},

{studentId:8 ,firstName:"Blake", lastName:"Reed", age: "17",grade: "11th",classOne:"Algebra 1-2",classTwo:"",classThree:"",classFour:"",g1s1:"",g2s1:"",g3s1:"",g4s1:""},

{studentId:9 ,firstName:"Emma", lastName:"Taylor", age: "18",grade: "12th",classOne:"Spanis 101-102H",classTwo:"",classThree:"",classFour:"",g1s1:"",g2s1:"",g3s1:"",g4s1:""},
{studentId:10 ,firstName:"Alexandra", lastName:"Reed", age: "17",grade: "11th",classOne:"Forensic Science",classTwo:"",classThree:"",classFour:"",g1s1:"",g2s1:"",g3s1:"",g4s1:""}
]
function search(srch){
			document.getElementById("studentSpat").innerHTML=`No Student Found`
		document.getElementById("idSpat").innerHTML=`1`
		document.getElementById("gradeSpat").innerHTML=`2`
	console.log(srch)
	for(let k = 0; k < data.length; k++ ){

		if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("idSpat").innerHTML=`<p>(StudentID: ${data[k].studentId})</p>`

		if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("studentSpat").innerHTML=`<p> ${data[k].firstName} ${data[k].lastName}</p>`
			
		}
		if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("gradeSpat").innerHTML=`Grade: ${data[k].grade}</p>`
			
		}
		if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("classOne").innerHTML=`${data[k].classOne}</p>`
			
		}
		if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("classTwo").innerHTML=`${data[k].classTwo}</p>`
			
		}
				if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("classThree").innerHTML=`${data[k].classThree}</p>`
			
		}
				if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("classFour").innerHTML=`${data[k].classFour}</p>`
			
		}
		if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("g1s1").innerHTML=`${data[k].g1s1}</p>`
			
		}
		if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("g2s1").innerHTML=`${data[k].g2s1}</p>`
			
		}
				if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("g3s1").innerHTML=`${data[k].g3s1}</p>`
			
		}
				if(data[k].studentId==Number(srch)){
			console.log(data[k])
			console.log(Number(srch))
			document.getElementById("g4s1").innerHTML=`${data[k].g4s1}</p>`
			
		}
	}
}
}
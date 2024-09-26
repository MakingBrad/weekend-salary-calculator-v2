console.log("js working!")
let allDaEmployees = [];

function getFormData(event){
event.preventDefault()
//this pulls in all the info the user types in the form
    let firstName=document.querySelector("#firstNameInput").value
    let lastName=document.querySelector("#lastNameInput").value
    let idInput=document.querySelector("#idInput").value
    let title=document.querySelector("#titleInput").value
    let annualSalary=document.querySelector("#annualSalaryInput").value
//We will be storing each entry into an array of objects, so we can adjust the monthy total without too much sillyness
    let additionalEmployee ={
        firstName:firstName,
        lastName:lastName,
        idInput:idInput,
        title:title,
        annualSalary:annualSalary
    }
    allDaEmployees.push(additionalEmployee)
    console.log(allDaEmployees);
    calculateTotalMonthly()
    //console.log("this is the object spit out", additionalEmployee);
//this takes in the current value of the monthly total ( before we had an array of objects, I am keeping this here for my future notes)
    //**let currentMonthly = Number(document.querySelector("#monthlyAmount").innerText);
    //**console.log("The DOM shows this amount before adding", currentMonthly);
    //this divides the annualSalary by 12
    //**let newMonthlySalaryToAdd = annualSalary/12
//this adds the new monthly to the current monthly
 //   adjustedMonthlySalary = newMonthlySalaryToAdd+currentMonthly
   // console.log("The DOM shows this amount after adding", adjustedMonthlySalary);
//this should update the monthly total at the bottom
//define the location of the salary in the DOM
    
//set the data at this location to the new total for the monthly expenditure

//document.getElementById("monthlyAmount").innerHTML =`${adjustedMonthlySalary}`
    
//Log out everything for status check
    console.log(firstName);
    console.log(lastName);
    console.log(idInput);
    console.log(title);
    console.log(annualSalary);
//create the row location, build the row out, and make the innerHTML that row
//this "appends" that row into the table...more or less.
    let rowLocation = document.querySelector("#salaryTable");
    rowLocation.innerHTML +=`
    <tr>
        <td>${firstName} </td>
        <td>${lastName} </td>
        <td>${idInput} </td>
        <td>${title} </td>
        <td>${annualSalary} </td>
        <td> <button onclick="deleteRow(event)">Delete</button> </td>
    </tr>
    `;

//this code "resets" the input form, by setting the value to ""
    document.querySelector("#firstNameInput").value=""
    document.querySelector("#lastNameInput").value=""
    document.querySelector("#idInput").value=""
    document.querySelector("#titleInput").value=""
    document.querySelector("#annualSalaryInput").value=""
} //end of a really long function

//this function will delete a row, and update the total monthly on the DOM
function deleteRow(event){
    event.preventDefault()
//first I need to pull in the salary amount from this row I don't know how to do this...
//then I delete the row of data   
    let parentDiv = event.target.parentElement;
    let grandParentDiv = parentDiv.parentElement
//these logs are to make sure I know what I am removing
    console.log('parent', parentDiv);
    console.log('grandparent', grandParentDiv);
    
    //parentDiv.style.color='orange';
    grandParentDiv.remove();
}

function calculateTotalMonthly(){
    let annualTotal = 0
    for (let i = 0; i < allDaEmployees.length; i++) {
        annualTotal += allDaEmployees[i].annualSalary 
    }
    let monthlyTotal = annualTotal/12
    document.getElementById("monthlyAmount").innerHTML =`${monthlyTotal}`
    
}
//When we visit http://localhost:5001/url
//in our browser, express will call this function
// url is a variable here, it will change - think of it as a placeholder
app.get('url', function(req,res) {
    console.log('Request for /url was made');
    res.send(thingToSend)
})

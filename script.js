console.log("js working!")

function getFormData(event){
event.preventDefault()
//this pulls in all the info the user types in the form
    let firstName=document.querySelector("#firstNameInput").value
    let lastName=document.querySelector("#lastNameInput").value
    let idInput=document.querySelector("#idInput").value
    let title=document.querySelector("#titleInput").value
    let annualSalary=document.querySelector("#annualSalaryInput").value
//this takes in the current value of the monthly total
    let currentMonthly = Number(document.querySelector("#monthlyAmount").innerText);
    console.log("The DOM shows this amount before adding", currentMonthly);
    //this divides the annualSalary by 12
    let newMonthlySalaryToAdd = annualSalary/12
//this adds the new monthly to the current monthly
    adjustedMonthlySalary = newMonthlySalaryToAdd+currentMonthly
    console.log("The DOM shows this amount after adding", adjustedMonthlySalary);
//this should update the monthly total at the bottom
//define the location of the salary in the DOM
    let locationOfSalary=document.querySelector("#annualSalaryInput")
//set the data at this location to the new total for the monthly expenditure
    //previous syntax --> locationOfSalary.innerHTML=`${adjustedMonthlySalary}`
    document.getElementById("monthlyAmount").innerHTML =`${adjustedMonthlySalary}`
    
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

console.log("js working!")
//Clicking submit should do the following
//      1-pull in the info from the input boxes and get the values into JS
//          -InnerHTML and getElementID.value (use holding variables)
function getFormData(){
    let firstName=document.querySelector("#firstNameInput").value
    let lastName=document.querySelector("#lastNameInput").value
    let idInput=document.querySelector("#idInput").value
    let title=document.querySelector("#titleInput").value
    let annualSalary=document.querySelector("#annualSalaryInput").value

    console.log(firstName);
    console.log(lastName);
    console.log(idInput);
    console.log(title);
    console.log(annualSalary);

    let rowLocation = document.querySelector("#salaryTable");
    rowLocation.innerHTML +=`
    <tr>
        <td>${firstName} </td>
        <td>${lastName} </td>
        <td>${idInput} </td>
        <td>${title} </td>
        <td>${annualSalary} </td>
    </tr>
    `;
    return annualSalary;
    console.log(makeMonthlySalary(annualSalary));
    

}

function makeMonthlySalary(salary){
    let monthlyAmount = salary/12
    console.log("the addition to monthly should be", monthlyAmount)
};

//      2-Create the next row with a template literal
//          -Use a holding variable and use innerHTML to build the template literal (find syntax)
//      3-Attach the row to the top of the table (with the delete button)
//          -Select location in the DOM - use ID with table
//          -Use append using variable from #2
//      4-Update the value of the monthly expense
//          -Select by ID the number in the DOM that is the current expense
//          -Take the most recent annual, divide by 12 and then add to the current expense
//          -Attach this to the DOM using innerHTML
//      5-Clear out the info in the input boxes to 'null'
//          -GetElementID and use "" for each value.

//Clicking Reset should do the following:
//      1-Remove all of the rows from the table
//      2-Reset the monthly cost amount
//      3-Clear out the info in the input boxes to 'null'

//Clicking Delete should do the following:
//      1-Remove the existing row (that was clicked)
//      2-'pull in' the annual salary from the row and divide by 12
//      3- 'pull in' he existing monthly expense subtract 1/12 annual salary from the current total for monthly expense
//      4-Update the monthly expense to the new amount
//
// Function needed: emptyInputBoxes
function emptyForm(){
    //
}
// Function needed: updateMonthlyExpense
// Function needed: Delete row
// We are adding to the monthly total, subtracting from the monthly total, or erasing the monthly total
//***Key ids are as follows:
// "#firstNameInput"
// "#lastNameInput"
// "#idInput"
// "#titleInput"
// "#annualSalaryInput"
//starting out with event listener
//----
//I define the location I want the event listener to tie to with a variable
const submitButton = document.getElementById('submit');
//I attach the event listener
submitButton.addEventListener('click', function() {
    event.preventDefault()
    console.log("Submit was clicked!")
    getFormData()
})

//function getFormData(){
    //this will pull in the data from the form
    //will it format it into a table row? Dunno.
    //A delete button will need to be made as well
//}


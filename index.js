const table = document.querySelector('table');
const orderDiv = document.querySelector('.order-table')
const menuTable = document.getElementById('menu-table')
// console.log(menuTable) 

function totalOrders(){
    orderDiv.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
            </thead>   
            <tbody>
               <tr>
                    <td style="font-weight: 700;">Total</td>
                    <td style="text-decoration: italicize">Ksh. 0.00</td?
               </tr> 
            </tbody>
        </table>
    `
} 

// Defining Order button
// const orderButton = document.getElementById('orderBtn')
// console.log(orderButton)

// Order button Event listener
// orderButton.addEventListener('click', (event)=>{
//     const target = event.target
//     const parentNode = target.parentNode.parentNode
//     const price = event.target.parentNode.previousSibling
//     const priceValue = price.querySelector('span')
//     console.log(priceValue)


//     const userResponse = alert("Do you want to place this order?")

//     if (userResponse){
//         alert("You clicked YES!")
//         orderDiv.innerHTML = `
//         <table>
//             <thead>
//                 <tr>
//                     <th>Item</th>
//                     <th>Price</th>
//                 </tr>
//             </thead>   
//             <tbody>
//                <tr>
//                     <td style="font-weight: 700;">Total</td>
//                     <td style="text-decoration: italicize">Ksh. 0.00</td?
//                </tr> 
//             </tbody>
//         </table>
//     `


//     } else {
//         alert("You clicked NO!")
//     }
// })


// Add a click event listener to the table

// Add a click event listener to the table
menuTable.addEventListener("click", function (event) {
    // Check if the clicked element is a button with the id "orderBtn"
    if (event.target && event.target.id === "orderBtn") {
        // Get the row of the clicked button
        const row = event.target.closest("tr");

        // Find the name and price elements in the row
        const name = row.querySelector("td:first-child").textContent;
        const price = row.querySelector("span").textContent;

        // Create a new table row
        const newRow = document.createElement("tr");

        // Create table cells for name and price
        const nameCell = document.createElement("td");
        nameCell.textContent = name;

        const priceCell = document.createElement("td");
        priceCell.textContent = "Ksh. " + price;

        // Append name and price cells to the new row
        newRow.appendChild(nameCell);
        newRow.appendChild(priceCell);

        // Append the new row to the order table
        const orderTable = document.getElementById("table-order");
        orderTable.querySelector("tbody").appendChild(newRow);
    }
});



document.addEventListener('DOMContentLoaded', ()=>{
    totalOrders()
    
})
const table = document.querySelector('table');
const orderDiv = document.querySelector('.order-table')
const menuTable = document.getElementById('menu-table')

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

// Add a click event listener to the table
// menuTable.addEventListener("click", function (event) {
//     // Check if the clicked element is a button with the id "orderBtn"
//     if (event.target && event.target.id === "orderBtn") {
//         // Get the row of the clicked button
//         const row = event.target.closest("tr");

//         // Find the name and price elements in the row
//         const name = row.querySelector("td:first-child").textContent;
//         const price = row.querySelector("span").textContent;

//         // Create a new table row
//         const newRow = document.createElement("tr");

//         // Create table cells for name and price
//         const nameCell = document.createElement("td");
//         nameCell.textContent = name;

//         const priceCell = document.createElement("td");
//         priceCell.textContent = "Ksh. " + price;

//         // Append name and price cells to the new row
//         newRow.appendChild(nameCell);
//         newRow.appendChild(priceCell);

//         // Append the new row to the order table
//         const orderTable = document.getElementById('#table-order')
//         console.log(orderTable)
//         // orderTable.querySelector("tbody").appendChild(newRow);
         
//     }
// });

// Select all the "Order" buttons with the class name "orderBtn"
const orderButtons = document.querySelectorAll("#orderBtn");

// Get a reference to the table where the orders will be displayed
const tableOrder = document.getElementById("table-order").getElementsByTagName('tbody')[0];


// Add a click event listener to each "Order" button
orderButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the name and price from the current row
    const row = this.closest("tr");
    const name = row.querySelector("td:first-child").textContent;
    const price = row.querySelector("td span").textContent;
    // console.log(`row: ${row}, name: ${name}, price: ${price}`)

    // Create a new row for the table and populate it with the name and price
    const newRow = tableOrder.insertRow(-1); // -1 inserts the row at the end
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = price;

    newRow.appendChild(cell1)
    newRow.appendChild(cell2)
    // console.log(newRow)

    // Calculate and update the total price
    updateTotalPrice();
  });
});

// Function to update the total price
function updateTotalPrice() {
  const rows = tableOrder.getElementsByTagName("tr");
  let total = 0;

  for (let i = 0; i < rows.length; i++) {
    const priceCell = rows[i].getElementsByTagName("td")[1];
    if (priceCell) {
      const price = parseFloat(priceCell.textContent.replace("Ksh. ", ""));
      total += price;
    }
  }

  // Update the total price row in the table
  const totalRow = tableOrder.querySelector(".bottom-total");
  if (totalRow) {
    totalRow.querySelector("td:last-child").textContent = "Ksh. " + total.toFixed(2);
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
    // totalOrders()
    
})
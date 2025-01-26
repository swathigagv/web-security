// const allStocks = []; // Array to hold stock data
// let watchlistStocks = []; // Array to hold watchlist stocks

// document.addEventListener('DOMContentLoaded', () => {
//     const stockTableBody = document.getElementById('stock-table').querySelector('tbody');
//     const watchlist = document.getElementById('watchlist');
//     const searchInput = document.getElementById('search');

//     // Function to display stock table
//     function displayStockTable(stocks) {
//         stockTableBody.innerHTML = ''; // Clear previous data
//         stocks.forEach(stock => {
//             const tr = document.createElement('tr');
//             tr.innerHTML = `
//                 <td>${stock.name}</td>
//                 <td>$${stock.price.toFixed(2)}</td>
//                 <td class="${stock.change >= 0 ? 'positive' : 'negative'}">${stock.change}%</td>
//                 <td class="actions"></td>
//             `;
//             const actionsTd = tr.querySelector('.actions');

//             // Add or remove button logic
//             const button = document.createElement('button');
//             button.textContent = watchlistStocks.some(item => item.symbol === stock.symbol) ? 'Remove' : 'Add';
//             button.classList.add(watchlistStocks.some(item => item.symbol === stock.symbol) ? 'remove' : 'add');
//             button.addEventListener('click', () => {
//                 if (watchlistStocks.some(item => item.symbol === stock.symbol)) {
//                     watchlistStocks = watchlistStocks.filter(item => item.symbol !== stock.symbol);
//                 } else {
//                     watchlistStocks.push(stock);
//                 }
//                 updateWatchlist();
//                 displayStockTable(allStocks);
//             });
//             actionsTd.appendChild(button);
//             stockTableBody.appendChild(tr);
//         });
//     }

//     // Function to update watchlist
//     function updateWatchlist() {
//         watchlist.innerHTML = ''; // Clear previous items

document.getElementById('addStockForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const stockName = document.getElementById('stockName').value;
    const quantity = document.getElementById('quantity').value;
    const purchasePrice = document.getElementById('purchasePrice').value;

    // Here you would typically send this data to your PHP backend
    // For demonstration, we will just log it
    console.log({ stockName, quantity, purchasePrice });

    // Clear the form
    this.reset();
    $('#addStockModal').modal('hide');
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// signup page function here
// You can add any JavaScript functionality here if needed.
// For example, form validation or handling form submission.
document.querySelector('.signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  alert('Form submitted!'); // Replace this with actual form handling logic
});

//new dashboard function here
// Sample data for demonstration
const portfolioData = {
  totalValue: 15000,
  profitLoss: 2000,
  topStocks: [
      { name: "AAPL", value: 5000 },
      { name: "TSLA", value: 3000 },
      { name: "AMZN", value: 2000 }
  ]
};

// Function to update the dashboard
function updateDashboard() {
  document.getElementById('value-amount').innerText = `$${portfolioData.totalValue.toFixed(2)}`;
  document.getElementById('profit-amount').innerText = `$${portfolioData.profitLoss.toFixed(2)}`;

  const stockList = document.getElementById('stock-list');
  portfolioData.topStocks.forEach(stock => {
      const stockItem = document.createElement('div');
      stockItem.innerText = `${stock.name}: $${stock.value.toFixed(2)}`;
      stockList.appendChild(stockItem);
  });
}

// Initialize the dashboard
updateDashboard();
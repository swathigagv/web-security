<?php
// Replace with your Alpha Vantage API Key
define("API_KEY", "YOUR_ALPHA_VANTAGE_API_KEY");

// List of stocks to pick from
$stocks = ["AAPL", "GOOGL", "MSFT", "TSLA", "AMZN", "META", "NFLX", "NVDA", "BABA", "INTC"];

// Function to fetch stock prices
function getStockPrice($symbol) {
    $url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=$symbol&apikey=" . API_KEY;
    $response = file_get_contents($url);
    $data = json_decode($response, true);
    if (isset($data["Global Quote"]["05. price"])) {
        return floatval($data["Global Quote"]["05. price"]);
    }
    return 0.0; // Default to 0 if API fails
}

// Handle API call
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $selectedStocks = array_rand(array_flip($stocks), 5);
    $portfolio = [];
    $totalValue = 0;

    foreach ($selectedStocks as $stock) {
        $price = getStockPrice($stock);
        $portfolio[] = ["symbol" => $stock, "price" => $price];
        $totalValue += $price;
    }

    // Return portfolio as JSON
    header("Content-Type: application/json");
    echo json_encode(["portfolio" => $portfolio, "total_value" => $totalValue]);
    exit;
}
?>

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultDiv = document.getElementById('result');
    
    function performSearch() {
        const query = searchInput.value.trim();
        
        // Build the URL with query parameter
        let url = 'superheroes.php';
        if (query) {
            url += '?query=' + encodeURIComponent(query);
        }
        
        // Make the AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Display the result in the div (NO ALERT)
                resultDiv.innerHTML = xhr.responseText;
            } else {
                resultDiv.innerHTML = '<p class="error-message">Error loading data.</p>';
            }
        };
        
        xhr.onerror = function() {
            resultDiv.innerHTML = '<p class="error-message">Request failed.</p>';
        };
        
        xhr.send();
    }
    
    // Handle form submission (when Enter is pressed)
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from actually submitting
        performSearch();
    });
    
    // Handle button click
    searchButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent any default behavior
        performSearch();
    });
});
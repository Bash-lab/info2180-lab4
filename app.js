document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    
    searchButton.addEventListener('click', function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'superheroes.php', true);
        
        xhr.onload = function() {
            console.log('Response:', xhr.responseText); 
            if (xhr.status === 200) {
                // Parse the HTML response
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = xhr.responseText;
                
                // Extract all the <li> items (each is an alias)
                const listItems = tempDiv.querySelectorAll('li');
                
                // Combine all aliases into a single string
                let aliases = '';
                listItems.forEach(item => {
                    aliases += item.textContent.trim() + '\n';
                });
                
                // Show them in an alert
                alert(aliases || 'No aliases found.');
            } else {
                alert('Error fetching superhero data.');
            }
        };
        
        xhr.onerror = function() {
            alert('Request failed.');
        };
        
        xhr.send();
    });
});

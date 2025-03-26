// Function to load an HTML component
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load components
loadComponent('header', '../components/header.html');
loadComponent('footer', '../components/footer.html');

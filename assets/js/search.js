document.querySelector('.search-icon').addEventListener('click', function() {
    const searchBar = document.getElementById('searchBar');
    if (searchBar.style.display === 'none') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
});

const fruits = [
    'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 
    'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 
    'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 
    'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 
    'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 
    'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 
    'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 
    'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 
    'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 
    'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 
    'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 
    'Olive', 'Orange', 'Clementine', 'Mandarine', 
    'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 
    'Pear', 'Persimmon', 'Plantain', 'Plum', 
    'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 
    'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 
    'Salak', 'Satsuma', 'Soursop', 'Star fruit', 
    'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

function search() {
    const input = document.getElementById('search').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (input) {
        const results = fruits.filter(fruit => fruit.toLowerCase().includes(input));
        
        results.forEach(fruit => {
            const li = document.createElement('li');
            li.textContent = fruit;
            li.addEventListener('mouseover', () => highlightSuggestion(li));
            li.addEventListener('click', () => useSuggestion(fruit));
            suggestions.appendChild(li);
        });

        if (results.length > 0) {
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }
    } else {
        suggestions.style.display = 'none';
    }
}

function highlightSuggestion(suggestion) {
    const suggestions = document.querySelectorAll('#suggestions li');
    suggestions.forEach(li => li.style.backgroundColor = 'white');
    suggestion.style.backgroundColor = '#f0f0f0';
}

function useSuggestion(fruit) {
    document.getElementById('search').value = fruit;
    document.getElementById('suggestions').style.display = 'none';
}
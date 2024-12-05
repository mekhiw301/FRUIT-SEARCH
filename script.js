const fruits = [
    'Apple', 'Apricot', 'Avocado', 'Banana', 
    'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 
    'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Dragonfruit',
    'Elderberry', 'Grape', 'Grapefruit', 'Guava', 'Huckleberry',
    'Kiwi', 'Lemon', 'Lime', 'Mango', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon',  'Nectarine',
    'Olive', 'Orange', 'Clementine', 'Mandarine', 
    'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 
    'Pear', 'Plantain', 'Plum', 
    'Pineapple', 'Pomegranate', 'Raspberry', 'Star fruit', 
    'Strawberry'

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

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

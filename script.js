function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const foodCategory = document.querySelector('#food-category').value;
    
    const cuisineCheckboxes = document.querySelectorAll('input[name="cuisine-type"]:checked');
    const selectedCuisines = Array.from(cuisineCheckboxes).map(checkbox => checkbox.value);
    
    const content = document.getElementById('content');
            
    const answerElement = document.createElement('section');
    answerElement.className = 'p-4 border rounded m-4 bg-gray-50';
    answerElement.innerHTML = `
        <h3 class="text-lg font-semibold mb-2">Survey Response</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Favorite Food Category:</strong> ${foodCategory}</p>
        <p><strong>Preferred Cuisine Types:</strong> ${selectedCuisines.length > 0 ? selectedCuisines.join(', ') : 'None selected'}</p>
    `;
    
    content.parentNode.insertBefore(answerElement, content.nextSibling);
    
    document.getElementById('postForm').reset();
    return false;
}

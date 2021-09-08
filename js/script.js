//Took input value and process with button
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    toggleSpinner('block');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data));
} 

const displaySearchResult = books =>{
   console.log(books);
   
    const searchTotal = document.getElementById('search-total');
    const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `
            <p class="text-center">Total Books: ${books.numFound} </p>
        `;
        searchTotal.appendChild(totalDiv);
        
    const searchResult = document.getElementById('search-result');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${books.docs[0].cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-title">Book name: ${books.docs[0].title}</p>
              <p class="card-text">Author name: ${books.docs[0].author_name}</p>
              <p class="card-text">First published: ${books.docs[0].publish_date[0]}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
        toggleSpinner('none');
}

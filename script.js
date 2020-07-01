let add_book = document.querySelector('.add_book')

let remove = document.querySelectorAll('.remove_book')


//this block of code is used to remove elements from the book library
let remove_buttons=[];
remove.forEach(function(value){
    remove_buttons.push(value);
})
for (i=0;i<remove_buttons.length;i++){
    remove_buttons[i].addEventListener('click',remove_node);
}
function remove_node(e){
    console.log(e.target.parentElement.parentElement.setAttribute('class','remove_node'))
}

 
add_book.addEventListener('click',library)

function library(){
    let book_title_node = document.querySelector('.book_title')
    let author_name_node = document.querySelector('.author_name')
    let number_of_pages_node = document.querySelector('.number_of_pages')
    let status_node = document.querySelector('.status')
    console.log(book_title_node.value,author_name_node.value,number_of_pages_node.value,status_node.value)
    
    let book = document.createElement('div')
    book.setAttribute('class','book')
    document.querySelector('.display_books_container').appendChild(book)
    
    let book_heading = document.createElement('div')
    book_heading.setAttribute('class','book_heading')
    book.appendChild(book_heading)

    let book_content = document.createElement('div')
    book_content.setAttribute('class','book_content')
    book.appendChild(book_content)

    let p = document.createElement('p')
    p.textContent = "TITLE : "
    book_heading.appendChild(p)

    p = document.createElement('p')
    p.textContent = "AUTHOR : "
    book_heading.appendChild(p)

    p = document.createElement('p')
    p.textContent = "PAGES : "
    book_heading.appendChild(p)

    p = document.createElement('p')
    p.textContent = "STATUS : "
    book_heading.appendChild(p)

    p = document.createElement('p')
    p.textContent = book_title_node.value
    book_content.appendChild(p)

    p = document.createElement('p')
    p.textContent = author_name_node.value
    book_content.appendChild(p)
    
    p = document.createElement('p')
    p.textContent = number_of_pages_node.value
    book_content.appendChild(p)

    p = document.createElement('p')
    p.textContent = status_node.value
    book_content.appendChild(p)

    let remove_btn_container = document.createElement('div');
    remove_btn_container.setAttribute('class','remove_book_container');
    book.appendChild(remove_btn_container);
    let remove_btn = document.createElement('button')
    remove_btn.setAttribute('class','remove_book')
    remove_btn.textContent = "Remove"
    remove_btn_container.appendChild(remove_btn)

    remove_buttons.push(remove_btn)
    remove_buttons[remove_buttons.length-1].addEventListener('click',remove_node)
}
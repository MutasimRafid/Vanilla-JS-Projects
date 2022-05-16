console.log('Welcome to Rafid Notes app.');
showNotes();

//if user adds a note, add it to local storage
//if user clicks add button
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes); //adding local storage value(if there amy) in the array
    }

    notesObj.push(addTxt.value); //adding input value into the array
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = ""; //resetting the input field
    showNotes();
 
});


//Function to show elements from localStorage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } 
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element,index){
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    });
    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

//function to delete a note
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } 
    else {
        notesObj = JSON.parse(notes);
    }
    //replaces/deletes 1 element in that particular index 
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//search feature
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
});
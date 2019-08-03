

const fileInformation ={
  user_id: 1,
  firstName:`Gabby`,
  lastName:`Kostova`,


  noteInfor:
  [
  { note_id:1,  
    title:`Javascript workshop`, 
    content:{
      contenInfor:`#JavaScript was initially created to make web pages alive. The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads. Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run. In this aspect, JavaScript is very different from another language called Java.`,
      tagContent: true,
    },
    dateCreated: `04/02/2019`,
    dateModified: `05/02/2019`,
    tags:[
      {tag_id: 1, name: 'JavaScript', favourite: true, color: `#FF0000`},
      {tag_id: 2, name: 'Workshop', favourite: false, color:``}, 
      {tag_id: 3,name: 'Conference', favourite: false, color: `#F4D03F`},
    ]
  },

  {
    note_id: 2,
    title: 'Interface dev 1 class notes', 
    content:{
      contentInfor:'Usually, the javascript file is called script.js and placed in a folder called js.\nApply javascript as a <script src> and put as the last thing in the body to ensure the browser reads all the content before executing the javascript code e.g., <script src="myscripts.js"></script>.\nIf we have multiple js files attached, just attach them in chronological order in the html; e.g., data file first and then function file.\n',
      tagContent:false,
    },
    dateCreated: `05/15/2019`,
    dateModified: `06/13/2019`,
    tags:[
      {tag_id: 1, name: 'JavaScript', favourite: true, color: `#FF0000`},
      {tag_id: 4,name: 'gbc', favourite: false, color:``},
      {tag_id: 5,name: 'Semester 2', favourite: false, color: `#3498DB`},
    ]
  },

  {
    note_id: 3,
    title: 'Html class 6 May 2019', 
    content:{
      contenInfor:'HTML AND CSS are used for website presentation. Javascript is actually web version of actual programming code, meant to write applets for use on those websites. JavaScript is used to change the behavior and dynamic content of the website. HTML5 is used to prepare text and hence that it can be displayed on web-browser.',
      tagContent:false,
    },
    dateCreated: `01/21/2019`,
    dateModified: `03/21/2019`,
    tags:[
      {tag_id: 1, name: 'JavaScript', favourite: true, color: `#FF0000`},
      {tag_id: 4,name: 'gbc', favourite: false, color:``},
      {tag_id: 5,name: 'Semester 2', favourite: false, color: `#3498DB`},
      {tag_id: 6, name: 'html', favourite: true, color:``}, 
      {tag_id: 7,name: 'css', favourite: true, color:``},
    ]
  },

  {
    note_id: 4,
    title: 'Shopping list', 
    content:{
      contenInfor:'Eggs, milk, sugar, bananas, hazelnuts',
      tagContent:false,
    },
    dateCreated: `01/12/2018`,
    dateModified: `01/12/2019`,
    tags:[]

  },
],
};






//one file to HTML*************************************************************************************************
 const oneStringToHtml =(note)=>{
     let tag =``;
    if (note.tags.length>1){
      tag = `Tags:`
    }
    else if(note.tags.length==0){
      tag =``
    }
    else{
      tag = `Tag:`
    };

    let tagName =``;
    for(let i =0; i<note.tags.length;i++){
      tagName +=`<li class="edit-tag"><button class="delect-tag" data-noteid="${note.note_id}" data-tagindex="${i}">${note.tags[i].name} </button></li>`
    }
    
   
    let dropDownBtn=``;
    let dropDown =``;
  if(note.content.tagContent == true){
    dropDownBtn =``
     dropDown =`${note.content.contenInfor}`
    }
    else{
      dropDownBtn=`hide-icon`
    }

            

   return  `<li class="one-note" id="${note.note_id}">
            <div class ="check-box"><input type="checkbox" name="scales"><label for="scales"></label></div>
            <div><img src="img/file.svg" alt="file-icon"  class="icon-file"></div>
            <div class="file-info">
              <div id="note-title${note.note_id}">Name: ${note.title}</div>
              <div>Date Created: ${note.dateCreated}</div>
              <div>Date Modified:${note.dateModified}</div>
            </div>
            
            
            <div id="dp-btn-${note.note_id}"><button class="drop-down-btn" data-note="${note.note_id}"><img src="img/triangle.png" alt="triangle-drop-down-icon" class="icon-small ${dropDownBtn}" data-type="drop"></button ></div>
            <div class="edit-btn"><button class ="button-edit" id="edit-btn-${note.note_id}" data-edit ="${note.note_id}"><img src="img/edit.png" alt="edit-icon" class="icon-small"></button></div>
            <div class="drop-down-info change-text-font hide-icon" id="dd-${note.note_id}">${dropDown}</div>
            <div class="tag-section">${tag}
              <ul class="tag-in-grid ">${tagName}</ul>
            </div>
    </li>`
            
 };



//map related tag files into HTML******************************************************************************************
const printFilesToHtml =(a)=>{
  const $file = document.getElementById(`file`);
  $file.innerHTML=``;
  $file.innerHTML=a.map(oneStringToHtml).join(``);


//edit button funciton *********************************************************************

  document.querySelectorAll(`.button-edit`).forEach(btn=>{
    btn.addEventListener(`click`,event=>{
   
      document.getElementById(`edit-contaner`).classList.remove(`hide-icon`) 
      let editNoteNum = btn.dataset.edit
      editNote(allnote[allnote.findIndex(arr=>arr.note_id==editNoteNum)])
    })
  })



  // document.querySelectorAll(`.close-btn`).forEach(btn=>{
  //   btn.addEventListener(`click`,event=>{
  //     document.getElementById(`edit-contaner`).classList.add(`hide-icon`)  
  //   })
  // }) 
}



//printing tag files******************************************************************************************************

const printTagFiles = (tagNum)=>{
  //printFilesToHtml(fileInformation.noteInfor.filter(arr=>arr.tags.some(subEl=>subEl.tag_id===1)))

  const matchingNotes = fileInformation.noteInfor.filter(note => {
    // Look for a certain tag, if not found, findIndex will return -1, so we compare the inverse of -1 and return that boolean
    // Ex: If tag_id of 1 is found, findIndex will return the index >=0, so the function would return true because it does not equal to -1
    return note.tags.findIndex(tag => tag.tag_id == tagNum) != -1;
  });

  printFilesToHtml(matchingNotes);

}

printTagFiles(1);

//Question and solution(help from the teacher): how to addEventListener on button in JS（drop down button funciton）
document.getElementById(`file`).addEventListener(`click`, event => {

  const btn = event.target;

  // If what we clicked within the ul#file did not have a data-type="drop" assigned, then do not proceed
  if (btn.dataset.type != "drop") return;

  // Go up the DOM tree, find the .one-note parent, then go back down and toogle the dropdown
  btn.closest(`.one-note`).querySelector(`.drop-down-info`).classList.toggle(`hide-icon`);

});






//create edit note's name box to html ********************************************************************


  const editBoxToHtml =({title,note_id})=>{



   return ` 
    <div class="btn-close-edit"><button class="close-btn"><img src="img/close-btn.png" alt="close-btn" class="icon-small"></button></div>
    <div class="grid-start" id="edit-name-${note_id}" data-name="${note_id}">
      <label for="name">File name:</label>
      <input type="text" id="file-name-box-${note_id}" name="name" value="${title}">
    </div>
    <div class="save"><button class="save-btn" data-type="save">Save</button></div>`

  }


  
     localStorage.clear();
   
  
  //get item and set item with local storage*************************************
  const $printNote = document.getElementById(`edit-form`);

   const editNote =(note)=>{
    $printNote.innerHTML = ``
    $printNote.innerHTML = editBoxToHtml(note);
   }
   
   const getLocalStorage =()=>{
     let noteStr = localStorage.getItem(`note`)
     let noteArr = JSON.parse(noteStr)
      // console.log(noteArr)
     return noteArr;
   };

   const setLocalStorage=()=>{
     let noteStr=JSON.stringify(allnote)
      console.log(noteStr)
     localStorage.setItem(`note`,noteStr); 
   }
     
      
      let notes= fileInformation.noteInfor;

      let allnote = getLocalStorage()||notes

      
      
      
  // print out submit information******************************************************
      


     $printNote.addEventListener(`submit`,event=>{
      event.preventDefault();
      
        let selectNote = document.querySelector(`.grid-start`).dataset.name;
        allnote[allnote.findIndex(arr=>arr.note_id==selectNote)].title=$printNote.name.value;

      setLocalStorage();
      printTagFiles(1)

      document.getElementById(`edit-contaner`).classList.add(`hide-icon`)

    })


     
     
  //tag buttons delect function ******************************************************************

    



  document.querySelectorAll(`.delect-tag`).forEach(btn=>{
    btn.addEventListener(`click`,event=>{
   let noteid = btn.dataset.noteid;
   let tagindex =btn.dataset.tagindex
   
   allnote[allnote.findIndex(arr=>arr.note_id==noteid)].tags.splice(tagindex,1)
   console.log(allnote)
   setLocalStorage();
   printTagFiles(1)

   
    
  })
 })





    // $printNote.addEventListener('click',event=>{
    //   if(!event.target.matches('.edit-tag')) return;

    //   const tag_id = event.target..id;
    //   const note_id = event.target.closest('ul')..noteid;   
    //  })

      // Delete the tag_id from the note_id
      // Recall editNote(note_id)
      // Find the .one-note with .noteid, recall oneStringToHtml(node_id) and replace it




  //one method to make button clickable in JS*******************************(trick from teacher)

  // document.querySelectorAll('.drop-down-btn').forEach(btn => {
  //   btn.addEventListener(`click`, event => {
  //     const id = btn.dataset.note;
  //     document.getElementById(`dd-${id}`).classList.toggle('hide-icon');
  //   })
  // }
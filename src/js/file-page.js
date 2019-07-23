

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
      tag = `Tag Names:`
    }
    else if(note.tags.length==0){
      tag =``
    }
    else{
      tag = `Tag Name:`
    };

    let tagName =``;
    for(let i =0; i<note.tags.length;i++){
      tagName +=note.tags[i].name +`,`
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
                        
    
   
 

   return  `<li class ="check-box"><input type="checkbox" name="scales"><label for="scales"></label></li>
            <li><img src="img/file.svg" alt="file-icon"  class="icon-file"></li>
            <li class="file-info">
              <div>Name: ${note.title}</div>
              <div>Date Created: ${note.dateCreated}</div>
              <div>Date Modified:${note.dateModified}</div>
              <div>${tag}${tagName}</div>

            </li>
            <li><img src="img/edit.png" alt="edit-icon" class="icon-small"></li>
             <li id="dp-btn"><button ><img src="img/triangle.png" alt="triangle-drop-down-icon" class="icon-small ${dropDownBtn}"></button ></li>
              <li class="drop-down-info hide-icon">
               ${dropDown}
              </li>`


 };






//map related tag files into HTML******************************************************************************************
const printFilesToHtml =(a)=>{
  const $file = document.getElementById(`file`);
  $file.innerHTML=``;
  $file.innerHTML=a.map(oneStringToHtml).join(``);
}




//printing tag files******************************************************************************************************

const printTagFiles =()=>{
  printFilesToHtml(fileInformation.noteInfor.filter(arr=>arr.tags.some(subEl=>subEl.tag_id===1)))
}

printTagFiles();



//Question and problem: how to addEventListener on button in JS


// const showContent =()=>{
//   document.getElementsByClassName(`drop-down-info`).classList.remove(`hide-icon`);
//  }
//   document.getElementById(`dp-btn`).addEventListener(`click`,showContent)
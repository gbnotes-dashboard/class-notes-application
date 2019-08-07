//--------------------------------------//

//****** DOM LOCATIONS *********/

//--------------------------------------//

const $greeting = document.getElementById(`greeting`);            // greeting of the user
const $mycollections = document.getElementById(`my-collections`); //my collections 
const $mytopics = document.getElementById(`my-topics`);           //my topics


//--------------------------------------//

//****** HELPER FUNCTIONS *********/

//--------------------------------------//

//Function takes a tag_id and returns a tag object containing that id
const findTagById = (tag_id) => {
  return myTags.find ((tag) => {
    return tag.tag_id == tag_id;
  });
}


//Function takes a tag and returns a string of formatted html displaying this tag as a folder image with its properties: color, favourite status, name
const getTagAsHtml = ( t_id ) => {
 const t = findTagById(t_id);
  //if statement checks whether a tag has been favourited or not and displays the respective image (filled vs empty star);
  let star = ``;
  if(t.favourite) {
    star =`<img src="img/faved-icon.svg" alt="Remove from favourites button">`
  } else {
    star = `<img src="img/add-to-fav-icon.svg" alt="Add to favourites button">`
  }

  return `
    <li class="topic">
      <div class="topic-icon">
        <div class="image-link">
          <a href="files-under-folder.html" class="image-link">
            <img src="img/folder-icon-color.svg" alt="Topic folder">
          </a>
        </div>
        <button class="icon fav-btn" type="button" name="fav-btn" data-tag-id="${t.tag_id}">
          ${star}
        </button>
        <div class="tag-color pos-absolute ${t.color}"></div>
      </div>
      <h3>#${t.name}</h3>
    </li>
`
};


//--------------------------------------//

//****** LOCAL STORAGE *********/

//--------------------------------------//

// Function sets tags in local storage
const setTagsInLocalStorage = () => {  
  const tags_str = JSON.stringify(myTags);
  localStorage.setItem('tags', tags_str);
}

// Function gets tags from local storage
const getTagsFromLocalStorage = () => {
  const tags_str = localStorage.getItem('tags');
  const tags_arr = JSON.parse(tags_str);
  return tags_arr;
}

//Location of the tags array; default is local storage; if local storage is empty, get tags from existing modelled data.
const myTags = getTagsFromLocalStorage() || getCollectionsAndTags.tags;


//--------------------------------------//

//****** APPLICATION *********/

//--------------------------------------//

//Generate a user-specific greeting
$greeting.innerHTML = `Hello, ${getCollectionsAndTags.firstName}!`;

//All collections with their respective tags are generated as formatted HTML
  $mycollections.innerHTML = getCollectionsAndTags.collections.map (col => 
	`<div class="title-tab">
    <span class="tab-title">${col.name}</span>
  </div>
  <ul class="my-topics">
    ${col.tag_ids.map(getTagAsHtml).join(``)}
  </ul>`
  ).join(``);

console.log(myTags)

//All tags inside the tags array are generated as formatted HTML
  myTags.forEach((tag) => 
  {
    $mytopics.innerHTML += getTagAsHtml (tag.tag_id)
  });


//--------------------------------------//

//****** INTERACTIVE FUNCTIONALITY *********/

//--------------------------------------//

//function takes a fav button and its tag and changes the fav button's content (icon) depending on whether its tag has been favourited or not
const replaceFavIcon = (btn, tag) => {
  let star = ``;
  if(tag.favourite) {
    star =`<img src="img/faved-icon.svg" alt="Remove from favourites button">`
  } else {
    star = `<img src="img/add-to-fav-icon.svg" alt="Add to favourites button">`
  }
  btn.innerHTML = star;
}
//function takes a tag and changes the value of its favourite property to its opposite
const changeFavStatus = (tag) => {
    tag.favourite = !tag.favourite;
}

//create a function that changes the status and icon of the favourite button when the user clicks on it;
//add event listener to the body
addEventListener (`click`, (event) => {

  //inside the body, find the fav button the user had clicked; if no button was clicked, stop function here;
  const btn = event.target.closest(`button`);
  if (!btn.matches(`.fav-btn`)) return;

  //find the tag associated with the clicked fav button and assign it to a new variable;
  const tag = findTagById (btn.dataset.tagId);

  //change the favourite property of the tag
  changeFavStatus (tag);

  //update local storage with the new data
  setTagsInLocalStorage ();

  //change the icon of the fav button 
  replaceFavIcon (btn, tag);
});


  /**************************************************************
                Search by Tag Button
****************************************************************/

// Take the full set of tags, filter them down to only the ones where "name" matches our search query
// Lowercase the name and query to ensure a comparison match
// With the resulting filtered array, map each result to an HTML <li> using getTagAsHtml
// Join the results as one long string, then insert into #my-topics <ul>
const showMatchingTags = (query) => {

  const searchedTags = getCollectionsAndTags.tags.filter( prod => prod.name.toLowerCase().includes( query.toLowerCase() ) ).map(tag => getTagAsHtml(tag.tag_id)).join('');

  $mytopics.innerHTML = searchedTags;
}

document.getElementById(`search-form`).addEventListener(`submit`, (event) => {
  event.preventDefault();

  let q = document.getElementById(`search`).value;
  showMatchingTags(q);
   
});


//--------------------------------------//

//****** DOM LOCATIONS *********/

//--------------------------------------//

const $addNoteBtn = document.getElementById(`add-note-btn`) //add new note btn
const $popupCreateNewNote = document.getElementById(`popup-create-new-note`) //create new note popup
const $closePopupBtn = document.getElementById(`close-popup-btn`) //close pop up btn
const $seeFavBtn = document.getElementById(`see-fav-btn`) // see favourites button
const $favouritesSection = document.getElementById(`favourites-section`) //favourites section
const $myFavourites = document.getElementById(`my-favourites`) // favourited files
const $collectionsSection = document.getElementById(`collections-section`) //collections section
const $myTopicsSection = document.getElementById(`my-topics-section`) // topics section
const $untaggedSection = document.getElementById(`untagged-section`) // untagged files section
const $openSearchMenu = document.getElementById(`open-search-menu`) // open search menu
const $searchArea = document.getElementById(`search-area`) // search area
const $closeSearchArea = document.getElementById(`close-search-area`) // close search area
const $searchBtnQuery = document.getElementById(`search-btn-query`) // search btn 

//--------------------------------------//

//****** HELPER FUNCTIONS *********/

//--------------------------------------//


const checkIfFavAndPrint = () => {
  $myFavourites.innerHTML = ``;
  $favouritesSection.classList.toggle(`hide`);
  $collectionsSection.classList.toggle(`hide`);
  $myTopicsSection.classList.toggle(`hide`);
  $untaggedSection.classList.toggle(`hide`);
  myTags.forEach (tag => {
    if (tag.favourite) {    
      $myFavourites.innerHTML += getTagAsHtml (tag.tag_id);
    } 
  })
}


//--------------------------------------//

//****** BUTTONS *********/

//--------------------------------------//

//Open new note popup
$addNoteBtn.addEventListener(`click`, (event) => {
  $popupCreateNewNote.classList.toggle (`hide`);
});

//Close new note popup 
$closePopupBtn.addEventListener(`click`, (event) => {
  $popupCreateNewNote.classList.add (`hide`);
});

//Show favourites
$seeFavBtn.addEventListener(`click`, (event) => {
  checkIfFavAndPrint ();
});

//Open search menu 
$openSearchMenu.addEventListener(`click`, (event) => {
  $searchArea.classList.remove(`hide`);
  $closeSearchArea.classList.remove(`hide`);
  $openSearchMenu.classList.add(`hide`);
  $openSearchMenu.classList.remove(`icon`);
  $searchBtnQuery.classList.remove(`hide`);
});

//Close search menu 
$closeSearchArea.addEventListener(`click`, (event) => {
  $searchArea.classList.add(`hide`);
  $closeSearchArea.classList.add(`hide`);
  $openSearchMenu.classList.remove(`hide`);
  $closeSearchArea.classList.remove(`icon`);
  $searchBtnQuery.classList.add(`hide`);
});

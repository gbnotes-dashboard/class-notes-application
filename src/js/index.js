console.log(getCollectionsAndTags);

const $greeting = document.getElementById(`greeting`);
const $mycollections = document.getElementById(`my-collections`);
const $mytopics = document.getElementById(`my-topics`);

$greeting.innerHTML = `Hello, ${getCollectionsAndTags.firstName}!`;

const getTagAsHtml = ( t ) => {

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
        <button class="icon fav-btn" type="button" name="fav-btn">
          ${star}
        </button>
        <div class="tag-color pos-absolute ${t.color}"></div>
      </div>
      <h3>#${t.name}</h3>
    </li>
`
};

$mycollections.innerHTML = getCollectionsAndTags.collections.map (col => 
	`<div class="title-tab">
    <button class="expand-btn" type="button" name="expand-btn">
      <span class="tab-title">${col.name}</span>
        <img class="expand-icon icon" src="img/expand-icon.svg" alt="Expand section icon">
    </button>
  </div>
  <ul class="my-topics">
    ${col.tags.map(getTagAsHtml).join(``)}
  </ul>`
).join(``);


getCollectionsAndTags.tags.forEach((tag) => 
  {
    $mytopics.innerHTML += getTagAsHtml (tag)
  });

  /**************************************************************
                Search by Tag Button
****************************************************************/

// Take the full set of tags, filter them down to only the ones where "name" matches our search query
// Lowercase the name and query to ensure a comparison match
// With the resulting filtered array, map each result to an HTML <li> using getTagAsHtml
// Join the results as one long string, then insert into #my-topics <ul>
const showMatchingTags = (query) => {

  const searchedTags = getCollectionsAndTags.tags.filter( prod => prod.name.toLowerCase().includes( query.toLowerCase() ) ).map(getTagAsHtml).join('');

  $mytopics.innerHTML = searchedTags;
}

document.getElementById(`search-form`).addEventListener(`submit`, (event) => {
  event.preventDefault();

  let q = document.getElementById(`search`).value;
  showMatchingTags(q);
   
});
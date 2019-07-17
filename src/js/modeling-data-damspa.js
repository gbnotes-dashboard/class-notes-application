/**************************************************************
                          Data
****************************************************************/

const tags = [
  {tag_id: 1, name: 'JavaScript', favourite: true, color: `#FF0000`},
  {tag_id: 2, name: 'Workshop', favourite: false}, 
  {tag_id: 3,name: 'Conference', favourite: false, color: `#F4D03F`}, 
  {tag_id: 4,name: 'gbc', favourite: false},
  {tag_id: 5,name: 'Semester 2', favourite: false, color: `#3498DB`}, 
  {tag_id: 6, name: 'html', favourite: true}, 
  {tag_id: 7,name: 'css', favourite: true},
  {tag_id: 8, name: 'Photoshop', favourite: false}, 
  {tag_id: 9,name: 'Javascript', favourite: false}, 
  {tag_id: 10, name: 'School Information', favourite: true, color: `#FF0000`}, 
  {tag_id: 11, name: 'Illustrator', favourite: false},
  {tag_id: 12, name: 'Theory Embalming', favourite: false, color: `#28B463`}, 
  {tag_id: 13, name: 'Embalming Practical', favourite: false}, 
  {tag_id: 14, name: 'Illustrator', favourite: true},
],

const collection = [
  { collection_id: 1, name: 'Javascript Website', tag_id: [1, 6, 7] },
  { collection_id: 2, name: 'Draw a Game Controller', tag_id: [8, 9] },
  { collection_id: 3, name: 'Funeral Services', tag_id: [12, 13] },
]


/**************************************************************
                   Storage Data
****************************************************************/

const $bntTags = document.getElementById(`viewTags`); 




/**************************************************************
                Search by Name Button
****************************************************************/

const showMatchingProds = (query) => {
  showAllProducts( tags.filter( prod => prod.name.toLowerCase().includes( query.toLowerCase() ) ) );

  $bntTags.type.visibility =  `hidden`;
}

  document.getElementById(`search`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  let q = document.getElementById(`search`).query.value;
   

  
  showMatchingProds(q);

 
});

/*****************************************************************
        allTags
****************************************************************/

const showAllTags =(ary) => {
  $bntProducts.type.visibility =  `hidden`;
  document.getElementById(`productA`).innerHTML = ary.map(formatProduct).join(``);
}

/*****************************************************************
        Tag Format
****************************************************************/
const tag_folder = (tag) => {
  let fav =``; 
  if (product.isInStock == false) {
      fav = ` <button class="icon fav-btn" type="button" name="fav-btn">
      <img src="img/add-to-fav-icon.svg" alt="Add to favourites button">
    </button>`;
  }
  else {
      fav = `<button class="icon fav-btn" type="button" name="fav-btn">
      <img src="img/faved-icon.svg" alt="Remove from favourites button">
    </button>`;
  }   
  
  return `
<ul class="my-topics">
<li class="topic">
  <div class="topic-icon">
    <div class="image-link">
      <a href="files-under-folder.html" class="image-link">
        <img src="img/folder-icon-color.svg" alt="Topic folder">
      </a>
    </div>
    <a> ${fav} </a>
    <div class="tag-color pos-absolute bg-red"></div>
  </div>
  <h3>${tag.name}</h3>
</li>`;}
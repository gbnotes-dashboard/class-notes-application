console.log(getCollectionsAndNotes);

// const $greeting = document.getElementById(`greeting`);
// // const $collectionSection = document.getElementById(`collections-section`);

// $greeting.innerHTML = `Hello, ${getCollectionsAndNotes.firstName}!`;

// const getTagAsHtml = ( t ) => {

// 	let star = ``;
//   if(t.favorite) {
//     star =`<img src="img/add-to-fav-icon.svg" alt="Add to favourites button">`
//   } else {
//     star = `<img src="img/faved-icon.svg" alt="Remove from favourites button">`
//   }
//   return `
//     <li class="topic">
//       <div class="topic-icon">
//         <div class="image-link">
//           <a href="files-under-folder.html" class="image-link">
//             <img src="img/folder-icon-color.svg" alt="Topic folder">
//           </a>
//         </div>
//         <button class="icon fav-btn" type="button" name="fav-btn">
//           ${star}
//         </button>
//         <div class="tag-color pos-absolute bg-red"></div>
//       </div>
//       <h3>${t.name}</h3>
//     </li>
// `
// }


// $collectionSection.innerHTML = getCollectionsAndNotes.collections.map (col => 
// 	`<li>
// 		${col.name}: ${col.tags.map(getTagAsHtml).join(‘\n‘)}
// 	</li>`
// ).join(‘/n’);


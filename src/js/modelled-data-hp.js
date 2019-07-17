const getCollectionsAndNotes = {
    user_id: 1,
    firstName: `Gabby`,


    collections: [
      {
        collection_id: 1, 
        name: `Intro Web`, 
        tags: [
          {tag_id: 1, name: `javascript`, favourite: true, color: `red`},
          {tag_id: 6, name: `html`, favourite: true},
          {tag_id: 7, name: `css`, favourite: true}
        ]
      }
    ],
    

    notes: [
      {
        note_id: 1,
        title: 'Javascript workshop', 
        content: 'JavaScript was initially created to make web pages alive. The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads. Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run. In this aspect, JavaScript is very different from another language called Java.',
        dateCreated: `04/02/2019`,
        dateModified: `05/02/2019`,
        tags: [
          {tag_id: 1, name: 'javascript', favourite: true, color: `red`},
          {tag_id: 2, name: 'workshop', favourite: false}, 
          {tag_id: 3, name: 'conference', favourite: false, color: `yellow`}, 
        ]
      },

      {
        note_id: 2,
        title: 'Interface dev 1 class notes', 
        content: 'Usually, the javascript file is called script.js and placed in a folder called js.\nApply javascript as a <script src> and put as the last thing in the body to ensure the browser reads all the content before executing the javascript code e.g., <script src="myscripts.js"></script>.\nIf we have multiple js files attached, just attach them in chronological order in the html; e.g., data file first and then function file.\n',
        dateCreated: `05/15/2019`,
        dateModified: `06/13/2019`,
        tags: [
          {tag_id: 1, name: `javascript`, favourite: true, color: `red`},
          {tag_id: 4, name: 'gbc', favourite: false},
          {tag_id: 5, name: 'Semester2', favourite: false, color: `blue`}, 
        ]
      },

      {
        note_id: 3,
        title: 'Html class 6 May 2019', 
        content: 'HTML AND CSS are used for website presentation. Javascript is actually web version of actual programming code, meant to write applets for use on those websites. JavaScript is used to change the behavior and dynamic content of the website. HTML5 is used to prepare text and hence that it can be displayed on web-browser.',
        dateCreated: `01/21/2019`,
        dateModified: `03/21/2019`,
        tags: [
          {tag_id: 1, name: `javascript`, favourite: true, color: `red`},
          {tag_id: 4, name: 'gbc', favourite: false},
          {tag_id: 5, name: 'Semester 2', favourite: false, color: `blue`}, 
          {tag_id: 6, name: `html`, favourite: true},
          {tag_id: 7, name: `css`, favourite: true}
        ]
      },

      {
        note_id: 4,
        title: `Shopping list`, 
        content: `Eggs, milk, sugar, bananas, hazelnuts`,
        dateCreated: `01/12/2018`,
        dateModified: `01/12/2019`,
        tags: [
        ]
      },
    ]
}

# week8project
 week 8 next.js project blog

 difficulties with this project 

 my connection string has been null since i started inputing my backend elements at the end of friday and over the weekend.
 //-feedback from first part of console log db ref line 13//
 BoundPool {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  options: {
    connectionString: undefined,
    max: 10,
    maxUses: Infinity,
    allowExitOnIdle: false,
    maxLifetimeSeconds: 0,
    idleTimeoutMillis: 10000
  },

//error occuring upon await //
Unhandled Runtime Error

Error: An error occurred in the Server Components render but no message was provided

//
  
 varcel over the weekend suspended me for suspision of being a bot or abusive(was aquitted they said they on the site they were invesigating it so i was waiting but then i sent a desprate email monday and it was sorted by 11pm
 varcel failed to build becuse "Build failed because of webpack errors" , and 4 modules not found and unable to resolve

 what went well:
 i worked hard on responsive design of the page and formatting and for the most part it went really well however i was unable to add the design elements for the forms and buttons as i implimented then while i was working on the backend
 all sql querys were tested and work within supabase, all values passed into querys wuth #$ so as soon as the connection string issue is solved all data should be passed accordingly
 all redirections worked as they should (i hashed out the DB querys and was able to test it that way and was also able to make sure the data was being passed in the form via console logs)
 external images appear to be working on every page (thanks to khash's cool suggestion in the demo)
 nav bar is in seporate componant and called before the children of the page in the layout so its outside of the margins set for the content
 each post display box on click redirects to ui/page/id where id should be whatever value is passed in the map of the post and they flex display along a content box that is responsive to screen size, on a view below 400px width the post box size is increaced which creates a very streamlined look(i was able to test this with place holders that were hard coded)

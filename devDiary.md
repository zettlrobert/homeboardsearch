04.01.2018
1. created Repository
2. created hbs-view with create-react-app
3. created rootserver
  4. installed express for routing
  5. installed firebase-admin for firebase authentification
6. created firebase project hombeboardsearch id: hombeboardsearch
7. in firebase project create service account
      - rootserver -> role owner
8. include in index.js
    - require express
    - require firebase auth
    - define routes
9. Help in App.js --> lookup superagent and search...

06.01.2018
1. deleted some react files
2. installed react-sidenav https://www.npmjs.com/package/react-sidenav
3. isntalled react-icons-kit https://www.npmjs.com/package/react-icons-kit

09.01.2018
1. installed firebase
2. set up firebase authentification
3. display LandingPage if not logged in
4. cleaning up directory look into app.css and index.css(removable?)
5. created dir Landingpage and Landingpage file
7. created Authentification directory for SignIn Options
different Authentification Methods (Federated Identity provider integration)
https://firebase.google.com/docs/auth/?authuser=0
6. Firebase Google SignIn https://firebase.google.com/docs/auth/web/google-signin?authuser=0
7. //CSS Modules unlock
      1. npm run eject on hbs-view
      2. scroll du modules
      3. find test: /\.css$/,
      4. in options set:
      modules: true
      5. add
      localIdentName: '[name]__[local]__[hash:base64:5]'
      6. go to webpack.config.prod
      7. search for css loader
      8. add	                  
      importLoaders: 1,

      modules: true,

      localIdentName: '[name]__[local]__[hash:base64:5]'
      
  8. Worked on Login and content

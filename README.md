# All Together

### Project Objectives

Create a video game website which adds users and displays usernames and the # of games they have played
1) Create form to add users
    * Input fields for user's first name, last name, username
    * User's # of games played is automatically 0
    * Do not accept user if username is not unique
        * Display error message if user attempts to add
    * Do not accept user if a field is empty
        * Disable submit
2) Display list of usernames and # of games played
    * List of usernames and their # of games played
    * Create button to toggle between showing/hiding # of games played

### My Build

Following these steps: [Thinking in React Guide](https://reactjs.org/docs/thinking-in-react.html)

My Component Hierarchy:

```
|- App
|-- TeamTalimaTeammates
    state { teammates }
|--- AddTeammate
     props { teammates, AddTeammate }
     state { firstName, lastName, username, error }
|--- TeammatesBoard
     props { teammates }
     state { showGames }
|---- ToggleGamesPlayed
      props { gamesDisplayed, toggleDisplay }
|---- TeammateDisplay
      props { username, numGames, showGames }
|----- GamesPlayedDisplay
       props { numGames }
```


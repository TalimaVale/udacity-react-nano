# All Together

### Project Objectives

Create an interactive local chat application with 2 windows, username selection, and color-coded messages
1) Modularize provided template
    * Create ChatWindow, MessageHistory, SendMessage components
    * Compose static skeleton of application
2) Determine state and props
    * Apply state
    * Pass through props including callbacks

### My Build

Following these steps: [Thinking in React Guide](https://reactjs.org/docs/thinking-in-react.html)

My Component Hierarchy:

```
|- App
   state { users, messages }
|-- ChatWindow
    state { usernameInput, hasUser, owner }
    props { addUser, messages, sendMessage }
|--- MessageHistory
     props { messages, owner }
|--- SendMessage
     state { messageInput }
     props { isDisabled, sendMessage }
```
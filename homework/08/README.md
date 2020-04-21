# Homework 8 - SofaScore Frontend Academy

Goal of this homework is exploring React Router. This homework is part of the project so it will be time well spent.

## Task

Complete Login screen (if not yet completed) and on successful login redirect user to main page of an app. User data received on login should be stored in redux store.
App should not be accessible for not logged in users. Those users should be handled properly (redirect to login page, show message and redirect, ...).
Logged in user will have token in redux store. Redux store can also be persisted to allow users to chose "remember me" login option. Those users will have persisted token (via redux-persist) and can be let into application if their stored token is valid (`POST /check-token` route on an API). 

### Help

If you have question about homework or need help, contact me.

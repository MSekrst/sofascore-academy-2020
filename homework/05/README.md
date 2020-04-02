## Homework 5 - SofaScore Frontend Academy

Goal of this homework is exploring React Hooks. This homework will be later reused as part of the final project.

## React project setup

We will use Create React App, just like in previous homework. [Instructions for CRA initialization in previous homework](https://github.com/MSekrst/sofascore-academy-2020/tree/master/homework/04#react-project-setup).

## Task

Similar to Homework 1 - Your task is to make Login screen (this login screen will later used for your project).
Try to use hooks we've covered so far, also handle edge cases (empty fields, incorrect credentials, ...).

**API only receives and sends JSON requests/responses, even errors are returned as JSON.**

To complete login process you have to provide `username` and `password` that user inserted. Credentials are then sent to
`https://private-leagues-api.herokuapp.com/api/login`. Note that route only receives POST requests with correct `Content-Type`.

Dummy user is already created in the database (`username` is `test-user` and `password` is `test-user-password`) so use this credentials to archive successful login.

## Help

If you need help with homework, have trouble wrapping your head around some concept we've covered in lessons also feel free to contact me and we will clarify any confusions.

I would also want to remind you to submit your PRs earlier, so your homework can iterate more (there will be time for multiple code reviews, 1 on 1 video reviews, etc.).

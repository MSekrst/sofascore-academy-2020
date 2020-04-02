# Project

As discussed on class, final project will be Private Leagues application.
This document contains general information about project. Document provides mostly my advice to you (developers) with few rules to follow. Rules are not set in stone so if you thing some technology would better suit you fell free to discus it with me. In the same note if any user story feels weird for your domain or not beneficial in your domain feel free to discus it with me and we will thing of better user story for you.

Actual naming of the application is left to developers.

Further in this document:

- [Basic domain introduction](#domain)
- [User stories](#user-stories)
- [UI Design tips](#design-tips)
- [List of project technologies that should be used](#technologies)
- [Project structure tips](#project-structure)
- [Testing instructions](#testing)
- [API description](#api)
- [Deployment instructions](#deployment)

## Domain

Main domain is left to developers. Further in this text you will find some generic domain entities that could be applied to many domains.

Basic entities are:

- **User** - Person using the application
- **League** - League in which users compete between themselves (football, tennis, chess, e-sports, card games, quiz, cocktail making, or any other activity where users can compete and has some final result). If "League" doesn't fit desired activity it can be changed to more suitable word (e.g. group, gang, ...).
  Leagues contain multiple events.
- **Event** - Game, meeting, or similar event. Events are grouped in the league.

If you find domain confusing, fell free to contact me and I will give my best to explain domain better to you.

If you have no inspiration which domain to cover you can also contact me and we will have brainstorming session.

## User stories

User stories are sentences from users perspective. They can be taught of as users requirements as they don't specify technical side of project. Technical side is left to developers and is part of their freedom. Note that user stories doesn't contain design information (also left to developers).

Following is the list of user stories. Stories in bold are required, stories in italic are further improvement and developers will decide if any of them should be implemented. Developers also can put themselves in users position and add additional stories that would be beneficial to application.

#### Stories:

UI

- **User should be able to use app on mobile device**
- **User should be able to use app on computer screen**
- _User can change application theme (dark / light)_

LOGIN

- **User can login in application with `username` and `password`**
- _User can choose to remember his login information for instant login next time`_
- _User can register to application with unique `username` and `password`_

LIST OF LEAGUES

- **User can see league (leagues)**
- **User can add event to a league**
- **User can see league details of a league**
- _User can delete league_
- _User can administrate league (have admin rights)_
- _User can change only leagues with admin rights_

EVENT

- **User can add new event**
- **User can see event details**
- **User can add events score**
- _User can modify event_
- _User can modify event with admin rights_
- _User can add other users as event participants_
- _User can add detailed event scores (by period, game, ...)_
- _User can add additional event details (location, terrain type, ...)_

USER

- **User can see own profile**
- _User can change password and username_
- _User can see other users profiles_

## Design

UI design is totally left to developers. Only constraints are in UI library and frameworks department. This project is great opportunity to learn foundational CSS and HTML skills that will be useful throughout your whole career, so usage of Bootstrap, Foundation or any other 3rd party framework, library is forbidden.

### Design Tips

If you are not 100% how should something look like, feel free to borrow some ideas from other web pages. If you want more cutting edge designs try to find inspiration on [Dribble](https://dribbble.com/).

Keep in mind that simple design is easier to implement and often looks clean.

Simple design tips:

- Don't incorporate many different colors (e.g. use black, white and simple color highlight)
- Focus on spacing of elements (let elements to "breathe")
- Avoid unnecessary borders and separators (use space (negative space), or shadow as separator)
- Focus on mobile layout (mobile layout is easy scalable to bigger screens, other way around is often more difficult)

## Technologies

Technologies used in project:

- [React.js](https://reactjs.org/) - main
- CSS - styling
  - **OPTIONAL:** [Sass / SCSS](https://sass-lang.com/), [Styled-components](https://styled-components.com/)
- [Redux](https://redux.js.org/) - state management
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) - routing
- [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - testing
- **OPTIONAL:**
  - [TypeScript](https://www.typescriptlang.org/) - type checking

Optional technologies can be selected to provide extra challenge and experience with various concepts (type checking, CSS in JS, CSS preprocessor).

## Project Structure

This chapter is informational and opinionated, so as such can be taken as advice.

In my experience structure with `components`, `modules`, `api` and `utils` have proven to be superior as application parts can be separated by usage and specificity.

Folders are placed in `src` folder.

Definitions:

- `components` - Components that are domain agnostic and could exist in any application regardless of its domain (e.g. Button, Checkbox, ...). Those components are basic building blocks of application and more complex modules. Component should not use other components as they should be atomic and basic.
- `modules` - Modules are domain bound units that serve specific purpose (e.g. LoginForm, UserProfile). Modules usually produce side-effects and are responsible for logic and presentation part of an application
- `api` - Api folder contains route definitions and api methods(e.g. `postLogin`, `getLeagues`, `getUser`, ...). Api also includes utilities specific to API (e.g. `getJson`, `postJson`, `parseResponse`, ...)
- `utils` - Utilities are common helpers, types, test boilerplate (e.g. `capitalizeString`, `numberSort`, ...)

## Testing

Write tests where it makes sense. Reducers are core logic and should be fully tested. Basic components can also be easily tested. Testing more complex components will uncover most bugs but is more complex, so try writing few complex tests to get grasp of testing problems (test integration of more components, proper event handling, etc.). Test are good indicator of code architecture quality. If component or function can be easily tested that indicates that architecture is good and vice versa.

## API

Backend API will be available with basic documentation. API will try to cover most user stores, but if developers feel the API is missing some features, features can be added to an API, just contact me.

API is separate repository so detailed API info will be there.

[API Repository](https://github.com/MSekrst/private-leagues-api)

## Deployment

When application gets to final stages, it would be great to think of a deployment possibilities. Deployment will allow users to access application via Internet connection.

There are many free deployment providers to choose from ([Zeit Now](https://zeit.co), [Netlify](https://www.netlify.com/)), [Heroku](https://heroku.com).

If you need further help with deployment I can assist you as I have some limited experience with Zeit Now.

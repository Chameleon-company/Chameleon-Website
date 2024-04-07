# CHAMELEON (Website Project) 3

The central repository for the Chameleon front_end_project (react.js) and back_end_project (node.js).

To get started, clone the repo. Then run `npm ci` from the root.

The repo is organized as a monorepo, . and follows this structure:

```
├── back_end_project             # All API to be created here
│   ├── back_end_project
│   ├── controllers
│   ├── proxy-api
│   ├── routes
│   └── services
├── front_end_project            # Customer facing website
│   ├──node_modules
│   ├── public
│   │   ├── AboutUs
│   │   ├── Footer
│   │   ├── Projects
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── about
│   │   │   ├── calendar
│   │   │   ├── card
│   │   │   ├── news
│   │   │   ├── notificationComp
│   │   │   ├── portfolio_card
│   │   │   ├── projects
│   │   │   ├── resources
│   │   │   └── shared
│   │   ├── constants
│   │   ├── layouts
│   │   │   ├── footer
│   │   │   └── header
│   │   ├── pages
│   │   │   ├── Chatbot
│   │   │   ├── about
│   │   │   ├── calendar
│   │   │   ├── contact
│   │   │   ├── email_newsletter_forms
│   │   │   ├── faq
│   │   │   ├── hello
│   │   │   ├── homepage
│   │   │   ├── login
│   │   │   ├── news
│   │   │   ├── projects
│   │   │   ├── report
│   │   │   ├── reset_password
│   │   │   ├── resources
│   │   │   ├── signup
│   │   │   ├── user_account_portal
│   │   │   └── utils
│   └── tailwind.config.js
└── package-lock.json
```

Both `back_end_project` and `front_end_project` are workspaces. Most actions, such as installing new npm packages, can and should be performed at the respective folder and not in the root of the project. Specific workspaces can be targeted from the root directory using `cd <workspace>`.

e.g. To install a package to the `front_end_project`,  `cd front_end_project` then `npm i`

To run the front end project locally, from the root project run `cd front_end_project && npm run start`
To run the back end project locally, from the root project run `cd back_end_project && npm run start`

Note: Running `npm add <package>` will install it to the root . T.

---

## :computer: Development

From the root, run `npm run devall` to launch both node server and react app.

From the root, run `npm run server` to launch node server alone. This can be used by API developers to test their api , through POSTMAN.

Development should follow the [Feature branch git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

**:warning: Important: :warning:**

> Never commit directly to `main`

**:point_right: Note:**:

> When pulling the latest from github, you may need to run `npm install` if any packages were added or removed in past commits. If you are experiencing errors unrelated to the code you are writing (or before writing any), try running `npm install`.

---

## :100: Code Quality

### :pencil: Linting

Code quality is enforced by ES Lint which is configured as an custom eslint plugin shared across the entire project in `eslintrc.js`.
Each package/app requires their own `.eslintrc.js` file.

- Components, Component directories, Component files, and Stories all use `PascalCase / UpperCamelCase`
- Variables and functions use `camelCase`
- Single quotes for strings
- Do not use string interpolation for css classes
- Do not use CSS-in-JS, StyledComponents or Emotion CSS

## :crossed_swords: Git etiquette

### Branching

Branches are used for isolated feature development and should **always branch from the source they intend to merge into**. This means that a branch created from `main` must always end up in `main`.

Using the example branches of `main`-> `feature-1` -> `feature-2`...

- ❌ **do not** merge `feature-1` into `main` before `feature-2` is merged.
- ❌ **do not** merge `feature-2` directly into `main`, only its parent branch.
- ✅ **do** branch `feature-2` from `main` since it should not depend on `feature-1`

> **_NOTE_** if it's entirely necessary to merge `feature-1` before `feature-2`, ensure that no manual commits are made in `feature-2` between the last commit & merge commit to `main` of `feature-1`.

### Commit messages

There are no hard constraints imposed on commit messaging, instead the following guidelines show a best-practice approach to producing consumable commit messaging.

The **preferred** format for a commit message looks like this. Note that only `body` is required:

```sh
# format...
"type?(scope?): body..."

# examples...
"fixed some issue"
"fix: fixed some issue"
"fix(US-123): fixed some issue"
"fix(component): fixed some issue"
```

- `type` refers to what kind of commit is being made. Some example values are:

```js
[
  "build", // related to build processes
  "chore", // small cleanup activities or other pedantry
  "ci", // related to continuous integration activities
  "docs", // documentation work
  "feat", // feature work
  "fix", // bugfixes or hotfixes
  "perf", // performance tuning & optimization
  "refactor", // code refactoring
  "revert", // reverting previously committed changes.
  "style", // styling changes
  "test", // changes to tests
];
```

- `scope` provides context to the commit type, most commonly a TRELLO ticket or some project name.
- `body...` refers to the bulk of the commit message, which can break up into **header** and **footer** sections delimited by newlines.
  - A **header** is the body section on the first line of the commit message
  - A **footer** is entered a full newline separated from the header and may contain any length of UTF-8 content.

## :books: Library Docs

**React Bootstrap** - [Docs](https://react-bootstrap.github.io/)

## :copyright: Licenses

To see all licenses for the project run `npx license-checker --summary`

or see [license-checker docs](https://www.npmjs.com/package/license-checker) for more options

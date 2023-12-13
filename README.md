## :gear: Setup

1. `git clone https://github.com/adhxabre/bionic-cypress.git`
2. cd to `bionic-cypress` folder and run `npm install`

## :heavy_check_mark: Run tests

- If you installed Cypress via npm:

  - cypress test runner (cypress **open**):

    - **`npm run cy:open:web`** OR `cypress open --env device=web` (change web to mob to switch to mobile view)

  - cypress **headless mode** (cypress run):
    - `npm run cy:run:web` OR `cypress run --env device=web`

- If you installed Cypress zip:
  - import **`bionic-cypress`** folder and you are good to go

## :bulb: Information

#### :test_tube: Tests

:file_folder: Tests are located in `cypress/e2e` folder

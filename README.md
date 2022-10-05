# AdminAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
Install json-server with command `npm install -g json-server`
Also run in separate terminal `json-server --watch db.json` and add to `db.json` this code:
```json
{
  "productList": [
    {
      "name": "RR Wraith",
      "category": "electronics",
      "date": "2022-10-07T21:00:00.000Z",
      "freshness": "Brand new",
      "price": 350000,
      "comment": "123",
      "id": 2
    }
  ]
}
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

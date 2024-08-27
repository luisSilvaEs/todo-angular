# TodoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Documenting creation process

1. Create a new project: `ng new`

   - We are asked for the project name, name can have dashes, underscore, letters and numbers, name given: **todo-angular**
   - Then we are asked about the stylesheet format to use. We can select among CSS, SASS and LESS. In this case we selected CSS
   - Do you want to enable server side rendering and Static Site Generation, we typed **N**

2. Install Boostrap as dependency:

   - Download B `npm i boostrap`
   - Add CSS file from node_modules folder into the **angular.json** file

3. Create UI: basic Bootstrap form and table into the **todolist.component.html** file

4. Create _Template-Driven form_ for a Standalone component
   - Add _FormsModule_ to imports in **todolist.components.ts**
   - Modify `<form></form>` in the template (HTML file) to convert this form into a _template-driven form_ by adding the directive: **ngForm**

## References

- [To-Do List in Angular with source code in GitHub.](https://www.youtube.com/watch?v=ZoZ8z7J_SyE)
- [Forms Angular](https://angular.dev/guide/forms)
- [Angular Template Driven Forms example](https://www.tektutorialshub.com/angular/angular-template-driven-forms/)

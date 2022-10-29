![image](https://user-images.githubusercontent.com/38674801/198814466-2e8c38c7-048d-4ed6-a10c-20e32411f65c.png)
# Applicant homepage
  - User register (via Login page)
  - User login (navbar button on top)
  - Job generated on main homepage
  - Search by possition (search bar)
  - Click on information area of selected job list to see more detail informations
  - Apply can be done using overlay informational details or direct button apply now on selected job
  - Before applying, appliant can include cover letter.
  
![image](https://user-images.githubusercontent.com/38674801/198814513-e26ac38c-cea9-482a-bd5a-1540b0acf2e4.png)
# Personal Detail
  - can be accessed after login, name will be appeard on top right corner of navbar
  - Contain of appliant's personal informations
  - Divided by education section, experience section, skill section, applied job list, and All personal info.
  - Edit personal button info for update basic information
  - Skill and credential can be update by clicking the body of the column
  - Skill delete or add can be done in the spot
  - Add Education and Experience button only appear in personal information, update and delete available on the right side

![image](https://user-images.githubusercontent.com/38674801/198814547-bdd69153-856c-4527-9704-8fddc161a8af.png)  
# Apllied job
  - Contain all jobs related to the appliant, include informations
  - Status changed after confirmation on admin side
  - If appliant status not accepted by recruiter, banner color will change to red.




# Directory tree
![image](https://user-images.githubusercontent.com/38674801/198814592-fb6f22ea-b1c9-4247-b1c7-225c796617f4.png)
```sh
Applicant component 
  - Homepage component (homepage job list for applicant)
```

```sh
 Core Component
  - Footer component
  - Header component (empty)
```

```sh
Job component (realted job CRUD component dump in here)
```

```sh
Shared Component (related to services)
  - Services 
  - Shared Modul (service provider, import & export module)
```

```sh
App routing
```


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

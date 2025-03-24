# Employee Creator

An application made with React to provide a clean interface to manage employees in a HR system. Allows users to create, update and delete employee records.

### Features

### Installation Instructions

### MVP ✅

[Link to MVP requirement page](https://github.com/nology-tech/aus-post-course-guide/blob/35aab8256d69ffd490a74d7ed8c77e7270bcd887/projects/employee-creator/README.md)

### Design 🎨

Created prototype design in [Figma](https://www.figma.com/design/ZcyhJtN2GkvpDQURIPZ3sz/Employ.?node-id=0-1&t=EpDyO8akqToht9kP-1)

![screenshot](/src/assets/employFigma.png)

### Packages utilised 📦

Front-End

- Tanstack React-Query v5.68 [https://tanstack.com/query/latest]
- React Hook Form v7.54.2 [https://react-hook-form.com/]
- React Redux v9.2 [https://react-redux.js.org/]
- SASS embedded v1.86 [https://www.npmjs.com/package/sass-embedded]
- zod v.3.24.2 [https://github.com/colinhacks/zod]
- React Router v7.3 [https://reactrouter.com/home]

### Changelog 📅

##### 18-03-25

- Created react/vite project and github repo
- Installed packages
- Setup redux store.ts file and setup Provider for app
- Created wireframe in Figma
- Styled Landing page, created Button and Footer components
- Added Current Employees page
- Created logo component

##### 19-03-25

- Added routing between pages with react-router
- Moved Header content into new Header component
- Employee details page UI created
- Create new employee page added
- Input components created
- Additional page styling

##### 20-03-25

- Created Spring API backend
- Configured dependencies and application properties file
- Added Webconfig IP whitelist
- Created SQL table in MySQL workbench
- Setup Employee entity and repo
- GetAll Employees endpoint created
- Created employee service and query to fetch data on front-end
- Mapping employees data to employee cards
- GetById endpoint created, created new query for individual employee pages
- Updated routing
- Mapping employee data to employee details page
- Implemented ModelMapper in backend
- Employee creation endpoint added (updated service and controller, added CreateEmployeeDTO)
- Creating new collection/runner in postman to batch create employees

##### 21-03-25

- Created delete employee endpoint in API backend
- Implemented react hook form in Input component
- Setup Create Employee Form to post to API
- Created deletion service in frontend and linked to delete buttons on Employee card and details page
- New 'edit' page created with routing
- New updateEmployee endpoint created in backend w/ model mapping
- Added update service to frontend and implemented function in edit page

### Future Plans ✈️

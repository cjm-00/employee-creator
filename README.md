# Employee Creator

An application made with React to provide a clean interface to manage employees in a HR system. Allows users to create, update and delete employee records.

### Features

### Installation Instructions

### MVP 🏆

[Link to MVP requirement page](https://github.com/nology-tech/aus-post-course-guide/blob/35aab8256d69ffd490a74d7ed8c77e7270bcd887/projects/employee-creator/README.md)

### Design 🎨

Created prototype design in [Figma](https://www.figma.com/design/ZcyhJtN2GkvpDQURIPZ3sz/Employ.?node-id=0-1&t=EpDyO8akqToht9kP-1)

![screenshot](/src/assets/employFigma.png)

### Packages utilised 📦

Front-End

- Tanstack React-Query v5.68 [https://tanstack.com/query/latest]
- React Hook Form v7.54.2 [https://react-hook-form.com/]
- SASS embedded v1.86 [https://www.npmjs.com/package/sass-embedded]
- React Router v7.3 [https://reactrouter.com/home]
  <!-- - zod v.3.24.2 [https://github.com/colinhacks/zod] -->
  <!-- - React Redux v9.2 [https://react-redux.js.org/] -->

### Kanban ✅

Project was planned out with a Kanban board hosted on [Trello](https://trello.com/b/CWgg3O0h/employee-creator)

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

##### 24-03-25

- Used defaultValues prop when initializing form for edit page to prefill Employee data in inputs
- Added query mutations for create, update and delete to have cached data refetched on updates
- Setup page rerouting after Employee creation, update or delete
- Added create new employee button to Employees list
- Created modal component
- Setup DeleteModal component to ask for confirmation before deletion from list page or details page
- Select component created and added to forms
- Added type and pattern validation props to input component
- Added formState error data as prop for useForm initialization on Create and edit pages
- Added text to input component to display error message from react hook form error data, also added error prop to input components
- Updated Employee forms input types to better reflect data
- Implemented data validation rules for Employee forms

#### 28-03-25

- Created NotificationModal and Modal variations
- Added notifications for errors on Create, Read, Update and Delete of employees
- Created Loading component and added load state management of data

#### 29-03-25

- Moved Create Form and Edit Form logic and components into separate EmployeeForm component
- Added EmployeeForm variants and ternary logic for 'create' or 'edit'
- Updated Create and Edit pages
- Created Not Found page and setup routing
- Updated service and controller for getAll employees to send pages instead of a list
- Updated front-end services to receive both employeeData and totalPage info
- Updated query on Employees page for new structure of incoming data
- Created Pagination component and styling, coded logic for totalpages, page change buttons, page change limits
- Implemented pagination component on Employees page

### Future Plans ✈️

- Maven test suite integration
- Form Dynamism, show/hide fields based on above input responses
- Filter/Sort employees in list
- Picture upload

# Simple Task Manager   

Simple Angular Task Manager application with the following features:

1. Create a task with a title and optional description
2. Edit already existing task 
3. Delete a task
4. Complete a task
5. See a list of tasks

# Prerequisites
- Node.js 
- npm package manager
- Running API layer (https://github.com/FalconSocial/frontend-assignment/blob/master/API_DOC.md)

# How to run it locally
1. Clone the [repository](https://github.com/radostinamangarudova/task-manager-angular) to your local machine:
```bash
$ git clone https://github.com/radostinamangarudova/task-manager-angular
```

2. Run `npm install` inside the downloaded/cloned folder:
```bash
$ npm install
```

3. Start the dev server by running the command below. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
```bash
$ ng start
```
more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Troubleshooting
Angular CLI provides a development server that runs on localhost:4200 by default so if you are using a back-end server that runs on a different domain, you may have CORS issues if your server is not configured properly.

Even if your backend is running on localhost, it will be listenning on a different port, which is treated as a different domain. This occurs CORS Issues in an angular app that could be fixed as follows: https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9


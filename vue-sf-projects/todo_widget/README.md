## VUE-SALESFORCE WIDGET TODO APP
This is a sample project to develop a salesforce widget using vue.js. This project also uses Firebase as the cloud storage.

### Installation
Before started, you need to prepare your data source (This project is using firebase firestore as the storage)

Create your firebase account and generate your credentials

Before init the vue project, make sure you are in `todo_widget` directory

Run `npm install`

Create .env file, you can copy the .env.sample for the template, and change the creds to your firebase acc creds

Run `npm run serve` to check whether it works or not

### Deploy to Prod
1. Run `npm run build`

2. Copy all content in `dist/` folder to `vue_salesforce_widget/force-app/main/default/staticresources/SfVueTodoWidget`

3. Authenticate with your Sf Org `sfdx force:auth:web:loging`, login via browser

4. Once you've logged in Run `sfdx force:source:deploy -x manifest/package.xml`

### WIP
- Add Unit Test
- Implement CI/CD

### Resources
**[Getting Started with Firebase Firestore](https://firebase.google.com/docs/firestore/quickstart)**

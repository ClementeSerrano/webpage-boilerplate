# Website boilerplate

Cool and fast to deploy website boilerplate to start your own website.

The contact form is adapted to use using Sendgrid's SMTP services and the production deployment adapted to App Engine of Google Cloud Platform.

## Built With

- [Meteor](https://www.meteor.com) - Dev platform and serverside framework.
- [React](https://react.com/) - Clientside framework.

## Local deployment

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node >v8.11.3.
- Npm >5.10.0
- Meteor >1.7.0.3
- Git.
- [Sendrid account](https://sendgrid.com/) (for email sending in contact form).

### Cloning and running

First of all clone the repo in your local machine by running:

```
$ git clone [REPO_URL]
```

After you enter to the directory of the project (`$ cd [PROJECT_NAME_ROOT_FOLDER]`), install node dependencies by running:

```
$ npm install
```

Once all dependencies are installed, run the Meteor project with the command:

```
$ meteor
```

You can see the app running on your `localhost:3000` browser link.

## GCP deployment

These instructions will guide yo to deploy the app in GCP system.

### Prerequisites

- [GCP Account and Project](https://cloud.google.com/).
- Billing enabled in the GCP project.
- [Google Cloud SDK](https://cloud.google.com/sdk/) in your local machine.

### Deploying

After installing `gcloud SDK` in your machine, login with your Google Admin Account:

```
$ gcloud auth login [USER@YOURDOMAIN.COM]
```

(it could be `.cl`, `.com`, `.io`, etc).

Verify if you are in the correct `gcloud` account by typing `$ gcloud auth list` and notice that there is an `*` in the configured account.

Set `gcloud` to run on your GCP project:

```
$ gcloud config set project [YOUR_PROJECT_ID]
```

Once your in your GCP project, deploy the app by running:

```
$ npm run deploy
```

Then go to `https://[YOUR_PROJECT_ID].appspot.com` to see the app running in GCP App Engine.

**All these terminal instructions are considering that the Meteor project is equiped with `Dockerfile`, `app.yaml` and `-dockerignore` files provided in this repo. If not, you'll need to run `$ gcloud beta app gen-config --custom` and modify `Dockerfile` and `app.yaml` files according to [The final tutorail used for deployment](https://forums.meteor.com/t/deploy-meteor-to-google-app-engine-2017/36171/3). **

### Useful tutorials and links

- [Official GCP Meteor deploy tutorial](https://cloud.google.com/community/tutorials/run-meteor-on-google-app-engine).
- [The final tutorail used for deployment](https://forums.meteor.com/t/deploy-meteor-to-google-app-engine-2017/36171/3), in order to fix multiple bugs generated using the Official GCP Meteor deploy tutorial.
- [Sendrid Dash](https://app.sendgrid.com/) to see email sending statistics.
- [Official Sendgrid Meteor integration tutorial](https://sendgrid.com/blog/send-email-meteor-sendgrid/)

## Relevant notes

- To import assets, I install the Meteor package `nathantreid:static-assets` into `.meteor/packages`.

## Authors

- [Clemente Serrano](https://github.com/ClementeSerrano)

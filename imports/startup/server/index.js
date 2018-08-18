import { Meteor } from "meteor/meteor";
import "../../api";

Meteor.startup(() => {
  process.env.MAIL_URL =
    "smtp://sendgrid_usr@mail.com:sendgrid_pw@smtp.sendgrid.net:2525";
});

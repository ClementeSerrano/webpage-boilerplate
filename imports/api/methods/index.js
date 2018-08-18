import { Meteor } from "meteor/meteor";
import { Email } from "meteor/email";

Meteor.methods({
  sendEmail(to, from, subject, html) {
    this.unblock();

    Email.send({ to, from, subject, html });
  }
});

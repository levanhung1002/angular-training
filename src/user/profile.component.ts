import { Component, VERSION } from "@angular/core";
import { User } from "./user";
@Component({
  selector: "profile-user",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class UserProfile {
  user: User;
  constructor() {
    this.user = {
      name: "Le Van Hung",
      email: "Hung.levan@nashtechglobal.com",
      avatar:
        "125501193_708928806422744_4661900962090475826_n.jpg"
    };
  }
}

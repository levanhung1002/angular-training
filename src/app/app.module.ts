import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UserProfile } from "../user/profile.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, UserProfile],
  bootstrap: [AppComponent]
})
export class AppModule {}

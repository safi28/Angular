import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user/user.component";
import { ProfileComponent } from "./profile/profile.component";
import { UserRoutingModule } from "./user-routing.module";
import { ReactiveFormsModule, FormGroup } from "@angular/forms";
import { FooterComponent } from "../core/footer/footer.component";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [UserComponent, ProfileComponent],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, CoreModule],
  exports: [ProfileComponent],
  
})
export class UserModule {}

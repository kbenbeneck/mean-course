import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularMaterialModule } from "../angular-material.module";
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from "./auth-routing";

@NgModule ({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}

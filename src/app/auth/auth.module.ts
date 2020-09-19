import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
// Auth Components
import { LoginComponent } from './components/login/login.component';
import { AdminProfRegisterComponent } from './components/admin-prof-register/admin-prof-register.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';


@NgModule({
  declarations: [
    LoginComponent,
    AdminProfRegisterComponent,
    StudentRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

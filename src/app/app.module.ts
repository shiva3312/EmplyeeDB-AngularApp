import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeDetailsComponent } from './about/employee-details/employee-details.component';
import { EmployeeListComponent } from './about/employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './about/employee-list/employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateformComponent } from './about/updateform/updateform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeComponent,
    HeaderComponent,
    UpdateformComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

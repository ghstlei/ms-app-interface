import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { JobPositionComponent } from './job-position/job-position.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'employee-leave', component: EmployeeLeaveComponent},
  { path: 'job-position', component: JobPositionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

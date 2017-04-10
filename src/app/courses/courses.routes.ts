import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './../core/auth/auth-guard.service';
import { CoursesComponent } from './courses';
import { CourseEditComponent } from './course-edit';

const routes: Routes = [
  { path: '', component: CoursesComponent, canActivate: [AuthGuardService] },
  { path: 'new', component: CourseEditComponent, canActivate: [AuthGuardService] },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

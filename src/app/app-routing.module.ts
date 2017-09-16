import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { ClassComponent } from './class/class.component';
import { PupilComponent } from './pupil/pupil.component';
import { NotesComponent } from './notes/notes.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LogoutComponent } from "./logout/logout.component";
import { LoginService } from "./login.service";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',       component: LoginComponent    },
    { path: 'logout',      component: LogoutComponent,    canActivate: [LoginService] },
    { path: 'class',       component: ClassComponent,     canActivate: [LoginService] },
    { path: 'class/:id',   component: ClassComponent,     canActivate: [LoginService] },
    { path: 'teacher',     component: TeacherComponent,   canActivate: [LoginService] },
    { path: 'teacher/:id', component: TeacherComponent,   canActivate: [LoginService] },
    { path: 'pupil',       component: PupilComponent,     canActivate: [LoginService] },
    { path: 'pupil/:id',   component: PupilComponent,     canActivate: [LoginService] },
    { path: 'notes',       component: NotesComponent,     canActivate: [LoginService] },
    { path: 'dashboard',   component: DashboardComponent, canActivate: [LoginService] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }

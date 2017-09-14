import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { ClassComponent } from './class/class.component';
import { PupilComponent } from './pupil/pupil.component';
import { NotesComponent } from './notes/notes.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',      component: LoginComponent },
    { path: 'logout',     component: LogoutComponent },
    { path: 'class',      component: ClassComponent },
    { path: 'teacher',    component: TeacherComponent },
    { path: 'pupil',      component: PupilComponent },
    { path: 'notes',      component: NotesComponent },
    { path: 'dashboard',  component: DashboardComponent}
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

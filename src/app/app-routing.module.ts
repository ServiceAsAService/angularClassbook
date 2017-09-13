import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { ClassComponent } from './class/class.component';
import { PupilComponent } from './pupil/pupil.component';
import { NotesComponent } from './notes/notes.component';
import { LoginComponent } from './login/login.component';
    
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',      component: LoginComponent, },
    { path: 'class',      component: ClassComponent },
    { path: 'teacher',    component: TeacherComponent },
    { path: 'pupil',      component: PupilComponent },
    { path: 'notes',      component: NotesComponent }
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
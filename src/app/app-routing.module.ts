import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacademicaComponent } from './components/academica/editacademica.component';
import { NewacademicaComponent } from './components/academica/newacademica.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectsComponent } from './components/projects/editproyects.component';
import { NewproyectsComponent } from './components/projects/newproyects.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [{path:"", component:HomeComponent},{path:"login", component:LoginComponent}, { path: 'nuevaexp', component: NewExperienciaComponent},  { path: 'editexp/:id', component: EditExperienciaComponent}, { path: 'academica', component: NewacademicaComponent}, { path: 'editaca/:id', component: EditacademicaComponent}, { path: 'skills', component: NewSkillComponent}, { path: 'editskill/:id', component: EditSkillsComponent}, { path: 'proyectos', component: NewproyectsComponent}, { path: 'editproy/:id', component: EditproyectsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

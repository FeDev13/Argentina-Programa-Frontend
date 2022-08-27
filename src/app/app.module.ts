import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'




import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AcademicaComponent } from './components/academica/academica.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { interceptorProvider } from './service/interceptor-service';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewacademicaComponent } from './components/academica/newacademica.component';
import { EditacademicaComponent } from './components/academica/editacademica.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    RedesComponent,
    BannerComponent,
    AboutComponent,
    ExperienciaComponent,
    AcademicaComponent,
    SkillsComponent,
    ProjectsComponent,
    HomeComponent,
    LoginComponent,
    EditExperienciaComponent,
    NewacademicaComponent,
    EditacademicaComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

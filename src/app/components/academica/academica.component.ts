import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { TokenService } from 'src/app/service/token.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-academica',
  templateUrl: './academica.component.html',
  styleUrls: ['./academica.component.css']
})
export class AcademicaComponent implements OnInit {

  educacion: Educacion[] = [];

constructor(private educacionS: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarAcademica();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAcademica(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarAcademica();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newproyects',
  templateUrl: './newproyects.component.html',
  styleUrls: ['./newproyects.component.css']
})
export class NewproyectsComponent implements OnInit {

  nombreP: string;
  descripcionP: string;

  constructor(private sProyectos: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP);
    this.sProyectos.save(proyectos).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("error al cargar datos");
        this.router.navigate(['']);
      }
    )
  }

}

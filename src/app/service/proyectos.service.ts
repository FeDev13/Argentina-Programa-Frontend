import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyURL = "https://backendfedericorobledo.herokuapp.com/proyectos/"

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.proyURL + 'lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.proyURL + `detail/${id}`);
  }

  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.proyURL + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.proyURL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proyURL + `delete/${id}`);
  }
}

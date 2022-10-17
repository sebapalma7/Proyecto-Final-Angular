import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from '../models/alumno';
import { DialogComponent } from "../dialog/dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { listaAlumnos } from '../models/alumno';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  dataInicial =listaAlumnos

  ELEMENT_DATA = new MatTableDataSource<Alumno>([])

  columnas: string[] = ['nombre', 'dni', 'turno', 'acciones'];
    
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataInicial
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.ELEMENT_DATA.filter = valorObtenido.trim().toLocaleLowerCase();
  }
  borrar (id:number){
    let position = this.dataInicial.findIndex(element => element.id == id)
    this.dataInicial.splice(position,1)
    this.ELEMENT_DATA.data = this.dataInicial
  }
  openDialog(){
    let dialog = this.dialog.open(DialogComponent, {
      width: '50rem',
    });
    dialog.afterClosed().subscribe(res =>{
      this.dataInicial.push(
        {
          ...res,
          id:this.dataInicial.length+1
        }
      )
    this.ELEMENT_DATA.data = this.dataInicial
    })
  }
}

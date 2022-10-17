export interface Alumno {
    nombre: string;
    apellido: string;
    dni: string;
    turno: string;
    id: number;
}
export let listaAlumnos: Alumno[] = [
    {nombre: 'Sebastián', apellido: 'Palma',dni: '41669403', turno: 'tarde', id: 1},
    {nombre: 'Raúl', apellido: 'Preto', dni: '32556987', turno: 'mañana',  id: 2},
    {nombre: 'José', apellido: 'Fernandez', dni: '43233658', turno: 'mañana', id: 3},
    {nombre: 'Carlos', apellido: 'Heredia', dni: '30255874', turno: 'tarde', id: 4},
    {nombre: 'Enzo', apellido: 'Gallardo', dni: '32648789', turno: 'tarde', id: 5},
    {nombre: 'Marcelo', apellido: ' Perez', dni: '32446879', turno: 'mañana', id: 6},
  ]
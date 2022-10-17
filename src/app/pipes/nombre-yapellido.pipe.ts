import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreYApellido'
})
export class NombreYApellidoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value + ' ' 
  }

}

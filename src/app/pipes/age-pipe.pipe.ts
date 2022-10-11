import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipe implements PipeTransform {

  transform(birthdate:Date): number {
    //today date
    let today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear()
    return age;
  }
}

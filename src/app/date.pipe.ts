import { Pipe, PipeTransform } from '@angular/core';
import { Medicalhub } from 'src/app/models/Medicalhub';
import { MedicalhubService } from 'src/app/medicalhub.service';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  today:number = Date.now();

}

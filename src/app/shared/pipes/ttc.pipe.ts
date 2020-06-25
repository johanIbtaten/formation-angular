import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/client';

@Pipe({
  name: 'ttc'
})
export class TtcPipe implements PipeTransform {

  transform(value: Client, ...args: any[]): any {
    if (value) {
      return value.ca * (1 + value.tva / 100);
    }
    return null;
  }

}

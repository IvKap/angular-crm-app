
import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/Customers';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    customers: Customer[],
    propName: keyof Customer,
    value: string
  ): Customer[] {
    let filterCustomers: Customer[] = [];
    for (let customer of customers) {
      if (
        (customer[propName] as string)
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        filterCustomers.push(customer);
      }
    }

    return filterCustomers;
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Array<string>, args: any[]): any[] {
    const sortField = args[0];

    const sortDirection = args[1];
    let multiplier = 1;

    let mappedValue: any;

    if (sortDirection === 'desc') {
      multiplier = -1;
    }

    mappedValue = value.map((item: any) => {
      let mappedGa = item.GA;

      const onlyNumbers = mappedGa.replace(/[^\d.]/g, '.');
      const parsedNumbers = parseFloat(onlyNumbers);
      mappedGa = parsedNumbers;

      return {
        AGE: item.AGE,
        DOB: item.DOB,
        First: item.First,
        GA: mappedGa,
        ID: item.ID,
        LMP: item.LMP,
        Last: item.Last,
      };
    });

    mappedValue.sort((a: any, b: any) => {
      if (a[sortField] < b[sortField]) {
        return -1 * multiplier;
      } else if (a[sortField] > b[sortField]) {
        return 1 * multiplier;
      } else {
        return 0;
      }
    });

    const revertedValue = mappedValue.map((item: any) => {
      let mappedGa = item.GA;

      let stringedValues: any;

      const returnStrings = (a: any) => {
        if (Number(a) === a && a % 1 === 0) {
          stringedValues = mappedGa.toString();
          return stringedValues + 'w';
        } else {
          stringedValues = mappedGa.toString().replace(/\./, 'w');
          return stringedValues + 'd';
        }
      };
      mappedGa = returnStrings(mappedGa);

      return {
        AGE: item.AGE,
        DOB: item.DOB,
        First: item.First,
        GA: mappedGa,
        ID: item.ID,
        LMP: item.LMP,
        Last: item.Last,
      };
    });

    return revertedValue;
  }
}

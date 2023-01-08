import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string): any[] {
    const resultArray = [];
    if (value.length === 0 || filterString === '' || propName === '') {
      return value;
    }

    for (const item of value) {
      let lowerCasePropName = item[propName]?.toLowerCase();
      let lowerCaseFilter = filterString?.toLowerCase();

      if (lowerCasePropName?.includes(lowerCaseFilter)) resultArray.push(item);
    }

    return resultArray;
  }
}

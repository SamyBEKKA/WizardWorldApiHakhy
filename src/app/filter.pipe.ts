import { Pipe, PipeTransform } from '@angular/core';
import { Elixirs } from './entities';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(values: Elixirs[], searchText: string): Elixirs[] {
    if (!values) {
      return [];
    }
    if (!searchText) {
      return values;
    }
    searchText = searchText.toLowerCase();

    return values.filter(value => value.name.toLowerCase().includes(searchText.toLocaleUpperCase())
    );
  }

}

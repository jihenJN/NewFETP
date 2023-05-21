import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(product: any[], searchText: string): any[] {
      if (!product) return [];
      if (!searchText) return product;
  
      searchText = searchText.toLowerCase();
  
      return product.filter(product => {
        // Modify this condition based on your specific search requirements
        return product.name.toLowerCase().includes(searchText);
      });
    }
  }
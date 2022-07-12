import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(countries: string[], searchInput: string): any[]{     
        if(!searchInput) {
            return  [];
        }
       searchInput = searchInput.toLowerCase();
       return countries.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
}
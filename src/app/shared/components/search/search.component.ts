import { Component } from '@angular/core';
import { SearchPipe } from './search.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  title = 'AngularApp';

  data = [
    { id: 1, name: "Angular" },
    { id: 2, name: "React" },
    { id: 3, name: "Vue" },
    { id: 4, name: "Bootstrap" },
    { id: 5, name: "Foundation" },
  ]

  searchText : any ;
}

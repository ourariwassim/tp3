import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() even = new EventEmitter<string>();  
  search = faSearch;  

  key_pressed(data: string) {
    this.even.emit(data);
  }
}

import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();
  constructor() { }

  handleSubmit(form) {
    this.onSearch.emit(form.value.subName);
    // this.onSearch.emit(form.value.subGenre);
  }

  ngOnInit() {
  }

}

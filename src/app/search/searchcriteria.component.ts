import { Component, OnInit, Output, EventEmitter} from '@angular/core';
//add the Output decorator

@Component({
  selector: 'app-search',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();
  constructor() { }

  //method(parameter)
  handleSubmit(form) {
    this.onSearch.emit(form.value.subName);
  }

  ngOnInit() {
  }

}

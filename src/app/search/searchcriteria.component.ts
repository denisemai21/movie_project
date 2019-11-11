import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();

  searchCriteria: any[] = [
    { name: "Name", value: "name" },
    { name: "Year", value: "year" },
  ]

  // genreOptions: any[] = [
  //   { id: 28, name: "Action" },
  //   { id: 12, name: "Adventure" },
  //   { id: 16, name: "Animation" },
  //   { id: 35, name: "Comedy" },
  //   { id: 80, name: "Crime" },
  //   { id: 99, name: "Documentary" },
  //   { id: 18, name: "Drama" },
  //   { id: 10751, name: "Family" },
  //   { id: 36, name: "History" },
  //   { id: 27, name: "Horror" },
  //   { id: 10402, name: "Music" },
  //   { id: 9648, name: "Mystery" },
  //   { id: 10749, name: "Romance" },
  //   { id: 878, name: "Science Fiction" },
  //   { id: 10770, name: "TV Movie" },
  //   { id: 53, name: "Thriller" },
  //   { id: 10752, name: "War" },
  //   { id: 37, name: "Western" }
  // ];

  constructor() { }

  handleSubmit(form) {
    this.onSearch.emit(form.value.subName);
    // this.onSearch.emit(form.value.subGenre);
  }

  ngOnInit() {
  }

}

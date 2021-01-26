import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  // Methods
  ngOnInit(): void {
  }

  @Output() navToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  navOpen() {
    this.navToggle.emit(true);
  }
}

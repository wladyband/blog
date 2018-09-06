import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public innerWidth: any;

  constructor() { }
  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}

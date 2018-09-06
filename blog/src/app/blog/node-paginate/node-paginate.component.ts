import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-node-paginate',
  templateUrl: './node-paginate.component.html',
  styleUrls: ['./node-paginate.component.css']
})
export class NodePaginateComponent implements OnInit {
  public innerWidth: any;
 


  constructor(private location: Location) {}

  ngOnInit() {
      this.innerWidth = window.innerWidth;
   
 
  }



  onSubmit() {
  location.reload()
      
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}

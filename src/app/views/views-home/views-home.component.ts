import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  items=[
    {
      image:'/assets/images/couch.jpeg',
      title:'Couch',
      description:'This is a comfortable couch to sit on'
    },
    {
      image:'/assets/images/dresser.jpeg',
      title:'Dresser',
      description:'This is a beautiful dresser to put your stuff in'
    }
  ];

  stats=[
    {value:'900', label:'Downloads'},
    {value:'70', label: 'Active Users'},
    {value:'50', label: 'Reviews'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

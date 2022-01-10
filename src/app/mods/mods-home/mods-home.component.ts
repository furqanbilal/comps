import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  data=[
    {title:'Why is sky blue?', content:'Sky is blue because the atmospheric refraction makes it seem so'},
    {title:'Why is an orange, orange?', content:'An orange is orange because the wavelength of the light that gets reflected after hitting the orange falls in the range of wavelength of UV light that is interpreted by the human eye as orange.'},
    {title:'What is the color of the cat?', content:"The cat's color is orange"},
  ]
  modal=false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modal=!this.modal;
  }

}

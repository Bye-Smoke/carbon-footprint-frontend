import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public nameContinent:String = "";

  constructor() { }

  ngOnInit(): void {
  }
  public continentClick(event):void{
    this.nameContinent = event.target.id
    console.log(event.target.id)
  }

}

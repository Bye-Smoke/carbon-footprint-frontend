import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public nameContinent:String = "";
  public colors:string[] = ["darkgreen","darkorange","darkred"];
  public carbonLevel:number = 15;
  constructor() { }

  ngOnInit(): void {
  }
  public continentClick(event):void{
    this.nameContinent = event.target.id
    console.log(event.target.id)
  }
  public mouseOver(event):void{
    if(this.carbonLevel<=25){
      let style = document.getElementById(event.target.id).style.fill=this.colors[0];
    }
    if(this.carbonLevel>25 && this.carbonLevel<=50){
      let style = document.getElementById(event.target.id).style.fill=this.colors[1];
    }
    if(this.carbonLevel>50 && this.carbonLevel<=75){
      let style = document.getElementById(event.target.id).style.fill=this.colors[2];
    }
         
  }
  public mouseLeave(event):void{
    let style = document.getElementById(event.target.id).style.fill="skyblue";
  }

}

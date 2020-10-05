import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public nameContinent: String = "";
  public colors: string[] = ["darkgreen", "darkorange", "darkred"];
  public carbonLevel: number = Math.random()*100;
  temperature:number = Math.random()*100;
  happy:boolean = false
  medium:boolean = false
  sad:boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

  public continentClick(event): void {
    this.nameContinent = event.target.id
    
    // this.data.filter((value)=>)
  }
  public mouseOver(event): void {
    if (this.carbonLevel <= 25) {
      this.happy=true
      this.medium = false
      this.sad = false
      let style = document.getElementById(event.target.id).style.fill = this.colors[0];
    }
    if (this.carbonLevel > 25 && this.carbonLevel <= 50) {
      this.medium=true;
      this.happy=false
      this.sad = false
      let style = document.getElementById(event.target.id).style.fill = this.colors[1];
    }
    if (this.carbonLevel > 50 ) {
      this.sad=true
      this.happy=false
      this.medium = false
      let style = document.getElementById(event.target.id).style.fill = this.colors[2];
    }
    const f = async()=>{
      this.carbonLevel = await Math.random()*100;
      this.temperature = await Math.random()*100;
    }
    f();
    
  }
  public mouseLeave(event): void {
    let style = document.getElementById(event.target.id).style.fill = "skyblue";
  }

}

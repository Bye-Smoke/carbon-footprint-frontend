import { Component, OnInit } from '@angular/core';
import {  } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats:any;
  sus:any;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    
    this.sus = this.data.getData().subscribe((data)=>{
      this.stats = data;
    })
  }
  ngOnDestroy(){
    this.sus.unsuscribe();
  }

}

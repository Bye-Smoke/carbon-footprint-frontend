import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats:any;
  sus:any;
  loading:Boolean = false;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    
    this.sus = this.data.getData().subscribe((data)=>{
      this.loading = true;
      this.stats = data;
      this.loading = false;
    })
  }

}

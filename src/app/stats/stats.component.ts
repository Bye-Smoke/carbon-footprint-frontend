import { Component, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

interface Continent{
  name,
  temperature,
  mtco2
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats: any;
  // subscription: Subscription;
  // observer: Observer<any>;
  loading: Boolean = false;
  // error: any = ""
  continent:Array<Continent> = new Array<Continent>()
  constructor(private data: DataService) {
    let names = ['Africa','America','Oceania','Europe','Asian']
    for (let index = 0; index < names.length; index++) {
      let continent:Continent = {
        name:names[index],
        mtco2:Math.random()*100,
        temperature:Math.random()*100,
      }
      this.continent.push(continent);
      
    }
    // this.observer = {
    //   next: (data) => {
    //     this.loading = true;
    //     this.stats = data;
    //     this.loading = false;
    //   },
    //   error: (error) => {
    //     this.error = error
    //   },
    //   complete: () => { }
    // }
  }

  ngOnInit(): void {
    // this.subscription = this.data.getData().subscribe(this.observer)
  }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe()
  // }

}

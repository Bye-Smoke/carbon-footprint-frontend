import { Component, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats: any;
  subscription: Subscription;
  observer: Observer<any>;
  loading: Boolean = false;
  error: any = ""
  constructor(private data: DataService) {
    this.observer = {
      next: (data) => {
        this.loading = true;
        this.stats = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = error
      },
      complete: () => { }
    }
  }

  ngOnInit(): void {
    this.subscription = this.data.getData().subscribe(this.observer)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number;
  constructor(private store: Store<IAppState>) {
    this.store.select('projects').subscribe(res => {
      if (res.projects)
        this.counter = res.projects.length
    });

  }

  ngOnInit() {
  }

}

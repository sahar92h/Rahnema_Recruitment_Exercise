import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { GetProject } from './store/actions/project.action';
import { Observable } from 'rxjs';
import { IProject } from './store/models/project.model';
import { IProjectState } from './store/state/project.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private _store:Store<IAppState>){
   
    
  }
  title = 'project';
}

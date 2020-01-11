import { Action } from '@ngrx/store';
import { IProject } from '../models/project.model';

export enum EProjectActions {
    GetProjects = '[Project] Get Projects',
    GetProject = '[Project] Get Project',
    CreateProject = '[Project] Create Project'
}
export type ProjectActions =  GetProject | GetProjects;

  export class GetProjects implements Action {
    public readonly type = EProjectActions.GetProjects;
    constructor(public payload: IProject[]) {}
  }
  
  
  export class GetProject implements Action {
    public readonly type = EProjectActions.GetProject;
    constructor(public payload: IProject) {}
  }
  export class CreateProject implements Action {
    public readonly type = EProjectActions.CreateProject;
    constructor(public payload: IProject) {}
  }
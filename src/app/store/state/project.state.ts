import { IProject } from '../models/project.model';

export interface IProjectState {
    projects: IProject[],
    selectedProject:IProject
  }
  
  export const initialProjectState: IProjectState = {
    projects: null,
    selectedProject:null
  };
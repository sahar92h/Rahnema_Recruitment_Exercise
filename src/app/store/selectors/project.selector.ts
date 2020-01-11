import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { IProjectState } from '../state/project.state';

const selectProject=(state:IAppState)=> state.projects;
export const selectSelectedProject= createSelector(
    selectProject,
    (state:IProjectState)=>state.selectedProject
)
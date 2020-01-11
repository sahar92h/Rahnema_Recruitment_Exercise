import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { projectReducers } from './project.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    projects: projectReducers
}

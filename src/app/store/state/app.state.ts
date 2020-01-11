import { IProjectState, initialProjectState } from './project.state';

export interface IAppState {
    projects: IProjectState;
}
export const initialAppState: IAppState = {
    projects: initialProjectState
}
export function getInitialState(): IAppState {
    return initialAppState;
}
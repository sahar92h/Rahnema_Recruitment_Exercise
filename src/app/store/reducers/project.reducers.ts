import { initialProjectState, IProjectState } from '../state/project.state';
import { ProjectActions, EProjectActions } from '../actions/project.action';
import { IProject } from '../models/project.model';

// export const projectReducers=(state=initialProjectState,action:ProjectActions):IProjectState=>{
//     switch(action.type){
//         case EProjectActions.GetProject:{
//             return{
//                 ...state,
//                projects:action.payload
//             }
//         }
//     }
// }
export const projectReducers = (
    state = initialProjectState,
    action: ProjectActions
  ): IProjectState => {
    switch (action.type) {
      case EProjectActions.GetProject: {
        return {
          ...state,
          selectedProject: action.payload as any
        };
      }
      case EProjectActions.GetProjects: {
        return {
          ...state,
          projects: action.payload as any
        };
      }
 
      default:
        return state;
    }
  };
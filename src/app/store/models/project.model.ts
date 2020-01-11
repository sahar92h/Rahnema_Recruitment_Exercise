import { IProjectDetails } from './project-details.model';
import { IProjectSettings } from './project-settings.model';
import { IProjectDeliveryDetails } from './project-delivery-details.modet';

export interface IProject {
    id: string,
    projectDetails: IProjectDetails,
    projectSettings: IProjectSettings,
    deliveryDetails: IProjectDeliveryDetails,
    assigned?: string,
    status?: string,
    assignedPic?: string

}
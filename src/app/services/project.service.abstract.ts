import { IProject } from '../store/models/project.model';
import { Observable } from 'rxjs';
import { IKeyValue } from '../store/models/keyvalue.model';

export abstract class AbstractProjectService {
    abstract get(id: string): Observable<IProject>;
    abstract create(entity: IProject): Observable<any>;
    abstract query(): Observable<IProject[]>;
    abstract getLanguages(): Observable<IKeyValue[]>;
    abstract getTimezones(): Observable<IKeyValue[]>;
    abstract getCountries(): Observable<IKeyValue[]>;
}
import { Observable, of } from 'rxjs';
import { IKeyValue } from '../store/models/keyvalue.model';
import { IProject } from '../store/models/project.model';
import { AbstractProjectService } from './project.service.abstract';
export class FakeProjectService extends AbstractProjectService {
    projecstList: IProject[] = [
        {
            id: '37587212-f8e8-484e-a976-3064bddcc1fa',
            projectDetails: {
                projectName: 'project1',
                projectOwner: 'Mike Jones',
                customerName: 'Bob Smith',
                contactPhone: '123456',
                emailAddress: 'aa@abc.com',
                companySite: 'aaa.com'
            },
            projectSettings: {
                emailAddress: 'bb@bb.com',
                language: "1",
                timezone: "1",
                email: true,
                sms: false,
                phone: true
            },
            deliveryDetails: {
                addressLine1: 'aaaaaaaa',
                addressLine2: 'bbbbbbb',
                postcode: 123456,
                city: 'city1',
                state: 'state1',
                country: "1"
            },
            assigned: 'Mike Smith',
            assignedPic: 'assets/img/assigned-pic2.jpg',
            status: 'pending'

        },
        {
            id: 'da1fea3a-fd7f-4dd5-9fb3-e9d3a8ce1d4a',
            projectDetails: {
                projectName: 'project2',
                projectOwner: 'Mike Smith',
                customerName: 'Juan Carlos',
                contactPhone: '123456',
                emailAddress: 'vv@vv.com',
                companySite: 'mmmm.com'
            },
            projectSettings: {
                emailAddress: 'tt@tt.com',
                language: "2",
                timezone: "1",
                email: true,
                sms: true,
                phone: false
            },
            deliveryDetails: {
                addressLine1: 'addresssss1',
                addressLine2: 'addresssss2',
                postcode: 123456,
                city: 'city2',
                state: 'state2',
                country: "1"
            },
            assigned: 'Juan Carlos',
            assignedPic: 'assets/img/assigned-pic3.jpg',
            status: 'success'

        },
        {
            id: '22966876-21b9-4d14-9ed7-da0d16fbb644',
            projectDetails: {
                projectName: 'project1',
                projectOwner: 'Bob Smith',
                customerName: 'Mike Smith',
                contactPhone: '123456',
                emailAddress: 'aa@fff.com',
                companySite: 'uuuuu.com'
            },
            projectSettings: {
                emailAddress: 'rr@rr.com',
                language: "1",
                timezone: "1",
                email: true,
                sms: false,
                phone: true
            },
            deliveryDetails: {
                addressLine1: 'a1a1a1',
                addressLine2: 'ljklkkl',
                postcode: 123456,
                city: 'city1',
                state: 'state1',
                country: "1"
            },
            assigned: 'Bob Smith',
            status: 'canceled'
        },
        {
            id: '37587212-f8e8-484e-a976-3064bc4cc1fa',
            projectDetails: {
                projectName: 'project1',
                projectOwner: 'foo',
                customerName: 'bar',
                contactPhone: '123456',
                emailAddress: 'ghjh@gjhgj.com',
                companySite: 'aaghhha.com'
            },
            projectSettings: {
                emailAddress: 'hh@hh.com',
                language: "1",
                timezone: "1",
                email: true,
                sms: false,
                phone: true
            },
            deliveryDetails: {
                addressLine1: 'rrrr',
                addressLine2: 'rrr',
                postcode: 123456,
                city: 'city1',
                state: 'state1',
                country: "1"
            },
            assigned: 'Bob Smith',
            assignedPic: 'assets/img/assigned-pic4.jpg',
            status: 'processing'

        }]
    languagesList: IKeyValue[] = [{ id: '1', title: 'fa' }, { id: '2', title: 'en' }]
    timezonesList: IKeyValue[] = [{ id: '1', title: '(UTC-10:00) Hawaii' }, { id: '2', title: '(UTC-09:00) Alaska' }, { id: '3', title: '(UTC-08:00) Baja California' }]
    countriesList: IKeyValue[] = [{ id: "1", title: 'Iran' }, { id: '2', title: 'France' }, { id: '3', title: 'Mexico' }];
    get(id: string): Observable<IProject> {
        let result = this.projecstList.find(item => item.id == id);
        return of(result);
    }
    create(entity: IProject): Observable<string> {
        // response of this method should be the id of current project
        let item = this.projecstList.find(x => x.id == entity.id);
        if (item) {
            let index=this.projecstList.findIndex(x=>entity.id==x.id);
            this.projecstList[index]=entity;
        } else {
            this.projecstList.push(entity);
        }
        return of(entity.id);
    }
    query(): Observable<IProject[]> {
        return of(this.projecstList);
    }
    getLanguages(): Observable<IKeyValue[]> {
        return of(this.languagesList);
    }
    getTimezones(): Observable<IKeyValue[]> {
        return of(this.timezonesList);
    }
    getCountries(): Observable<IKeyValue[]> {
        return of(this.countriesList);
    }
    newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
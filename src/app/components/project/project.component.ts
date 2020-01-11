import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FakeProjectService } from 'src/app/services/project.service';
import { GetProject, GetProjects } from 'src/app/store/actions/project.action';
import { IKeyValue } from 'src/app/store/models/keyvalue.model';
import { IProject } from 'src/app/store/models/project.model';
import { IAppState } from 'src/app/store/state/app.state';
import { IProjectState } from 'src/app/store/state/project.state';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectDetailsFormGroup: FormGroup;
  projectSettingsFormGroup: FormGroup;
  deliveryDetailsFormGroup: FormGroup;
  languages: Observable<IKeyValue[]>;
  timezones: Observable<IKeyValue[]>;
  counties: Observable<IKeyValue[]>;
  id: string;
  model: IProject;
  constructor(private formBuilder: FormBuilder,
    private projectService: FakeProjectService,
    private store: Store<IAppState>,
    private router: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.initialize();
  }
  createProjectDetailsFormGroup() {
    this.projectDetailsFormGroup = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectOwner: ['', Validators.required],
      customerName: ['', Validators.required],
      contactPhone: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      companySite: ['', Validators.required]
    });
  }
  createProjectSettingsFormGroup() {
    this.projectSettingsFormGroup = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      language: ['', Validators.required],
      timezone: ['', Validators.required],
      email: ['', []],
      sms: ['', []],
      phone: ['', []]
    });
  }
  createDeliveryDetailsFormGroup() {
    this.deliveryDetailsFormGroup = this.formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      postcode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
  }
  initialize() {
    this.createProjectDetailsFormGroup();
    this.createProjectSettingsFormGroup();
    this.createDeliveryDetailsFormGroup();
    this.languages = this.projectService.getLanguages();
    this.timezones = this.projectService.getTimezones();
    this.counties = this.projectService.getCountries();

    this.router.params.subscribe(params => {
      this.id = params.id;
      if (this.id != "0") {
        this.projectService.get(this.id).subscribe(res => {
          this.model = res;
          this.projectDetailsFormGroup.patchValue(this.model.projectDetails);
          this.projectSettingsFormGroup.patchValue(this.model.projectSettings);
          this.deliveryDetailsFormGroup.patchValue(this.model.deliveryDetails);
        });
      }
      this.updateStore(this.projectService.projecstList, this.model);
    });

  }

  submitForms() {
    // I need to set the ID here because I'm using a fake service
    this.initializeModel();
    this.projectService.create(this.model).subscribe(res => {
      this.projectService.query().subscribe(data => {
        this.toastr.success('', this.id != "0" ? 'Project updated successfully' : 'Project added successfully');
        this.updateStore(data, data.find(item => item.id == res));
      });
    });

  }
  private initializeModel() {
    this.model = {
      id: this.model && this.model.id != "0" ? this.model.id : this.projectService.newGuid(),
      projectDetails: this.projectDetailsFormGroup.value,
      projectSettings: this.projectSettingsFormGroup.value,
      deliveryDetails: this.deliveryDetailsFormGroup.value
    }
  }
  updateStore(projects?: IProject[], selectedProject?: IProject) {
    this.store.dispatch(new GetProjects(projects));
    this.store.dispatch(new GetProject(selectedProject));
  }
}

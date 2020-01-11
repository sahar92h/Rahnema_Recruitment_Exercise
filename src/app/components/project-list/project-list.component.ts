import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { FakeProjectService } from 'src/app/services/project.service';
import { GetProjects } from 'src/app/store/actions/project.action';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'project', 'country', 'contactPhone', 'assigned', 'status', 'actions'];
  dataSource;
  selection = new SelectionModel(true, []);

  constructor(
    private projectService: FakeProjectService,
    private store: Store<IAppState>,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.setDataSource();
  }
  setDataSource() {
    this.projectService.query().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.store.dispatch(new GetProjects(res))
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  getcountryTitle(id: string): string {
    let countryTitle;
    this.projectService.getCountries().subscribe(res => {
      return countryTitle = res.find(item => item.id == id).title;
    });
    return countryTitle;
  }
  splitName(name: string) {
    if (name)
      return name.split('')[0];
  }
  deleteItem(element) {
    // this.dataSource.data = this.projectService.projecstList.filter(item => item.id != element.id);
    this.toastr.success('', 'Project deleted successfully');
    this.dataSource = new MatTableDataSource(this.dataSource.data.filter(item => item.id != element.id));
    this.store.dispatch(new GetProjects(this.dataSource.data));
  }
  deleteAll() {
    this.selection.selected.forEach(item => {
      this.deleteItem(item);
    })

  }
}

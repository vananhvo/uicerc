import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './regulator/default/default.component';
import { LoginComponent } from './login/login.component';
import { ReghomeComponent } from './pages/reghome/reghome.component';
import { UicprojectsComponent } from './pages/uicprojects/uicprojects.component';
import { UicmainComponent } from './pages/uicmain/uicmain.component';
import { WelloperatorComponent } from './welloperator/welloperator.component';
import { MyWellsComponent } from './welloperator/my-wells/my-wells.component';
import { ProposeWellsComponent } from './welloperator/propose-wells/propose-wells.component';
import { WoDashboardComponent } from './welloperator/wo-dashboard/wo-dashboard.component';
import { CreateWellComponent } from './welloperator/create-well/create-well.component';
import { AddRemoveProjectWellsComponent } from './welloperator/add-remove-project-wells/add-remove-project-wells.component';
import { ProjectConfirmComponent } from './welloperator/project-confirm/project-confirm.component';
import { NewProjectComponent } from './welloperator/new-project/new-project.component';
import { ExistingProjectComponent } from './welloperator/existing-project/existing-project.component';
import { AddRemoveWellTableComponent } from './welloperator/add-remove-well-table/add-remove-well-table.component';
import { ExistingProjectOverviewComponent } from './welloperator/existing-project-overview/existing-project-overview.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: DefaultComponent,
    children: [
        { path: 'home', component: ReghomeComponent},
        { path: 'uic', component: UicmainComponent },
        { path: 'uicreview', component: UicprojectsComponent }
    ]
  },
  { path: 'welloperator', component: WelloperatorComponent,
      children: [
        { path: '', component: WoDashboardComponent },
        { path: 'wo-dashboard', component: WoDashboardComponent },
        { path: 'create-well', component: CreateWellComponent },
        { path: 'my-wells', component: MyWellsComponent },
        { path: 'propose-wells', component: ProposeWellsComponent },
        { path: 'edit-project', component: AddRemoveProjectWellsComponent },
        { path: 'project-confirm', component: ProjectConfirmComponent },
        { path: 'new-project', component: NewProjectComponent },
        { path: 'exist-project', component: ExistingProjectComponent },
        { path: 'add-remove-table', component: AddRemoveWellTableComponent },      
        { path: 'existing-project-overview', component: ExistingProjectOverviewComponent }
      ]
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

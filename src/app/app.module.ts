import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JoiningformComponent } from './joiningform/joiningform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule, MatSidenavModule, MatCardModule, MatProgressSpinnerModule, MatFormFieldModule, MatSelectModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule} from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatIconModule,MatButtonModule } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsideComponent } from './newside/newside.component';
import { TableComponent } from './table/table.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { UserComponent } from './admin/pages/user/user.component';
import { DashComponent } from './admin/layout/dash/dash.component';
import { MytimesheetsComponent } from './admin/pages/time/timesheets/mytimesheets/mytimesheets.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { ApplyleaveComponent } from './admin/pages/leaves/applyleave/applyleave.component';
import { MyleaveComponent } from './admin/pages/leaves/myleave/myleave.component';
import { AddentitlementComponent } from './admin/pages/leaves/entitlements/addentitlement/addentitlement.component';
import { LeaventitlementComponent } from './admin/pages/leaves/entitlements/leaventitlement/leaventitlement.component';
import {DateRangePickerModule} from '@syncfusion/ej2-angular-calendars';
import { MyentitlementComponent } from './admin/pages/leaves/entitlements/myentitlement/myentitlement.component';
import { LeaveentitlementComponent } from './admin/pages/leaves/reports/leaveentitlement/leaveentitlement.component';
import { MyleaventitlementComponent } from './admin/pages/leaves/reports/myleaventitlement/myleaventitlement.component';
import { LeavelistComponent } from './admin/pages/leaves/leavelist/leavelist.component';
import { AssignleaveComponent } from './admin/pages/leaves/assignleave/assignleave.component';
import { LeaveperiodComponent } from './admin/pages/leaves/configure/leaveperiod/leaveperiod.component';
import { LeavetypeComponent } from './admin/pages/leaves/configure/leavetype/leavetype.component';
import { WorkweekComponent } from './admin/pages/leaves/configure/workweek/workweek.component';
import { HolidaysComponent } from './admin/pages/leaves/configure/holidays/holidays.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { CandidatesComponent } from './admin/pages/recruitment/candidates/candidates.component';
import { VacanciesComponent } from './admin/pages/recruitment/vacancies/vacancies.component';
import { ProfileComponent } from './admin/pages/profile/profile.component';
import { InputFileConfig, InputFileModule } from 'ngx-input-file';
import { ReportsComponent } from './admin/pages/PIM/reports/reports.component';
import { EmplistComponent } from './admin/pages/pim/emplist/emplist.component';
import { RunreportComponent } from './admin/pages/pim/reports/runreport/runreport.component';
import { AddempComponent } from './admin/pages/pim/addemp/addemp.component';
import {FileUploadModule} from 'ng2-file-upload';
import { OptionalComponent } from './admin/pages/pim/configuration/optional/optional.component';
import { CustomComponent } from './admin/pages/pim/configuration/custom/custom.component';
import { DataimportComponent } from './admin/pages/pim/configuration/dataimport/dataimport.component';
import { ReportingComponent } from './admin/pages/pim/configuration/reporting/reporting.component';
import { TerminationComponent } from './admin/pages/pim/configuration/termination/termination.component';
import { EditreportComponent } from './admin/pages/pim/reports/editreport/editreport.component';
import { CustomersComponent } from './admin/pages/time/projectinfo/customers/customers.component';
import { ProjectsComponent } from './admin/pages/time/projectinfo/projects/projects.component';
import { ProjectreportComponent } from './admin/pages/time/reports/projectreport/projectreport.component';
import { ViewreportComponent } from './admin/pages/time/reports/projectreport/viewreport/viewreport.component';
import { EmpreportComponent } from './admin/pages/time/reports/empreport/empreport.component';
import { ViewempComponent } from './admin/pages/time/reports/empreport/viewemp/viewemp.component';
import { AttendancesummaryComponent } from './admin/pages/time/reports/attendancesummary/attendancesummary.component';
import { SummaryviewComponent } from './admin/pages/time/reports/attendancesummary/summaryview/summaryview.component';
import { MyrecordsComponent } from './admin/pages/time/attendance/myrecords/myrecords.component';
import { PunchinoutComponent } from './admin/pages/time/attendance/punchinout/punchinout.component';
import { RecordsComponent } from './admin/pages/time/attendance/records/records.component';
import { ConfigurationComponent } from './admin/pages/time/attendance/configuration/configuration.component';
import {CalendarModule} from 'primeng/calendar';
import { EmptimesheetsComponent } from './admin/pages/time/timesheets/emptimesheets/emptimesheets.component';
import { NextpageComponent } from './admin/pages/time/timesheets/emptimesheets/nextpage/nextpage.component';
import { MytrackerComponent } from './admin/pages/performance/mytracker/mytracker.component';
import { EmptrackerComponent } from './admin/pages/performance/emptracker/emptracker.component';
import { ManagereviewsComponent } from './admin/pages/performance/manage/managereviews/managereviews.component';
import { MyreviewsComponent } from './admin/pages/performance/manage/myreviews/myreviews.component';
import { ReviewlistComponent } from './admin/pages/performance/manage/reviewlist/reviewlist.component';
import { KpisComponent } from './admin/pages/performance/configure/kpis/kpis.component';
import { TrackersComponent } from './admin/pages/performance/configure/trackers/trackers.component';
import { TrackerinfoComponent } from './admin/pages/performance/emptracker/trackerinfo/trackerinfo.component';
import { AddtrackerComponent } from './admin/pages/configure/trackers/addtracker/addtracker.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { JobtitlesComponent } from './admin/pages/Admin/job/jobtitles/jobtitles.component';
import { PaygradesComponent } from './admin/pages/Admin/job/paygrades/paygrades.component';
import { EmploymentstatusComponent } from './admin/pages/Admin/job/employmentstatus/employmentstatus.component';
import { JobcategoriesComponent } from './admin/pages/Admin/job/jobcategories/jobcategories.component';
import { GeneralinfoComponent } from './admin/pages/Admin/organisation/generalinfo/generalinfo.component';
import { LocationsComponent } from './admin/pages/Admin/organisation/locations/locations.component';
import { StructureComponent } from './admin/pages/Admin/organisation/structure/structure.component';
import { SkillsComponent } from './admin/pages/Admin/qualifications/skills/skills.component';
import { EducationComponent } from './admin/pages/Admin/qualifications/education/education.component';
import { CertificatesComponent } from './admin/pages/Admin/qualifications/certificates/certificates.component';
import { LanguagesComponent } from './admin/pages/Admin/qualifications/languages/languages.component';
import { NationalitiesComponent } from './admin/pages/Admin/nationalities/nationalities.component';
import { EmailconfigurationComponent } from './admin/pages/Admin/configuration/emailconfiguration/emailconfiguration.component';
import { EmailsubscriptionsComponent } from './admin/pages/Admin/configuration/emailsubscriptions/emailsubscriptions.component';
import { ModulesComponent } from './admin/pages/Admin/configuration/modules/modules.component';
import { WorkshiftComponent } from './admin/pages/Admin/job/workshift/workshift.component';
import { LeaveapplicantsComponent } from './admin/pages/Admin/configuration/emailsubscriptions/leaveapplicants/leaveapplicants.component';
import { LeaverejectionsComponent } from './admin/pages/Admin/configuration/emailsubscriptions/leaverejections/leaverejections.component';
import { LeaveapprovalsComponent } from './admin/pages/Admin/configuration/emailsubscriptions/leaveapprovals/leaveapprovals.component';
import { CreatenotificationsComponent } from './admin/pages/Admin/configuration/emailsubscriptions/createnotifications/createnotifications.component';

const config: InputFileConfig = {};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JoiningformComponent,
    NewsideComponent,
   TableComponent,
   ChartsComponent,
   UserComponent,
   DashComponent,
   MytimesheetsComponent,
   ApplyleaveComponent,
   MyleaveComponent,
   AddentitlementComponent,
   LeaventitlementComponent,
   MyentitlementComponent,
   LeaveentitlementComponent,
   MyleaventitlementComponent,
   LeavelistComponent,
   AssignleaveComponent,
   LeaveperiodComponent,
   LeavetypeComponent,
   WorkweekComponent,
   HolidaysComponent,
   CandidatesComponent,
   VacanciesComponent,
   ProfileComponent,
   ReportsComponent,
   EmplistComponent,
   RunreportComponent,
   AddempComponent,
   OptionalComponent,
   CustomComponent,
   DataimportComponent,
   ReportingComponent,
   TerminationComponent,
   EditreportComponent,
   CustomersComponent,
   ProjectsComponent,
   ProjectreportComponent,
   ViewreportComponent,
   EmpreportComponent,
   ViewempComponent,
   AttendancesummaryComponent,
   SummaryviewComponent,
   MyrecordsComponent,
   PunchinoutComponent,
   RecordsComponent,
   ConfigurationComponent,
   EmptimesheetsComponent,
   NextpageComponent,
   MytrackerComponent,
   EmptrackerComponent,
   ManagereviewsComponent,
   MyreviewsComponent,
   ReviewlistComponent,
   KpisComponent,
   TrackersComponent,
   TrackerinfoComponent,
   AddtrackerComponent,
   JobtitlesComponent,
   PaygradesComponent,
   EmploymentstatusComponent,
   JobcategoriesComponent,
   GeneralinfoComponent,
   LocationsComponent,
   StructureComponent,
   SkillsComponent,
   EducationComponent,
   CertificatesComponent,
   LanguagesComponent,
   NationalitiesComponent,
   EmailconfigurationComponent,
   EmailsubscriptionsComponent,
   ModulesComponent,
   WorkshiftComponent,
   LeaveapplicantsComponent,
   LeaverejectionsComponent,
   LeaveapprovalsComponent,
   CreatenotificationsComponent,
  ],
  imports: [
    BrowserModule,Ng2SmartTableModule,MatFileUploadModule,DateRangePickerModule,
    AppRoutingModule,ChartsModule,AngularFileUploaderModule,MatDatepickerModule,
    ReactiveFormsModule,HttpClientModule,FileUploadModule,CalendarModule,
    FormsModule,MatCardModule,MatProgressSpinnerModule,MatFormFieldModule,
    BrowserAnimationsModule,MatFileUploadModule,NgMultiSelectDropDownModule.forRoot(),
    MatToolbarModule,MatNativeDateModule,InputFileModule.forRoot(config),
    MatIconModule,NgxSmartModalModule.forRoot() ,
    MatMenuModule,MatInputModule,MatSelectModule,
    MatSidenavModule,FormsModule, ReactiveFormsModule,
    MatListModule,MatCheckboxModule,
   NgbModule,MatTabsModule,MatButtonModule,MatDialogModule, MatInputModule, MatPaginatorModule, MatSortModule,
   MatTableModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  exports:[
    MatSidenavModule,MatTabsModule,MatToolbarModule,MatIconModule,MatButtonModule,
    MatListModule,MatMenuModule,MatDialogModule
  ]
})
export class AppModule { }

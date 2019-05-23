import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JoiningformComponent } from './joiningform/joiningform.component';
import { NewsideComponent } from './newside/newside.component';
import { UserComponent } from './admin/pages/user/user.component';
import { DashComponent } from './admin/layout/dash/dash.component';
import { MytimesheetsComponent } from './admin/pages/time/timesheets/mytimesheets/mytimesheets.component';
import { ApplyleaveComponent } from './admin/pages/leaves/applyleave/applyleave.component';
import { MyleaveComponent } from './admin/pages/leaves/myleave/myleave.component';
import { AddentitlementComponent } from './admin/pages/leaves/entitlements/addentitlement/addentitlement.component';
import { LeaventitlementComponent } from './admin/pages/leaves/entitlements/leaventitlement/leaventitlement.component';
import { MyentitlementComponent } from './admin/pages/leaves/entitlements/myentitlement/myentitlement.component';
import { MyleaventitlementComponent } from './admin/pages/leaves/reports/myleaventitlement/myleaventitlement.component';
import { LeavelistComponent } from './admin/pages/leaves/leavelist/leavelist.component';
import { AssignleaveComponent } from './admin/pages/leaves/assignleave/assignleave.component';
import { LeaveentitlementComponent } from './admin/pages/leaves/reports/leaveentitlement/leaveentitlement.component';
import { LeaveperiodComponent } from './admin/pages/leaves/configure/leaveperiod/leaveperiod.component';
import { LeavetypeComponent } from './admin/pages/leaves/configure/leavetype/leavetype.component';
import { HolidaysComponent } from './admin/pages/leaves/configure/holidays/holidays.component';
import { WorkweekComponent } from './admin/pages/leaves/configure/workweek/workweek.component';
import { CandidatesComponent } from './admin/pages/recruitment/candidates/candidates.component';
import { VacanciesComponent } from './admin/pages/recruitment/vacancies/vacancies.component';
import { ProfileComponent } from './admin/pages/profile/profile.component';
import { ReportsComponent } from './admin/pages/PIM/reports/reports.component';
import { EmplistComponent } from './admin/pages/pim/emplist/emplist.component';
import { RunreportComponent } from './admin/pages/pim/reports/runreport/runreport.component';
import { AddempComponent } from './admin/pages/pim/addemp/addemp.component';
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
import { EmptimesheetsComponent } from './admin/pages/time/timesheets/emptimesheets/emptimesheets.component';
import { NextpageComponent } from './admin/pages/time/timesheets/emptimesheets/nextpage/nextpage.component';
import { MytrackerComponent } from './admin/pages/performance/mytracker/mytracker.component';
import { EmptrackerComponent } from './admin/pages/performance/emptracker/emptracker.component';
import { TrackerinfoComponent } from './admin/pages/performance/emptracker/trackerinfo/trackerinfo.component';
import { ManagereviewsComponent } from './admin/pages/performance/manage/managereviews/managereviews.component';
import { ReviewlistComponent } from './admin/pages/performance/manage/reviewlist/reviewlist.component';
import { MyreviewsComponent } from './admin/pages/performance/manage/myreviews/myreviews.component';
import { KpisComponent } from './admin/pages/performance/configure/kpis/kpis.component';
import { TrackersComponent } from './admin/pages/performance/configure/trackers/trackers.component';
import { JobtitlesComponent } from './admin/pages/Admin/job/jobtitles/jobtitles.component';
import { PaygradesComponent } from './admin/pages/Admin/job/paygrades/paygrades.component';
import { EmploymentstatusComponent } from './admin/pages/Admin/job/employmentstatus/employmentstatus.component';
import { JobcategoriesComponent } from './admin/pages/Admin/job/jobcategories/jobcategories.component';
import { WorkshiftComponent } from './admin/pages/Admin/job/workshift/workshift.component';
import { SkillsComponent } from './admin/pages/Admin/qualifications/skills/skills.component';
import { EducationComponent } from './admin/pages/Admin/qualifications/education/education.component';
import { CertificatesComponent } from './admin/pages/Admin/qualifications/certificates/certificates.component';
import { LanguagesComponent } from './admin/pages/Admin/qualifications/languages/languages.component';
import { LocationsComponent } from './admin/pages/Admin/organisation/locations/locations.component';
import { NationalitiesComponent } from './admin/pages/Admin/nationalities/nationalities.component';
import { GeneralinfoComponent } from './admin/pages/Admin/organisation/generalinfo/generalinfo.component';
import { EmailconfigurationComponent } from './admin/pages/Admin/configuration/emailconfiguration/emailconfiguration.component';
import { ModulesComponent } from './admin/pages/Admin/configuration/modules/modules.component';
import { EmailsubscriptionsComponent } from './admin/pages/Admin/configuration/emailsubscriptions/emailsubscriptions.component';
import { LeaveapplicantsComponent } from './admin/pages/Admin/configuration/emailsubscriptions/leaveapplicants/leaveapplicants.component';
import { LeaveapprovalsComponent } from './admin/pages/Admin/configuration/emailsubscriptions/leaveapprovals/leaveapprovals.component';
import { LeaverejectionsComponent } from './admin/pages/Admin/configuration/emailsubscriptions/leaverejections/leaverejections.component';
import { CreatenotificationsComponent } from './admin/pages/Admin/configuration/emailsubscriptions/createnotifications/createnotifications.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path: 'form', component:JoiningformComponent},
  {path:'final',component:NewsideComponent},
  {path: 'dash',component:DashComponent},
  {path: 'users',component:UserComponent},
  {path: 'mytimesheets',component:MytimesheetsComponent},
  {path: 'applyleave',component:ApplyleaveComponent},
  {path: 'myleave',component:MyleaveComponent},
  {path: 'addentitlement',component:AddentitlementComponent},
  {path: 'leaventitlement',component:LeaventitlementComponent},
  {path: 'myentitlement',component:MyentitlementComponent},
  {path: 'leavereports',component:MyleaventitlementComponent},
  {path: 'leavelist',component:LeavelistComponent},
  {path: 'assignleave',component:AssignleaveComponent},
  {path: 'leaveusage',component:LeaveentitlementComponent},
  {path: 'leaveperiod',component:LeaveperiodComponent},
  {path: 'leavetype',component:LeavetypeComponent},
  {path: 'holidays',component:HolidaysComponent},
  {path: 'workweek',component:WorkweekComponent},
  {path: 'candidates',component:CandidatesComponent},
  {path: 'vacancies',component:VacanciesComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'report',component:ReportsComponent},
  {path: 'editreport',component:EditreportComponent},
  {path: 'runreport',component:RunreportComponent},
  {path: 'emplist',component:EmplistComponent},
  {path: 'addemp',component:AddempComponent},
  {path: 'optionalfields',component:OptionalComponent},
  {path: 'customfields',component:CustomComponent},
  {path: 'dataimport',component:DataimportComponent},
  {path: 'reporting',component:ReportingComponent},
  {path: 'termination',component:TerminationComponent},
  {path: 'customers',component:CustomersComponent},
  {path: 'projects',component:ProjectsComponent},
  {path: 'projectreport',component:ProjectreportComponent},
  {path: 'viewreport',component:ViewreportComponent},
  {path: 'empreport',component:EmpreportComponent},
  {path: 'empviewreport',component:ViewempComponent},
  {path: 'attendance',component:AttendancesummaryComponent},
  {path: 'attendancereport',component:SummaryviewComponent},
  {path: 'myrecords',component:MyrecordsComponent},
  {path: 'punchinout',component:PunchinoutComponent},
  {path: 'attendancerecord',component:RecordsComponent},
  {path: 'configuration',component:ConfigurationComponent},
  {path: 'employeetimesheets',component:EmptimesheetsComponent},
  {path: 'viewtimesheets',component:NextpageComponent},
  {path: 'mytracker',component:MytrackerComponent},
  {path: 'emptracker',component:EmptrackerComponent},
  {path: 'trackerinfo',component:TrackerinfoComponent},
  {path: 'managereviews',component:ManagereviewsComponent},
  {path: 'reviewlist',component:ReviewlistComponent},
  {path: 'myreviews',component:MyreviewsComponent},
  {path: 'kpi',component:KpisComponent},
  {path: 'trackers',component:TrackersComponent},
  {path: 'jobtitle',component:JobtitlesComponent},
  {path: 'paygrades',component:PaygradesComponent},
  {path: 'employementstatus',component:EmploymentstatusComponent},
  {path: 'jobcategories',component:JobcategoriesComponent},
  {path: 'workshift',component:WorkshiftComponent},
  {path: 'skills',component:SkillsComponent},
  {path: 'education',component:EducationComponent},
  {path: 'certificates',component:CertificatesComponent},
  {path: 'language',component:LanguagesComponent},
  {path: 'locations',component:LocationsComponent},
  {path: 'nationalities',component:NationalitiesComponent},
  {path: 'generalinformation',component:GeneralinfoComponent},
  {path: 'emailconfiguration',component:EmailconfigurationComponent},
  {path: 'modules',component:ModulesComponent},
  {path: 'notifications',component:EmailsubscriptionsComponent},
  {path: 'leaveapplicants',component:LeaveapplicantsComponent},
  {path: 'leaveapprovals',component:LeaveapprovalsComponent},
  {path: 'leaverejected',component:LeaverejectionsComponent},
  {path: 'newnotification',component:CreatenotificationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {
}
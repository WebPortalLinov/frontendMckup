import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { DashboardComponent } from './components/Hrms/dashboard/dashboard.component';
import { UserComponent } from './components/Hrms/user/user.component';
import { DepartmentsComponent } from './components/Hrms/departments/departments.component';
import { EmployeeComponent } from './components/Hrms/employee/employee.component';
import { ActivitiesComponent } from './components/Hrms/activities/activities.component';
import { HolidayComponent } from './components/Hrms/holiday/holiday.component';
import { EventsComponent } from './components/Hrms/events/events.component';
import { PayrollComponent } from './components/Hrms/payroll/payroll.component';
import { AccountsComponent } from './components/Hrms/accounts/accounts.component';
import { ReportComponent } from './components/Hrms/report/report.component';
import { ProjectDashboardComponent } from './components/Project/project-dashboard/project-dashboard.component';
import { ProjectListComponent } from './components/Project/project-list/project-list.component';
import { ProjectTaskboardComponent } from './components/Project/project-taskboard/project-taskboard.component';
import { ProjectTicketListComponent } from './components/Project/project-ticket-list/project-ticket-list.component';
import { ProjectTicketDetailComponent } from './components/Project/project-ticket-detail/project-ticket-detail.component';
import { ProjectClientsComponent } from './components/Project/project-clients/project-clients.component';
import { ProjectTodoListComponent } from './components/Project/project-todo-list/project-todo-list.component';
import { JobDashboardComponent } from './components/Jobs/job-dashboard/job-dashboard.component';
import { JobPosotionsComponent } from './components/Jobs/job-posotions/job-posotions.component';
import { JobApplicationComponent } from './components/Jobs/job-application/job-application.component';
import { JobResumesComponent } from './components/Jobs/job-resumes/job-resumes.component';
import { JobSettingsComponent } from './components/Jobs/job-settings/job-settings.component';
import { RegisterComponent } from './core/layouts/login/register/register.component';
// import { ForgotPasswordComponent } from './components/Authentication/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './components/Authentication/page-not-found/page-not-found.component';
import { PageNotWorkingComponent } from './components/Authentication/page-not-working/page-not-working.component';
import { FontAwesomeComponent } from './components/Icon/font-awesome/font-awesome.component';
import { FeatherComponent } from './components/Icon/feather/feather.component';
import { LineIconComponent } from './components/Icon/line-icon/line-icon.component';
import { FlagIconComponent } from './components/Icon/flag-icon/flag-icon.component';
import { PaymentIconComponent } from './components/Icon/payment-icon/payment-icon.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CardComponent } from './components/Widgets/card/card.component';
import { CardImagesComponent } from './components/Widgets/card-images/card-images.component';
import { DataComponent } from './components/Widgets/data/data.component';
import { SocialComponent } from './components/Widgets/social/social.component';
import { CalendarComponent } from './components/Sidebar/calendar/calendar.component';
import { ChatComponent } from './components/Sidebar/chat/chat.component';
import { ContactInfoComponent } from './components/Sidebar/contact-info/contact-info.component';
import { FileManagerComponent } from './components/Sidebar/file-manager/file-manager.component';
import { PageSearchComponent } from './components/Sidebar/page-search/page-search.component';
import { AppSettingComponent } from './components/Topbar/app-setting/app-setting.component';
import { PageProfileComponent } from './components/Topbar/page-profile/page-profile.component';

import { LoginPageComponent } from './core/layouts/login/pages/login/login.component';
import { SignInComponent } from './core/layouts/login/components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './core/layouts/login/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './core/layouts/login/components/reset-password/reset-password.component';

import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './core/layouts/login/home/home.component';

const routes: Routes = [
    // TopBar Routes

    // Authetication Routes

    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent, data: { title: ':: Epic ::' } },
    {
        path: 'home',
        component: LoginPageComponent,
        children: [
            {
                path:'',
                component:HomeComponent

            },
            {
                path: 'login',
                component: SignInComponent,
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent,
            },
        ],
    },

   
    // {
    //     path: 'forgot-password',
    //     component: ForgotPasswordComponent,
    //     data: { title: ':: Epic ::' },
    // },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent,
        data: { title: ':: Epic ::' },
    },
    {
        path: 'page-not-working',
        component: PageNotWorkingComponent,
        data: { title: ':: Epic ::' },
    },

    // Hrms Routes

    // {
    //     path: 'dashboard',
    //     component: DashboardComponent,
    //     data: { title: ':: Epic :: Home ::' },
    // },
    {
        path: 'users',
        component: UserComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'department',
        component: DepartmentsComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'employee',
        component: EmployeeComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'activity',
        component: ActivitiesComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'holiday',
        component: HolidayComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'events',
        component: EventsComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'payroll',
        component: PayrollComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'account',
        component: AccountsComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'report',
        component: ReportComponent,
        data: { title: ':: Epic :: Home ::' },
    },

    // Project Routes

    {
        path: 'project-dashboard',
        component: ProjectDashboardComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'project-list',
        component: ProjectListComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'project-taskbar',
        component: ProjectTaskboardComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'ticket-list',
        component: ProjectTicketListComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'ticket-detail',
        component: ProjectTicketDetailComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'project-client',
        component: ProjectClientsComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'todo-list',
        component: ProjectTodoListComponent,
        data: { title: ':: Epic :: Home ::' },
    },

    // Jobs Routes

    {
        path: 'job-dashboard',
        component: JobDashboardComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'job-position',
        component: JobPosotionsComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'job-application',
        component: JobApplicationComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'job-resume',
        component: JobResumesComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'job-setting',
        component: JobSettingsComponent,
        data: { title: ':: Epic :: Home ::' },
    },

    // Icon Routes
    {
        path: 'font-awesome',
        component: FontAwesomeComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'feather',
        component: FeatherComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'line-icon',
        component: LineIconComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'flag-icon',
        component: FlagIconComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'payment-icon',
        component: PaymentIconComponent,
        data: { title: ':: Epic :: Home ::' },
    },

    // Widgets Routes
    {
        path: 'card',
        component: CardComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'card-image',
        component: CardImagesComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'data',
        component: DataComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'social',
        component: SocialComponent,
        data: { title: ':: Epic :: Home ::' },
    },

    // Gallery Routes
    {
        path: 'gallery',
        component: GalleryComponent,
        data: { title: ':: Epic :: Home ::' },
    },

    // Sidebar Routes
    {
        path: 'calendar',
        component: CalendarComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'contact-info',
        component: ChatComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'chat',
        component: ContactInfoComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'filemanager',
        component: FileManagerComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'page-search',
        component: PageSearchComponent,
        data: { title: ':: Epic :: Home ::' },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

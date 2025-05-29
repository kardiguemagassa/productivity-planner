import { Routes } from '@angular/router';
import { ShellLayoutComponent } from './membership/core/shell/shell.layout.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./visitor/home/home.page.component').then(component => component.HomePageComponent),
    title: 'Productivity Planner',
  },
  {
    path: 'login',
    loadComponent: () => import('./visitor/login/login.page.component').then(component => component.LoginPageComponent),
    title: 'Login'
  },
  {
    path: 'signup',
    loadComponent: () => import('./visitor/signup/signup.page.component').then(component => component.SignupPageComponent),
    title: 'Signup',
  },
  {
    path: 'app',
    title: 'Productivity Planner',
    component: ShellLayoutComponent,  
    loadChildren: () => import('./membership/membership.routes').then(routes => routes.membershipRoutes),
  },
  /*{
    path: 'app/dashboard',
    loadComponent: () => import('./membership/dashboard/dashboard.page.component').then(c => c.DashboardPageComponent),
    title: 'Dashboard',
  },
  {
    path: 'app/planning',
    loadComponent: () => import('./membership/planning/planning.page.component').then(c => c.PlanningPageComponent),
    title: 'Planning',
  },
  {
    path: 'app/workday',
    loadComponent: () => import('./membership/workday/workday.page.component').then(c => c.WorkdayPageComponent),
    title: 'Workday',
  },
  {
    path: 'app/profile',
    loadComponent: () => import('./membership/profile/profile.page.component').then(c => c.ProfilePageComponent),
    title: 'Profile',
  },
  {
    path: 'app/settings',
    loadComponent: () => import('./membership/settings/settings.page.component').then(c => c.SettingsPageComponent),
    title: 'Settings',
  },*/
];

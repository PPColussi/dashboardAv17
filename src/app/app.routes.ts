import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
      },
      {
        path: 'feder-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component')
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./dashboard/pages/users/users.component')
      },
      {
        path: 'view-transitions-1',
        title: 'View Transitions 1',
        loadComponent: () => import('./dashboard/pages/view-transitions/view-transitions1.component')
      },
      {
        path: 'view-transitions-2',
        title: 'View Transitions 2',
        loadComponent: () => import('./dashboard/pages/view-transitions/view-transitions2.component')
      },
      {
        path: 'inputs-outputs',
        title: 'Inputs Outputs',
        loadComponent: () => import('./dashboard/pages/input-output/input-output.component')
      },
      {
        path: 'material',
        title: 'Angular Material',
        loadComponent: () => import('./dashboard/pages/material/material.component')
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'/dashboard',
    pathMatch: 'full'
  }
];

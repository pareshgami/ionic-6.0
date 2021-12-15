import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'date-time-picker',
    pathMatch: 'full'
  },
  {
    path: 'date-time-picker',
    loadChildren: () => import('./date-time-picker/date-time-picker.module').then( m => m.DateTimePickerPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'header-fade',
    loadChildren: () => import('./header-fade/header-fade.module').then( m => m.HeaderFadePageModule)
  },
  {
    path: 'breadcrumb',
    loadChildren: () => import('./breadcrumb/breadcrumb.module').then( m => m.BreadcrumbPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

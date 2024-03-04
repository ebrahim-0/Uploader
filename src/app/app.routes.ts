import { Routes } from '@angular/router';
import { UploaderComponent } from './Components/uploader/uploader.component';

export const routes: Routes = [
  { path: '', redirectTo: 'uploader', pathMatch: 'full' },
  { path: 'uploader', component: UploaderComponent },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoriesComponent } from './directories.component';

const routes: Routes = [{ path: '', component: DirectoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectoriesRoutingModule { }

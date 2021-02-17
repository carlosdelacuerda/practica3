import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { BlogComponent } from './components/blog/blog.component';
import { Error404Component } from './components/error404/error404.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/blog'},
  {path: 'blog', component: BlogComponent},
  {path: 'new', component: NewComponent},
  {path: '**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

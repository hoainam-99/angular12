import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GetDataComponent } from './get-data/get-data.component';
import { PostDataComponent } from './post-data/post-data.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },{
    path: 'home',
    component: HomeComponent,
  },{
    path: 'about',
    component: AboutComponent
  },{
    path: 'templateForm',
    component: TemplateDrivenFormComponent
  },{
    path: 'reactiveForm',
    component: ReactiveFormComponent
  },{
    path: 'getData',
    component: GetDataComponent
  },{
    path: 'postData',
    component: PostDataComponent
  },{
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

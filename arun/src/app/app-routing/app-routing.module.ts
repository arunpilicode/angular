import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AboutComponent} from '../about/about.component';
import {HomeComponent} from '../home/home.component';
import {ContactusComponent} from '../contactus/contactus.component';
  import { from } from 'rxjs';
const routes: Routes=[
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contactus',component:ContactusComponent},

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

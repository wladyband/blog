import { Image2Component } from './../blog/image2/image2.component';
import { InicioComponent } from './../blog/inicio/inicio.component';
import { CurriculoComponent } from './../blog/curriculo/curriculo.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NodePaginateComponent } from '../blog/node-paginate/node-paginate.component';
import { Image1Component } from '../blog/image1/image1.component';



const ROUTES: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'curriculo', component: CurriculoComponent },
  { path: 'node_implement_paginate', component: NodePaginateComponent },
  { path: 'image1', component: Image1Component },
  { path: 'image2', component: Image2Component },

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

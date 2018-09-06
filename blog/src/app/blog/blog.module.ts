import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NodePaginateComponent } from './node-paginate/node-paginate.component';
import { Image1Component } from './image1/image1.component';
import { Image2Component } from './image2/image2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CurriculoComponent, 
    InicioComponent, 
    HeaderComponent, 
    NodePaginateComponent, 
    Image1Component, 
    Image2Component
  ],
  exports: [
    CurriculoComponent, 
    InicioComponent, 
    HeaderComponent,
    NodePaginateComponent,
    Image1Component, 
    Image2Component
  ]
})
export class BlogModule { }

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { Dicas1Component } from './dicas1/dicas1.component';
import { LateralCurriculoComponent } from './lateral-curriculo/lateral-curriculo.component';
import { FooterComponent } from './footer/footer.component';
import { PaginateGifComponent } from './paginate-gif/paginate-gif.component';
import { MetamodelGifComponent } from './metamodel-gif/metamodel-gif.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    InicioComponent, 
    NotfoundComponent, 
    HeaderComponent, 
    CurriculoComponent, 
    Dicas1Component, 
    LateralCurriculoComponent, 
    FooterComponent, 
    PaginateGifComponent, 
    MetamodelGifComponent
  ],
  exports: [
    InicioComponent, 
    NotfoundComponent,  
    HeaderComponent, 
    CurriculoComponent, 
    Dicas1Component,
    LateralCurriculoComponent,
    FooterComponent,
    PaginateGifComponent,
    MetamodelGifComponent
  ]
})
export class BlogModule { }

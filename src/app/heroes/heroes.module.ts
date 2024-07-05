import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { materialModuleSpecifier } from '@angular/cdk/schematics';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HeroPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    EditPageComponent,
    CardComponent,
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatGridListModule, MatInputModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import { SlideshowModule } from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MinicartComponent } from './components/minicart/minicart.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    LogoComponent,
    SearchbarComponent,
    MinicartComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

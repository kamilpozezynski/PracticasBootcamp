import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SeriesComponent } from './series/series.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule} from '@angular/forms';
import { SeriesService } from './series/series.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SeriesComponent,
    InicioComponent,
  ],
  imports: [
      HttpClientModule,
      HttpModule,
      FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

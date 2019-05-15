import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PcPartsComponent } from './pc-parts/pc-parts.component';
import { AssemblyBenchComponent } from './assembly-bench/assembly-bench.component';
import { BenchDetailComponent } from './assembly-bench/bench-detail/bench-detail.component';
import { BenchListComponent } from './assembly-bench/bench-list/bench-list.component';
import { PartsEditComponent } from './pc-parts/parts-edit/parts-edit.component';
import { BenchItemComponent } from './assembly-bench/bench-list/bench-item/bench-item.component';
import { DropwdownDirective } from './shared/dropwdown.directive';
import { PcPartsService } from './pc-parts/pc-parts.service';
import { AppRoutingModule } from './app-routing.module';
import { BenchStartComponent } from './assembly-bench/bench-start/bench-start.component';
import { ContentNotFoundComponent } from './content-not-found/content-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PcPartsComponent,
    AssemblyBenchComponent,
    BenchDetailComponent,
    BenchListComponent,
    PartsEditComponent,
    BenchItemComponent,
    DropwdownDirective,
    BenchStartComponent,
    ContentNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PcPartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

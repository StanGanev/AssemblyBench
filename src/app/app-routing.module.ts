import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AssemblyBenchComponent } from './assembly-bench/assembly-bench.component';
import { PcPartsComponent } from './pc-parts/pc-parts.component';
import { BenchStartComponent } from './assembly-bench/bench-start/bench-start.component';
import { BenchDetailComponent } from './assembly-bench/bench-detail/bench-detail.component';
import { ContentNotFoundComponent } from './content-not-found/content-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'bench', pathMatch: 'full' },
    {
        path: 'bench', component: AssemblyBenchComponent, children: [
            { path: '', component: BenchStartComponent },
            { path: ':id', component: BenchDetailComponent }
        ]
    },
    { path: 'parts', component: PcPartsComponent },
    { path: 'not-found', component: ContentNotFoundComponent},
    { path: '**', redirectTo: '/not-found'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
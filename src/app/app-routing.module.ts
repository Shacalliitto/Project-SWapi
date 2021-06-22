import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcharactersComponent } from './allcharacters/allcharacters.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'random', component: HomeComponent},
  { path: '',   redirectTo: '/allcharacters', pathMatch: 'full' },
  { path: 'allcharacters', component: AllcharactersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

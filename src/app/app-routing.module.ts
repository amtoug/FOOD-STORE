import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FoodPageComponent } from './FoodPage/Foodpage.component';
import { FoodItemsComponent } from './Cart-items/Cart-items.component';

const routes: Routes = [
  {path:"",redirectTo:"FoodMenu",pathMatch:"full"},
  {path:"CartFood",component:FoodItemsComponent},
  {path:"CartFood/:id",component:FoodItemsComponent},
  {path:"FoodMenu",component:HomePageComponent},
  {path:":ValueSearch",component:HomePageComponent},
  {path:"Tag/:Tag",component:HomePageComponent},
  {path:"FoodPage/:id",component:FoodPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

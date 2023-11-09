import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceFoodMenuService } from './Services/service-food-menu.service';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { FormsModule } from '@angular/forms';
import { SearchFoodComponent } from './search-food/search-food.component';
import { DetailsFoodComponent } from './details-food/details-food.component';
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './FoodPage/Foodpage.component';
import { FoodItemsComponent } from './Cart-items/Cart-items.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    StartRatingComponent,
    SearchFoodComponent,
    DetailsFoodComponent,
    TagsComponent,
    FoodPageComponent,
    FoodItemsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceFoodMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './feature/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './feature/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './feature/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './feature/recipe-book/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './feature/recipe-book/recipes.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

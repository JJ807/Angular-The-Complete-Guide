import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAxOS1qYWt1YmstMDE4MC1jb3VzLWNvdXMtdmVnZXRhYmxlcy1wYW4uanBn.jpg?s=p7NYnOdKkx96F67qlvJO0CCRCKVkIrIh8s77KQxBzBg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAxOS1qYWt1YmstMDE4MC1jb3VzLWNvdXMtdmVnZXRhYmxlcy1wYW4uanBn.jpg?s=p7NYnOdKkx96F67qlvJO0CCRCKVkIrIh8s77KQxBzBg'
    ),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}

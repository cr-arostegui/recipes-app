import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.brit.co%2Findian-food-recipes%2F&psig=AOvVaw2E_kAnL60blrDqTb916Khf&ust=1593903551298000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCm-s2XsuoCFQAAAAAdAAAAABAI'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

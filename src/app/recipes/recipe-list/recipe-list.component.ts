import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjg2NzAwMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0Mjg2NDgyMH0.M3iii2BGIn3WRd0Jl44ifXjJ4oLifYz_has63_qUVVQ/image.jpg?width=980'),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjg2NzAwMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0Mjg2NDgyMH0.M3iii2BGIn3WRd0Jl44ifXjJ4oLifYz_has63_qUVVQ/image.jpg?width=980'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

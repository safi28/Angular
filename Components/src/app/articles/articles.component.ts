import { Component, OnInit, Injectable } from "@angular/core";
import { Article } from "../models/article";
import { ArticleData } from "../data/data";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})

export class ArticlesComponent implements OnInit {
  articles: Article[];
  constructor(private articleData: ArticleData) {}

  ngOnInit() {
    this.articles = new ArticleData().getData();
  }
}

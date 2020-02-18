import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ArticleService } from "../article.service";
import { Article } from "src/app/models/article";
import { Router } from '@angular/router';

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required]
    });
  }

  createArticleHandler(article) {
    console.log(article);
    
    this.articleService.createArticle(article);
    this.router.navigate(['list'])
    
  }
}

import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { ArticleService } from "../article.service";
import { Article } from "src/app/models/article";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  // @ViewChild("amountInput", { static: false }) amountInput: ElementRef<
  //   HTMLInputElement
  // >;

  @Input() selectArticles: Article;

  isRouteComponent = false;

  get selectedCause() {
    return this.articlesService.selectArticle;
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticleService
  ) {}

  ngOnInit() {
    // if (this.isRouteComponent) {
    //   this.articlesService
    //     .load(+this.activatedRoute.snapshot.params.id)
    //     .subscribe((cause: Article) => {
    //       // if (!cause) { this.router.navigate([]); }
    //       this.articlesService.selectArticle(cause);
    //     });
    // }
  }
}

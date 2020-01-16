import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../models/article";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input() article: Article[];
  @Input() articleDesc: string;
  decToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show More";

  constructor() {
    this.articleDescLen = 0;
    this.decToShow = "";
  }

  readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.decToShow = this.articleDesc.substring(0, this.articleDescLen);
      
    }
  }

  toggleImage() {
    if (this.imageButtonTitle !== "Hide Image") {
      this.imageIsShown = true;
      this.imageButtonTitle = "Hide Image";
    } else {
      this.imageIsShown = false;
      this.imageButtonTitle = 'Show More'
    }
  }

  hideDesc() {
    this.decToShow = '';
    this.articleDescLen = 0;
    this.showReadMoreBtn = false;
    this.showHideBtn = true;
  }

  ngOnInit() {}
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { Article } from "src/app/models/article";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { ArticleService } from "../article.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
 articles: Article[]
  dataSource: MatTableDataSource<Article>;

  constructor(private articleApi: ArticleService) {
    // this.articleApi
    //   .load()
    //   .snapshotChanges()
    //   .subscribe(articles => {
    //     articles.forEach(item => {
    //       let a = item.payload.toJSON();
    //       a["key"] = item.key;          
    //       this.BookData.push(a as Article);          
    //     });
    //     this.dataSource = new MatTableDataSource(this.BookData);
    //     /* Pagination */
    //     setTimeout(() => {
    //       this.dataSource.paginator = this.paginator;
    //     }, 0);
    //   });
  }

  ngOnInit() {
    this.articleApi.load().snapshotChanges().subscribe(data => {
      this.articles = data.map(e => {
        return {
          id: e.payload.toJSON(),
          ...e.payload.toJSON()
        } as Article;
      })
    });
  }
}

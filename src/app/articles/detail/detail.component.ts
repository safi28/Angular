import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  likes: number = 0;

  id: string;
  article$: Observable<Article>;
  articleFood: Observable<Article>;

  isRouteComponent = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private af: AngularFirestore,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.article$ = this.af.doc<Article>("travel/" + this.id).valueChanges();
    this.articleFood = this.af.doc<Article>("food/" + this.id).valueChanges();
  }

  deleteFood() {
    this.af.doc<Article>("food/" + this.id).delete();
    this.router.navigate(["/food"]);
  }

  likeFood() {
    this.likes++;
    this.af
      .doc<Article>("food/" + this.id)
      .update({ like: this.likes })
      .then();
  }

  deleteTravel() {
    this.af.doc<Article>("travel/" + this.id).delete();
    this.router.navigate(["/list"]);
  }

  likeTravel() {
    this.likes++;
    this.af
      .doc<Article>("travel/" + this.id)
      .update({ like: this.likes })
      .then();
  }
}

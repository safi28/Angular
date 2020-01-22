import { Component, OnInit } from '@angular/core';
import Article from '../models/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  travelArticles: Article[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const [travel] = this.route.snapshot.data['articles'];

    this.travelArticles = travel;
  }

}

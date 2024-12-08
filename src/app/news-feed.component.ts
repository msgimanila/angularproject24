import { Component, OnInit } from '@angular/core';
import Parser from 'rss-parser';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  news: any[] = [];
  loading = true;

  constructor() {}

  async ngOnInit(): void {
    const parser = new Parser();
    const feedUrl = 'https://news.google.com/rss'; // Replace with any public RSS feed URL

    try {
      const feed = await parser.parseURL(feedUrl);
      this.news = feed.items || [];
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
    } finally {
      this.loading = false;
    }
  }
}

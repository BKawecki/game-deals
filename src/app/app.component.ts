import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameServiceService } from './game-service.service';
import { CommonModule } from '@angular/common';
import { Deal } from './deal.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  dealsArray: Deal[] = [];

  constructor(private deals: GameServiceService) {}

  ngOnInit(): void {
    this.deals.fetchDeals().subscribe((data) => {
      this.dealsArray = data;
      this.dealsArray = this.dealsArray.map((item) => {
        return {
          dealRating: item.dealRating,
          normalPrice: item.normalPrice,
          salePrice: item.salePrice,
          thumb: item.thumb,
          title: item.title
        };
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent implements OnInit {

 talentLists = [{
      name: 'usui',
      image: 'https://testasmpublic-14e65.kxcdn.com/1652999675_56815616dbd7146cd2745998abe861_harry-potter-book-sets.jpg.webp',
      type: 'Teacher',
      Hourly_Pay: 'Nu.100',
      currently_available: 'Yes',
      qualifications: 'master in boss',
      rating: '4 star'

  },
  {
      name: 'Sonam',
      image: 'https://testasmpublic-14e65.kxcdn.com/1652999675_56815616dbd7146cd2745998abe861_harry-potter-book-sets.jpg.webp',
      type: 'Barber',
      Hourly_Pay: 'Nu.100',
      currently_available: 'Yes',
      qualifications: 'master in boss',
      rating: '4 star'
  },
  {
      name: 'Boss',
      image: 'https://testasmpublic-14e65.kxcdn.com/1652999675_56815616dbd7146cd2745998abe861_harry-potter-book-sets.jpg.webp',
      type: 'Plumber',
      Hourly_Pay: 'Nu.100',
      currently_available: 'Yes',
      qualifications: 'master in boss',
      rating: '4 star'
  },
  {
      name: 'Cute',
      image: 'https://testasmpublic-14e65.kxcdn.com/1652999675_56815616dbd7146cd2745998abe861_harry-potter-book-sets.jpg.webp',
      type: 'Artist',
      Hourly_Pay: 'Nu.100',
      currently_available: 'Yes',
      qualifications: 'master in boss',
      rating: '4 star'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(list: any) {

  }
}

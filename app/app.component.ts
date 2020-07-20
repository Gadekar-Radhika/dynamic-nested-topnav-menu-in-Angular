import {Component, ViewEncapsulation} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './nav-item';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { 
  version = VERSION;
  navItems: NavItem[] = [
     {
      displayName: 'HOME',
      route: 'become-angular-tailer',
     },
    {
      displayName: 'CATEGORIES',
      children: [
        {
          displayName: 'Pendants',
          children: [
            {
              displayName: 'Gold Pendants',
              route: 'michael-prentice',
            },
            {
              displayName: 'Silver Pendants',
              route: 'stephen-fluin',
            },
            {
              displayName: 'Diamond Pendants',
              route: 'mike-brocchi',
            }
          ]
        },
        {
          displayName: 'Bangles',
          children: [
            {
              displayName: 'Wedding Bangles',
              route: 'material-design'
            },
            {
              displayName: '22k Gold Bangles',
              route: 'what-up-web'
            },
            {
              displayName: '22k Silver Bangles',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Casual Bangles',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Rings',
          children: [
            {
              displayName: 'Gold Rings',
              route: 'material-design'
            },
            {
              displayName: 'Wedding Rings',
              route: 'what-up-web'
            },
          ]
        },
        {
          displayName: 'Cufflinks',
          route: 'feedback'
        },
        {
          displayName: 'Earrings',
          children: [
            {
              displayName: 'Gold Earrings',
              route: 'material-design'
            },
            {
              displayName: 'Diamond Earrings',
              route: 'what-up-web'
            },
            {
              displayName: 'Jhumkas',
              route: 'what-up-web'
            },
          ]
        },
        {
          displayName: 'Toe Rings',
          route: 'feedback'
        },
        {
          displayName: 'Necklace',
          children: [
            {
              displayName: '22k Gold Necklace',
              route: 'material-design'
            },
            {
              displayName: '22k Silver Necklace',
              route: 'what-up-web'
            },
            {
              displayName: 'Limited Edition Collection',
              route: 'what-up-web'
            },
          ]
        },
      ]
    },
    {
      displayName: 'MY ACCOUNT',
      route: 'material-design',
     },
     {
      displayName: 'MY CART (0)',
      route: 'what-up-web',
     },
  
  ];
}

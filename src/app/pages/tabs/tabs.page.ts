import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) { }
  navigate(tab) {
    switch (tab) {
      case 'tab1':
        this.router.navigateByUrl(`/tabs/tab1`);
        break;
      case 'tab2':
        this.router.navigateByUrl(`/tabs/tab2`);
        break;
    }
  }
}

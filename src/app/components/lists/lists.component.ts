import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonList) list: IonList;
  @Input() finished = true;

  constructor(public wishesService: WishesService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  selectedList(list: List) {
    if (this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  }

  eraseList(list: List) {
    this.wishesService.eraseList(list);
  }

  async changeTitle(list: List) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Change list title',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name',
          value: list.title
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: ()=>{
          this.list.closeSlidingItems();
          }
        },
        {
          text: 'Change',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }
            list.title = data.title
            console.log(list);
            this.wishesService.saveStorage();
            this.list.closeSlidingItems();
          }
        }
      ]
    });

    await alert.present();
  }


}

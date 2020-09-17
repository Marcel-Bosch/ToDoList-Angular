import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemList } from 'src/app/models/item-list.model';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName = '';

  constructor(private wishesService: WishesService,
    private route: ActivatedRoute) {
    const listId = this.route.snapshot.paramMap.get('listId');
    this.list = this.wishesService.getList(listId);
  }

  ngOnInit() {
  }
  addItem() {
    if (this.itemName.length === 0) {
      return;
    }
    const newItem = new ItemList(this.itemName);
    this.list.items.push(newItem);
    this.itemName = '';
    this.wishesService.saveStorage();
  }

  changeCheck(item: ItemList) {
    const pending = this.list.items.filter(itemData => !itemData.finished).length;
    if (pending === 0) {
      this.list.finishedOn = new Date();
      this.list.finished = true;
    } else {
      this.list.finishedOn = null;
      this.list.finished = false;
    }
    this.wishesService.saveStorage();
  }

  erase(i: number) {
    this.list.items.splice(i, 1);
    this.wishesService.saveStorage();
  }

}

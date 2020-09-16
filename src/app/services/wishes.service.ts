import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  public lists: List[] = [];
  constructor() { 
    const list1 = new List('Test list 1');
    const list2 = new List('Test list 2');

    this.lists.push(list1,list2);
    
  }
}

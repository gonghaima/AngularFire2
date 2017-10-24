import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  itemsList: any;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
    this.items.subscribe(response => {
      const data = response[0];

      const arr = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          arr.push(key + '=' + data[key]);
        }
      }
      const result = arr.join(',');

      this.itemsList = result;
    });
  }
}

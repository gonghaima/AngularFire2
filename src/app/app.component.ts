import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

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
    this.items.take(9).subscribe(
      next => {
        console.log('next', next);
        let resultArr = [];
        const tempItem = next[0];

        resultArr = Object.keys(tempItem).map(function(key) {
          return [(key.toString()), tempItem[key]];
        });

        this.itemsList = resultArr;
      },
      error => console.log('error', error),
      () => console.log('completed')
    );
  }
}

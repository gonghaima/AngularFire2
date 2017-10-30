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
    this.items
      .take(2)
      .subscribe(
        next => {
          const data = next[0];
                const arr = [];
                for (const key in data) {
                  if (data.hasOwnProperty(key)) {
                    arr.push(key + '=' + data[key]);
                  }
                }
                const result = arr.join(',');
                this.itemsList = result.split(',');
                const options = {
                  body: this.itemsList,
                  icon: `https://www.straightsell.com.au/documents/attache.jpg`
                };
                //#region
                // Let's check if the browser supports notifications
                if (!('Notification' in window)) {
                  alert('This browser does not support desktop notification');
                } else if (Notification['permission'] === 'granted') {
                  // Let's check whether notification permissions have already been granted
                  // If it's okay let's create a notification
                  const notification = new Notification('Price updated!', options);
                } else if (Notification['permission'] !== 'denied') {
                  // Otherwise, we need to ask the user for permission
                  Notification.requestPermission(function(permission) {
                    // If the user accepts, let's create a notification
                    if (permission === 'granted') {
                      const notification = new Notification('Price updated!', options);
                    }
                  });
                }
                //#endregion
        },
        error => console.log('error', error),
        () => console.log('completed')
      );
  }
}

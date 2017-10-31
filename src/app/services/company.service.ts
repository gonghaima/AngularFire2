import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ObjToArrayService } from './obj-to-array.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompanyService {
  items: Observable<any>;
  // itemsResult: any;
  constructor(public db: AngularFirestore, objToArrayService: ObjToArrayService) {
    this.items = db.collection('company').valueChanges();
    // this.items.take(9).subscribe(
    //   next => {
    //     this.itemsResult = objToArrayService.convert(next);
    //   },
    //   error => console.log('error', error),
    //   () => console.log('completed')
    // );
  }

  saveCompany() {
    this.db.collection('company').add({'name': 'company2'});
  }

}

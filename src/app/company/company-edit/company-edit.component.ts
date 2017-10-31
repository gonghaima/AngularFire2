import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ObjToArrayService } from '../../services/obj-to-array.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  items: any;
  itemsList: any;

  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {}
  saveCompany() {
    this.companyService.saveCompany();
  }
}

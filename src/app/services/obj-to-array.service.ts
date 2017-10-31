import { Injectable } from '@angular/core';

@Injectable()
export class ObjToArrayService {

  constructor() { }
  public convert(source) {
    const tempData = Object.keys(source).map(function(key) {
      return [(key.toString()), source[key]];
    });
    debugger;
    return tempData;
  }
}

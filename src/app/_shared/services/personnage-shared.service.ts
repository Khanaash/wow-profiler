import { Injectable } from '@angular/core';
import {Personnage} from "app/_shared/model/personnage";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PersonnageSharedService {
  private personnageSubject: Subject<Personnage> = new Subject();
  constructor() { }

  public pushPersonnage(personnage: Personnage): void {
    this.personnageSubject.next(personnage);
  }

  public getPersonnage(): Observable<Personnage> {
    return this.personnageSubject.asObservable();
  }
}

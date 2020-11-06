import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { take, tap } from 'rxjs/operators';
import { TestData } from 'src/app/modules/home/home.component';
import { FirestoreService } from '../services/firestore.service';

@Injectable({ providedIn: 'root' })
export class DataResolver implements Resolve<any> {
	constructor(private firestoreService: FirestoreService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<TestData[]> {
		return this.firestoreService.getCollection<TestData>('test').pipe(take(1));
	}
}

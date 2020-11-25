import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TransferState } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class FirestoreService {
	constructor(private state: TransferState, private firestore: AngularFirestore) {}

	getCollection<T>(collectionRef: string): Observable<T[]> {
		const collection = this.firestore.collection<T>(collectionRef, ref => ref.where('active', '==', true));
		return collection.valueChanges();
	}
}

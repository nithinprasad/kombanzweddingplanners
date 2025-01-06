import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataloaderService {

  constructor(private firestore: AngularFirestore) {
  }
  
   addDocument(collectionName: string, data: any) {
    return this.firestore.collection(collectionName).add(data);
   }
  
  addDocumentWithDocumentId(collectionName: string, documentId: any, data: any) {
    return this.firestore.collection(collectionName).doc(documentId).set(data);
  }

  fetchCollection(collectionName: string): Observable<any[]> {
  return this.firestore.collection(collectionName, (ref) => ref.limit(10)).snapshotChanges().pipe(
    map((snapshot: any[]) => {
      return snapshot.map((docChange) => {
        return { id: docChange.payload.doc.id, ...docChange.payload.doc.data() };
      });
    })
  );
  }
  
  fetchCollectionPaginated(collectionName: string, currentPage: string): Observable<any[]> {
  return this.firestore.collection(collectionName, (ref) => ref.limit(10)).snapshotChanges().pipe(
    map((snapshot: any[]) => {
      return snapshot.map((docChange) => {
        return { id: docChange.payload.doc.id, ...docChange.payload.doc.data() };
      });
    })
  );
}
  
   
}

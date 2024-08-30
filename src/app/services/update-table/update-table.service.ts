import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateTableService {
  private updateTableSource = new Subject<void>();
  updateTable$ = this.updateTableSource.asObservable();

  updateTable() {
    this.updateTableSource.next();
  }
}

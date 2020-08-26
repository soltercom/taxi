import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private snackBar: MatSnackBar) {}

  message(message: string): void {
    this.snackBar.open(message, '', { duration: 3000 });
  }

  error(error: string): void {
    this.snackBar.open(error, 'ОШИБКА!', { duration: 3000 });
  }
}


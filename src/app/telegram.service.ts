import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMessage } from './model/message';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { InfoService } from './info.service';

const base = '';
const chatId = 0;

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  constructor(private http: HttpClient, private infoService: InfoService) {}

  private convertMessage(message: IMessage): string {

    const date = new Date(Date.parse(message.date));
    const formatDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    return `Новый заказ!
    ${message.name.toUpperCase()},
    Тел.: +7${message.phone},
    Откуда: ${message.from},
    Куда: ${message.to},
    Дата: ${formatDate} (${message.time}),
    ${message.people} чел.`;
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Возникла ошибка:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Ошибка соединения. Попробуйте еще раз.');
  }

  sendMessage(message: IMessage): void {
    const body = {
      chat_id: chatId,
      text: this.convertMessage(message)
    };

    this.http.post(base, body)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe((res: {ok: boolean}) => {
        if (res?.ok) {
          this.infoService.message('Заявка принята. Ожидайте нашего звонка.');
        }
      }, () => this.infoService.error('Ошибка соединения. Попробуйте еще раз.'));
  }
}

import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ChatUser } from '../models/chat-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsumiendoServicioService {

  hubConnection: HubConnection;
  hubBuilder: HubConnectionBuilder = new HubConnectionBuilder();
  messageSubject = new BehaviorSubject<any>(null);
  baseURL: string = `${environment.api_url}`;

  constructor(private http: HttpClient) {
    //...
    this.hubConnection = this.hubBuilder.withUrl("https://localhost:7021/message") //URL del hub en el servidor.
    .build();
    this.startConection();
  }

  startConection(){
    this.hubConnection.on('sendMessage', (chat: ChatUser) => {
      this.messageSubject.next(chat);
    });
    this.hubConnection.start();
  }

  newMessage(chatMessage: ChatUser): Observable<any> {
    // this.startConection();
    return this.http.post<any>(`${this.baseURL}/Chat/SendMessage`, chatMessage);
  }
}

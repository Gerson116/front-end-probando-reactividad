import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatUser } from 'src/app/models/chat-user';
import { ConsumiendoServicioService } from 'src/app/services/consumiendo-servicio.service';

@Component({
  selector: 'app-ejemplo-reactividad',
  templateUrl: './ejemplo-reactividad.component.html',
  styleUrls: ['./ejemplo-reactividad.component.css']
})
export class EjemploReactividadComponent implements OnInit {

  userPrueba: string = 'gsantos';
  formGroupChat: FormGroup | any;
  messages: ChatUser[];

  constructor(private formBuilder: FormBuilder,
    private services: ConsumiendoServicioService){
      this.messages = new Array<ChatUser>();
  }

  ngOnInit(): void {
    this.buildForm();
    this.cargarInformacion();
  }

  buildForm(){
    this.formGroupChat = this.formBuilder.group({
      chatMessage: ['', Validators.required]
    });
  }

  cargarInformacion(){
    //...
    this.services.messageSubject.subscribe(resp => {
      if(resp != null){
        this.messages.push(resp);
      }
    });
  }

  sendMessage(){
    //...
    let chatInfo: ChatUser = new ChatUser();
    chatInfo.message = this.formGroupChat.controls['chatMessage'].value;
    chatInfo.user = this.userPrueba;

    if(this.formGroupChat.valid){
      this.services.newMessage(chatInfo).subscribe(resp => {
      });
    }else{
      alert('favor escribir algo en la caja de texto');
    }
  }
}

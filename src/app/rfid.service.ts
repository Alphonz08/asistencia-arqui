import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class RfidService {

  private url = 'http://localhost:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

}

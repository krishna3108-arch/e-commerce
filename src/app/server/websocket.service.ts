import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket = io('http://localhost:3000');

  listenToProductUpdates(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('productUpdate', (data) => observer.next(data));
    });
  }

  listenToPriceUpdates(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('priceUpdate', (data) => observer.next(data));
    });
  }

  listenToOrderUpdates(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('orderUpdate', (data) => observer.next(data));
    });
  }

  sendPriceUpdate(update: { productId: number; price: number }) {
    console.log("📡 Sending Price Update:", update);
    this.socket.emit('updatePrice', update);
  }

  sendOrderUpdate(order: { productId: number; status: string }) {
    console.log("📡 Sending Order Update:", order);
    this.socket.emit('updateOrder', order);
  }
}

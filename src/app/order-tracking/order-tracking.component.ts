import { Component, OnInit, inject } from '@angular/core';
import { WebsocketService } from '../server/websocket.service';
import { CommonModule } from '@angular/common';

interface Order {
  productId: number;
  status: string;
}
@Component({
  selector: 'app-order-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {
  orders: { productId: number; status: string }[] = [];

  private websocketService = inject(WebsocketService);

  ngOnInit(): void {
    this.websocketService.listenToOrderUpdates().subscribe((orderUpdate: { productId: number; status: string }) => {
      console.log("🟢 Order Update Received:", orderUpdate); // Debug Log

      const existingOrder = this.orders.find(o => o.productId === orderUpdate.productId);
      if (existingOrder) {
        existingOrder.status = orderUpdate.status;
      } else {
        this.orders.push(orderUpdate);
      }
    });
  }
}

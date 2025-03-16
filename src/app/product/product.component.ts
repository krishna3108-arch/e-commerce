import { Component, OnInit, inject } from '@angular/core';
import { WebsocketService } from '../server/websocket.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';


interface Product {
  id: number;
  name: string;
  price: number;
  available: boolean;
}
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatCardModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule 
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Amazing Widget', price: 100, available: false },
    { id: 2, name: 'Super Gadget', price: 200, available: true },
    { id: 3, name: 'Cool Device', price: 300, available: true }
  ];
  private websocketService = inject(WebsocketService);

  ngOnInit(): void {
    this.websocketService.listenToProductUpdates().subscribe((productUpdate: any) => {
      const product = this.products.find(p => p.id === productUpdate.productId);
      if (product) {
        product.available = productUpdate.available;
      }
    });

    this.websocketService.listenToPriceUpdates().subscribe((update: { productId: number; price: number }) => {
      const product = this.products.find(p => p.id === update.productId);
      if (product) {
        product.price = update.price;
      }
    });
  }

  updatePrice(productId: number, newPrice: string) { 
    const priceValue = Number(newPrice);
    console.log("🟢 Update Price Clicked - Product ID:", productId, "New Price:", priceValue); // Debug Log
  
    if (!isNaN(priceValue)) {
      this.websocketService.sendPriceUpdate({ productId, price: priceValue });
    } else {
      console.error("❌ Invalid price input!");
    }
  }
  
  
  updateOrder(productId: number) {
    console.log("🟢 Update Order Clicked - Product ID:", productId);
    this.websocketService.sendOrderUpdate({ productId, status: 'Processing' });
  }
  
}  

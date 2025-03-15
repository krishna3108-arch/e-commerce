import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, OrderTrackingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce-real-time';
}

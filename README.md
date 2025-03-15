# Real-Time E-Commerce Application

## Overview

The **Real-Time E-Commerce Application** is a dynamic, web-based platform designed for users to interact with products and track orders in real-time. It leverages **Angular** for the frontend, **Socket.IO** (WebSockets) for real-time communication, and **Firebase** for backend services. Key features of the platform include:

- **Product Viewing**: Browse and view product details like name, price, and availability.
- **Real-Time Price Updates**: Users can modify product prices, with changes reflected across all connected clients immediately.
- **Order Tracking**: Track the status of orders in real-time, including changes like "Processing", "Shipped", or "Delivered".
- **Instant Availability Updates**: Product availability is updated dynamically as inventory changes.

---

## Features

- **Product List Display**: Displays a list of products along with their name, price, and availability.
- **Real-Time Price Updates**: Users can update product prices, and changes will be reflected across all clients.
- **Order Tracking**: Users can see the real-time status of their orders.
- **Product Availability Updates**: Products' availability is updated in real-time as stock changes.

---

## Technologies

- **Frontend**: Angular
- **Backend**: Firebase
- **Real-Time Communication**: Socket.IO (WebSockets)
- **Authentication (Optional)**: Firebase Authentication

---

## Setup Instructions

### Prerequisites

Ensure the following are installed:

- **Node.js** (v14 or later)
- **Angular CLI** (for frontend development)
- **Firebase Project** (for backend services)
- **Socket.IO** (for real-time communication)

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/real-time-ecommerce-app.git
   cd real-time-ecommerce-app

const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    getBalance() {
    return this.balance;
    },
    getDiscount() {
    return this.discount;
    },
    setDiscount(value) {
    discount = value;
    },
    getOrders() {
    return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * discount;
    this.orders.push(order);
    },
};

customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
  console.log(customer.getBalance()); // 19750
  console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

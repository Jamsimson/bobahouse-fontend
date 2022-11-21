import { defineStore } from "pinia";
import { date } from "quasar";

export const cartsDatabase = defineStore({
  state: () => ({
    users: [
      {
        date: "21-11-2565",
        name: "Minisong",
        phone: "098-015-6599",
        // :Menu_id :Topping_id :counts
        carts: [0, 3, 2],
        total: 190,
      },
    ],
  }),
  actions: {
    setUser(user) {
      let nam = {
        date: Date.now(),
        carts: user.carts,
        total: totalPrice(),
      };
      this.users.push(nam);
    },
  },
});

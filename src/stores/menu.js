import { defineStore } from "pinia";
import { date } from "quasar";

export const menuDatabase = defineStore({
  state: () => ({
    menus: [
      {
        id: 1,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Thai Tea 1",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
      //  id 2
      {
        id: 2,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Milk Tea 2",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
      //  id 3
      {
        id: 3,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Milk Tea 3",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
      //  id 4
      {
        id: 4,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Milk Tea 4",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
      //  id 5
      {
        id: 5,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Milk Tea 5",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
      //  id 6
      {
        id: 6,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Milk Tea 6",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
    ],
  }),
  actions: {
    getMenu(id) {
      return menus[id - 1];
    },
    getMenuPrice(id, x) {
      return menus[id - 1].size[x];
    },
  },
});

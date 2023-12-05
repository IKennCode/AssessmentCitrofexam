// Importing icons from external sources like Icons.js
import { list, check, todo, home } from "./Icons";


// Defining an array representing a menu
const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Important Task!",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "You've Completed!",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Remember Me?",
    icon: todo,
    link: "/incomplete",
  },
];

// Exporting the menu array
export default menu;

//This structure allows you to easily manage your menu items in one place. If you need to update the menu or add/remove items,
// you can do so in this module without having to modify every component that uses the menu.
import { list, check, todo, home } from "./Icons";

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

export default menu;

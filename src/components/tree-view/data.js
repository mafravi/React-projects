export const menus = [
  {
    label: "home",
    to: "/",
    
  },
  {
    label: "profile",
    to: "/profile",
    
    children: [
      {
        label: "detalis",
        to: "/detalis",
        children: [
          {
            label: "location",
            to: "/loctaion",
          },
        ],
      },
    ],
  },
];

export default menus;

import { bg1,bg3, bread, coffee, deals, desserts, fastFood, restau, shoppingBag, softDrink} from "../assets";


export 
const categoryItems = [
  {
    image: shoppingBag,
    // image: require("../assets/images/shopping-bag.png"),
    title: "Pick-up",
  },
  {
    image: softDrink,
    // image: require("../assets/images/soft-drink.png"),
    title: "Soft Drinks",
  },
  {
    image:bread,
    // image: require("../assets/images/bread.png"),
    title: "Bakery Items",
  },
  {
    image: fastFood,
    // image: require("../assets/images/fast-food.png"),
    title: "Fast Foods",
  },
  {
    image:deals,
    // image: require("../assets/images/deals.png"),
    title: "Deals",
  },
  {
    image:coffee,
    // image: require("../assets/images/coffee.png"),
    title: "Coffee & Tea",
  },

  {
    // image: require("../assets/images/desserts.png"),
    image: desserts,
    title: "Desserts",
  },
];

export const localRestaurants = [
    {
        name:"Beach Side Bar",
        image_url:restau,
        categories:["Cafe", "Bar"],
        price:'$$',
        reviews:1244,
        rating:4.5,
    },
    {
        name:"Benihana",
        image_url:bg3,
        categories:["Cafe", "Bar"],
        price:'$$',
        reviews:1244,
        rating:3.7,
    },
    {
        name:"India's Grill",
        image_url:bg1,
        categories:["Indian", "Bar"],
        price:'$$',
        reviews:700,
        rating:4.9,
    },
]

export const foods = [
  {
    id:'1',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg21aAHqQGq7b_n6iUdEynjMtitg4sJQN6Fg&usqp=CAU',
    name:'Tandoori chicken',
    description:'Amazing Indian dish with tendorioin chicken off the sizzle 🔥',
    price:'$19.20'
    },
  {
    id:'2',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSazSg5iI_AFfsd_6F5nScSAtecPvimNmIzxA&usqp=CAU',
    name:'Tandoori chicken',
    description:'Amazing Indian dish with tendorioin chicken off the sizzle 🔥',
    price:'$25.20'
    },
  {
    id:'3',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTG__K1UVaFWEVd4PFgMQx2NHRCLy40ydROfd2_Sz1lCoDvm_qXQNPJwmE01GhO-k84Tc&usqp=CAU',
    name:'American chicken',
    description:'Amazing Indian dish with tendorioin chicken off the sizzle 🔥',
    price:'$30.20'
    },
  {
    id:'4',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRl53W8VqiExgpx0wxm2TXkDwpfITdDSMcQ&usqp=CAU',
    name:'Korean chicken',
    description:'Amazing Indian dish with tendorioin chicken off the sizzle 🔥',
    price:'$15.20'
    },
  {
    id:'5',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTooo2PY8vh1u9KwbbkYbdwHSjVhopAnWev1w&usqp=CAU',
    name:'Tandoori chicken',
    description:'Amazing Indian dish with tendorioin chicken off the sizzle 🔥',
    price:'$25.29'
    },
]
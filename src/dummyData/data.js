import { bg1,bg3, bread, coffee, deals, desserts, fastFood, restau, shoppingBag, softDrink} from "../assets";



export const yelpApiKey = 'CtI8jbPHgJZ3t4GOtvNGrNQpYBS4xN4-OmEFVknOYlT50E0FfmvdATT63GrwBRFf_bZ6BGWwR5se0acRJMtCeXOc0ZejvIbBKku1FtIcWgzAyVMU_jaeKWIBfIMnZHYx'

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
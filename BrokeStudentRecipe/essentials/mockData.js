import images from "./images"

const recentRecipes = [
    {
        id: 1,
        name: "Michelle's World Famous Spaghetti",
        image: images.spagetti,
        lastMade: "Last made 20 minutes ago",
        calories: "850 calories per serving",
    },
    {
        id: 2,
        name: "David's Kingston Waffles",
        image: images.waffle,
        lastMade: "Last made 1 day ago",
        calories: "400 calories per serving",
    },
    {
        id: 3,
        name: "Dalene's All Things Salad",
        image: images.salad,
        lastMade: "Last made 2 days ago",
        calories: "250 calories per serving",
    },
    {
        id: 4,
        name: "Timmy's Tomato Pesto Blend Panini",
        image: images.sandwich,
        lastMade: "Last made 5 days ago",
        calories: "680 calories per serving",
    },
    {
        id: 5,
        name: "Delaney's Gas Chicken & Waffles",
        image: images.chickenwaffles,
        lastMade: "Last made 8 days ago",
        calories: "700 calories per serving",
    },
]

const recipes = recentRecipes

export default {
    recentRecipes,
    recipes
}
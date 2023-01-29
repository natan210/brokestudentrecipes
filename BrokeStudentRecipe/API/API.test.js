import TMD from "./TheMealDB.js";

/**
 * @Test Initialize API
 * Check if all the Ingredient is retrieve from database to local variable
 */
 test("Test Initialization of API", async() => {
    await TMD.INIT();
    expect(TMD.allIngred).toBeDefined();
});

/**
 * @Test Reading Ingredient Data from JSON file
 * Check if the Data is correct
 */
 test("Reading Ingredient Data", async() => {
    expect((await TMD.listAllIngredients()).length).toBe(607);
});

/**
 * @Test Simple Search for Recipes with ID, Letter, Ingredient, and Name
 * 1. Test Searching Recipes with ID: 52874
 * 2. Test Searching Recipes with Ingredient "Beef"
 * 3. Test Searching Recipes start with Letter "a"
 * 4. Test Searching Recipes with Name "Beef and Mustard Pie"
 */
test("Test Simple Search for Recipes", async() => {
    expect((await TMD.searchByID("52874")).idMeal).toBe("52874");
    expect((await TMD.searchByIngred("Beef"))[0].idMeal).toBe("52874");
    expect((await TMD.searchByLetter("a"))[0].strMeal).toBe("apple pie");
    expect((await TMD.searchByName("Beef and Mustard Pie"))[0].strMeal).toBe("Beef and Mustard Pie");
});

/**
 * @Test Ingredient POST, DELETE, CLEAR of Ingredients
 * 1. Test Post Ingredient "Chicken Breast"
 * 2. Test Post Ingredient "Olive Oil"
 * 3. Test Post Ingredient "Salt"
 * 4. Test Delete Ingredient ID: "281"
 * 5. Test Post Ingredient "Chicken Breast"
 * 6. Test Delete Ingredient "Chicken Breast"
 */
 test("Test Simple Search for Recipes", async() => {
    await TMD.POST("Chicken Breast");
    expect(TMD.ingredList[0].strIngredient).toBe("Chicken Breast");
    await TMD.POST("Olive Oil");
    expect(TMD.ingredList[1].strIngredient).toBe("Olive Oil");
    await TMD.POST("Salt");
    expect(TMD.ingredList[2].strIngredient).toBe("Salt");
    await TMD.DELETE(281);
    expect(TMD.ingredList.length).toBe(2);
    await TMD.POST("Chicken Breast");
    expect(TMD.ingredList.length).toBe(2);
    await TMD.DELETE("Chicken Breast");
    expect(TMD.ingredList.length).toBe(1);
    TMD.CLEAR();
    expect(TMD.ingredList.length).toBe(0);
});

/**
 * @Test GET Recipe According to Selected Recipes
 * 0. With Empty Ingredient List;
 * 1. With Ingredient List: "Chicken Breast", "Salt", "Olive Oil"
 * 2. With Ingredient List: "Chicken Breast", "Olive Oil", "Salt"
 * 3. With Ingredient List: "Chicken Breast", "Olive Oil", "Salt" and Include Details
 * 4. With Ingredient List: "Beef"
 * 5. With Ingredient List: "Salt"
 */
 test("Test Simple Search for Recipes", async() => {

    expect(await TMD.GET()).toBeUndefined();

    await TMD.POST("Chicken Breast");
    await TMD.POST("Salt");
    await TMD.POST("Olive Oil");
    expect((await TMD.GET()).length).toBeGreaterThan(0);
    TMD.CLEAR();

    await TMD.POST("Chicken Breast");
    await TMD.POST("Olive Oil");
    await TMD.POST("Salt");
    expect((await TMD.GET()).length).toBeGreaterThan(0);
    TMD.CLEAR();

    await TMD.POST("Chicken Breast");
    await TMD.POST("Olive Oil");
    await TMD.POST("Salt");
    expect((await TMD.GET(true)).length).toBeGreaterThan(0);
    TMD.CLEAR();

    await TMD.POST("Beef");
    expect((await TMD.GET()).length).toBeGreaterThan(0);
    TMD.CLEAR();

    await TMD.POST("Salt");
    expect((await TMD.GET()).length).toBeGreaterThan(0);
    TMD.CLEAR();
});
import TMD from "./BrokeStudentRecipe/API/TheMealDB.js";

// Sample Usage of TheMealDB API

await TMD.INIT();
TMD.POST("Beef");
TMD.POST("Salt");
TMD.POST("Butter");
console.log(await TMD.GET(true));

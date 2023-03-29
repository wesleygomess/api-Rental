import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(categoriesRoutes);

app.get("/", (request, response) => {
	return response.json({ text: "Tudo certo" });
});

app.listen("3333", () => console.log("Running api in port 3333"));

import Express, { request, response }  from "express";

const app = Express();

app.get("/", (request, response) => {
    response.status(200).send("Boorakcha");
});

app.listen(3000, () => {
    console.log("API liatening on port http://localhost:3000");

});
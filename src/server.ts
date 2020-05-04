import * as express from "express";
import * as exphbs from "express-handlebars";
import * as morgan from "morgan";

/** Create App */
export const app = express();
app.use(morgan("dev"));
 
/**
 * Configure Handlerbars
 */
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

/**
 * Setup Routes
 */
app.get(["/", "/:name"], (req, res) => {
    if (req.params.name !== undefined) {
        res.render("home", {name: req.params.name});
    } else {
        res.render("home");
    }
});

app.listen(8081, () => console.log("App listening on port 8082!")) 

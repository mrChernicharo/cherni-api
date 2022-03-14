import { Router } from "express";
import { usersRepository } from "../repositories/users";

const rootRoutes = Router();

rootRoutes.get("/", (req, res) => {
  const { headers } = req;
  res.send(`
	<h1>Root</h1>
	<pre>
		${JSON.stringify(headers, null, 2)}
	</pre>	
	`);
});

export { rootRoutes };

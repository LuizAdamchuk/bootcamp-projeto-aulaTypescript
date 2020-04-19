import express from "express";

import CreateUser from "./services/CreateUser";

const app = express();

app.get("/", (req, res) => {
  const user = CreateUser({
    // name nao é obrigatorio
    email: "teste@hotmail.com",
    password: "teste",
    techs: ["nodejs", "reactjs", { title: "TEste", experience: 100 }],
  });

  res.json({ message: "Olá Mundo!" });
});

app.listen(3333);

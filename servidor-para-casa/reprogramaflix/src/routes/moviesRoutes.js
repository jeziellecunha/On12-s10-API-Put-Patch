const express = require("express");
const router = express.Router();

const controller = require("../controllers/moviesControllers"); // importei o arquivo de controller


router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre);
router.get("/:id", controller.getById);

router.post("/inserir", controller.postMovie);

router.put("/:id", controller.replaceMovie);

router.delete("/:id", controller.deleteMovie);

router.patch("/atualizartitulo/:id", controller.updateTitle);
router.patch("/atualizar/:id", controller.updateAnything);

module.exports = router
const { Router } = require("express");
const { saveUser } = require("../controllers/user");

const router = Router();

router.route("/save_user").post(saveUser);

module.exports = router

const express = require("express");
const router = express.Router();

const {getContact, createContact,updateContact, getContacts,deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/ValidateTokenhandler");



router.use(validateToken);
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
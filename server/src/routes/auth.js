const authController = require("../controllers/authController.js")
const express = require("express")
const router = express.Router()


router.post("/register", authController.getRegister);

router.post("/login", authController.getLogin);



module.exports = router;



// export const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     jwt.verify(authHeader, "secret", (err) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };
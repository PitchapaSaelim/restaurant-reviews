import express from "express"

const router = express.Router() // access express router

router.route("/").get((req, res) => res.send("hello world"))

export default router
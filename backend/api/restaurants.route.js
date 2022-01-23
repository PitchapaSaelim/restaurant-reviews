import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"

const router = express.Router() // access express router

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

export default router
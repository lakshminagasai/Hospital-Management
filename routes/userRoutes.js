const express = require("express")
const {registerController ,loginController,authController,applyDoctorController,getAllNotificationController,deleteAllNotificationController,getAllDocotrsController,bookeAppointmnetController,  bookingAvailabilityController, userAppointmentsController} =require("../controllers/userControllers")
const authMiddleware = require("../middlewares/authMiddleware")
//router object

const router = express.Router()
//routes
//Login || Post
router.post("/register",registerController)
router.post("/login",loginController)
router.post("/getUserData",authMiddleware,authController)
router.post("/apply-doctor",authMiddleware,applyDoctorController)
router.post("/get-all-notification",authMiddleware,getAllNotificationController)
//Notifiaction  Doctor || POST
router.post(
    "/delete-all-notification",
    authMiddleware,
    deleteAllNotificationController
  );

//register || Post

router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

// //Appointments List
 router.get("/user-appointments", authMiddleware, userAppointmentsController);
module.exports = router;
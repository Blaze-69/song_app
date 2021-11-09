const express = require("express");

const {
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    unFriend,
    getFriends,
    getFriendRequests
} = require("../controllers/friend");

const { requireSignin } = require("../middlewares/auth");

const {
    validateFriendRequest,
    isRequestValidated
} = require("../validators/friend");

const router = express.Router();

router.get("/requests", requireSignin, getFriendRequests);

router.get("/", requireSignin, getFriends);

router.post("/", requireSignin, validateFriendRequest, isRequestValidated, sendFriendRequest);

router.put("/reject", requireSignin, validateFriendRequest, isRequestValidated, rejectFriendRequest);

router.put("/", requireSignin, validateFriendRequest, isRequestValidated, acceptFriendRequest);

router.delete("/", requireSignin, validateFriendRequest, isRequestValidated, unFriend);

module.exports = router;

// later on we can add option to unsend friend request and get all send friend requests
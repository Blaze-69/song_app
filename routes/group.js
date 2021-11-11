const express = require("express");

const {
    getGroups,
    getGroupMembers,
    getChats,
    createPersonalChat,
    createGroup,
    joinGroup,
    leaveGroup,
    updateGroup,
    deleteGroup,
    groupInfo
} = require("../controllers/group");

const { requireSignin } = require("../middlewares/auth");

const {
    isRequestValidated,
    validatePersonalChatRequest,
    validateGroupRequest,
    validateGroupUpdateRequest,
    validateGroupLeaveRequest,
    validateGroupDeleteRequest,
    validateGroupJoinRequest
} = require("../validators/group");

const router = express.Router();

router.get("/", requireSignin, getGroups);
router.post("/", requireSignin, validateGroupRequest, isRequestValidated, createGroup);
router.put("/", requireSignin, validateGroupUpdateRequest, isRequestValidated, updateGroup);
router.delete("/", requireSignin, validateGroupDeleteRequest, isRequestValidated, deleteGroup);

router.put("/join", requireSignin, validateGroupJoinRequest, isRequestValidated, joinGroup);
router.put("/leave", requireSignin, validateGroupLeaveRequest, isRequestValidated, leaveGroup);

router.get("/getChats", requireSignin, getChats);

router.get("/getGroupMembers", getGroupMembers);

router.post("/personal", requireSignin, validatePersonalChatRequest, isRequestValidated, createPersonalChat);

router.get("/:id", requireSignin, groupInfo);

module.exports = router;
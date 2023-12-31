"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const createUser_1 = require("../modules/users/useCases/createUser");
const listAllUsers_1 = require("../modules/users/useCases/listAllUsers");
const showUserProfile_1 = require("../modules/users/useCases/showUserProfile");
const turnUserAdmin_1 = require("../modules/users/useCases/turnUserAdmin");
const usersRoutes = express_1.Router();
exports.usersRoutes = usersRoutes;
usersRoutes.post("/", (request, response) => createUser_1.createUserController.handle(request, response));
usersRoutes.patch("/:user_id/admin", (request, response) => turnUserAdmin_1.turnUserAdminController.handle(request, response));
usersRoutes.get("/:user_id", (request, response) => showUserProfile_1.showUserProfileController.handle(request, response));
usersRoutes.get("/", (request, response) => listAllUsers_1.listAllUsersController.handle(request, response));

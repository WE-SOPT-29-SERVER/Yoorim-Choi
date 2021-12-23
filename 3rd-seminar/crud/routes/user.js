const express = require("express");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const router = express.Router();

const util = require("../lib/util");
const users = require("../functions/dbMockup/user");



router.post('./signup',(req,res) => {
    const { id, name, password, email } = req.body;
    if(!id || !name || !password || !email){
        return res.status(400).send(ut.fail(400, "BAD REQUEST"));
    }
    const alreadyUser = users.filter(user => user.email === email).length > 0;
    if(alreadyUser){
        return res.status(409).send(util.fail(409," ALREADY EMAIL"));
    }
    const newUser = {id, name, password, email};

    users.push(newUser);

    res.status(200).send(util.success(200,"회원가입 성공",newUser));
});

router.post("/login",async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const user = users.filter(user => user.email === email)[0];

    if (!user) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    if (user.password !== password) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.MISS_MATCH_PW,
                ),
            );
    }

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        }),
    );
})

router.get("/profile/:id",async (req,res) =>{
    const { id } = req.params;
    if(!id) {
        return res
            .status(statusCode.NO_USER)
            .send(
                util.fail(statusCode.NO_USER,responseMessage.NO_USER)
            )
    }
    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
            user: {
                id: user.id,
            },
        }),
    );
    
});


router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;

    if (!id || !newName) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const existingUser = users.filter(user => user.id === Number(id))[0];

    if (!existingUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const updatedUser = { ...existingUser, name: newName };

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.USER_UPDATE_SUCCESS,
            updatedUser,
        ),
    );
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const existingUser = users.filter(user => user.id === Number(id))[0];

    if (!existingUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const newUsers = users.filter(user => user.id !== Number(id));

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.USER_DELETE_SUCCESS,
            newUsers,
        ),
    );
});

module.exports = router;
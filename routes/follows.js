var followUtil = require('../data/follows');
var userUtil = require('../data/users');
var Promises = require('promise');

module.exports = {

    followQuestion : function(req, res) {
        // console.log("fq body " + req.body);
        var qid = req.body.question_id;
        var user_id = req.body.user_id;
        userUtil.getUser(user_id)
            .then((user) => {
                followUtil.followQuestion(qid, user)
                    .then((data) => {
                        res.status(200);
                        res.json({success: true, body: data, msg: "Successfully followed the question."});
                    }).catch((err) => {
                        // console.log("error ", err);
                        res.status(400);
                        res.json({success: false, msg: "Error in following the question"});
                    });
            }).catch((err) => {
                // console.log("error ", err);
                res.status(500);
                res.json({success: false, msg: "Error in getting user details."});
            });
    },

    followTopic : function(req, res) {
        // console.log("ft body " + req.body);
        var tid = req.body.topic_id;
        var user_id = req.body.user_id;
        userUtil.getUser(user_id)
            .then((user) => {
                followUtil.followTopic(tid, user)
                    .then((data) => {
                        res.status(200);
                        res.json({success: true, body: data, msg: "Successfully followed the topic."});
                    }).catch((err) => {
                        // console.log("error ", err);
                        res.status(400);
                        res.json({success: false, msg: "Error in following the topic."});
                    });
            }).catch((err) => {
                // console.log("error ", err);
                res.status(500);
                res.json({success: false, msg: "Error in getting user details."});
            });
    },

    followUser : function(req, res) {
        // console.log("fu body " + req.body);
        var fuid = req.body.follow_user_id;
        var user_id = req.body.user_id;
        userUtil.getUser(user_id)
            .then((user) => {
                followUtil.followUser(fuid, user)
                    .then((data) => {
                        res.status(200);
                        res.json({success: true, body: data, msg: "Successfully followed the user."});
                    }).catch((err) => {
                        // console.log("error ", err);
                        res.status(400);
                        res.json({success: false, msg: "Error in following the user."});
                    });
            }).catch((err) => {
                // console.log("error ", err);
                res.status(500);
                res.json({success: false, msg: "Error in getting user details."});
            });
    },

    unfollowQuestion : function(req, res) {
        console.log("uq body " + req.body);

        var qid = req.body.unfollow_question_id;
        var user_id = req.body.user_id;
        userUtil.getUser(user_id)
            .then((u) => {
                followUtil.unfollowQuestion(qid, u)
                    .then((data) => {
                        res.status(200);
                        res.json({success: true, body: data, msg: "Successfully unfollowed the question."});
                    }).catch((err) => {
                        // console.log("error ", err);
                        res.status(400);
                        res.json({success: false, msg: "Error in unfollowing the question"});
                    });
            }).catch((err) => {
                // console.log("error ", err);
                res.status(500);
                res.json({success: false, msg: "Error in getting user details."});
            });
    },

    unfollowTopic : function(req, res) {
        // console.log("ut body " + req.body);
        var tid = req.body.unfollow_topic_id;
        var user_id = req.body.user_id;
        userUtil.getUser(user_id)
            .then((user) => {
                followUtil.unfollowTopic(tid, user)
                    .then((data) => {
                        res.status(200);
                        res.json({success: true, body: data, msg: "Successfully unfollowed the topic."});
                    }).catch((err) => {
                        // console.log("error ", err);
                        res.status(400);
                        res.json({success: false, msg: "Error in unfollowing the topic."});
                    });
            }).catch((err) => {
                // console.log("error ", err);
                res.status(500);
                res.json({success: false, msg: "Error in getting user details."});
            });
    },

    unfollowUser : function(req, res) {
        // console.log("uu body " + req.body);
        var fuid = req.body.unfollow_user_id;
        var user_id = req.body.user_id;
        userUtil.getUser(user_id)
            .then((user) => {
                followUtil.unfollowUser(fuid, user)
                    .then((data) => {
                        res.status(200);
                        res.json({success: true, body: data, msg: "Successfully unfollowed the user."});
                    }).catch((err) => {
                        // console.log("error ", err);
                        res.status(400);
                        res.json({success: false, msg: "Error in unfollowing the user."});
                    });
            }).catch((err) => {
                // console.log("error ", err);
                res.status(500);
                res.json({success: false, msg: "Error in getting user details."});
            });
    }


}

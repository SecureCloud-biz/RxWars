Meteor.publish('drugs', function () {
    return Drugs.find({});
});


Meteor.publish('drugprice', function () {
    return DrugPrice.find({});
});



Meteor.publish('transactions', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Transactions.find();
    } else {
        return Transactions.find({team_id: this.userId})
        //return Transactions.find();
    }
});

Meteor.publish("userStatus", function () {
    return Meteor.users.find({"status.online": true});
});


Meteor.publish('serversession', function () {
    return ServerSession.find({});
});

Meteor.publish('snitches', function () {
    return Snitches.find({team_id: this.userId});
});

Meteor.publish('scoreboard', function () {
    return ScoreBoard.find({});
});


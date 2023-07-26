const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{
  // Update the code here
  res.send(JSON.stringify(friends, null, 4))//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  // Update the code here
  res.send(friends[req.params.email])//This line is to be replaced with actual return value
});

// POST request: Add a new friend
router.post("/",(req,res)=>{
  // Update the code here
  if (req.body.email){
    friends[req.body.email] = {
        "firstName": req.body.firstName,
        //Add similarly for lastName
        "lastName": req.body.lastName,
        //Add similarly for DOB
        "DOB": req.body.DOB
        }
  }
  res.send("The user" + " " + req.body.firstName + " " + req.body.lastName + " has been added!")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  let updateFriend = friends[req.params.email]
  if (updateFriend) {
      if (req.body.firstName) {
        updateFriend.firstName = req.body.firstName
      }
      if (req.body.lastName) {
        updateFriend.lastName = req.body.lastName
      }
      if (req.body.DOB) {
        updateFriend.DOB = req.body.DOB
      }
      res.send("The user with email" + " " + req.params.email + " has been updated!")//This line is to be replaced with actual return value
  } else {
    res.send("Unable to find friend!");
  }
});

// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  delete friends[req.params.email]
  res.send("Friend with the email" + " " + req.params.email + " " + "has been deleted!")//This line is to be replaced with actual return value
});

module.exports=router;

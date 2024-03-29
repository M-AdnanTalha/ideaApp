 /**
  * Logic to create the controllers for the idea resources
  */
 const ideas = require("../models/idea.model")

 let id=3 //initial count of id

 /**
  * Create the controller for fetching all the ideas
  * 
  * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
  * 
  * Return list of all the ideas
  */

 exports.getAllIdeas=(req,res)=>{

    // First real all the ideas from the idea model file
    //Done above at line 4 

    // return all those ideas
    res.status(200).send(ideas)
 }

/**
 * Controller to fetch idea based on id
 */
exports.getIdeaBasedOnId=(req,res)=>{

   //Read the idea id from the req path para
   idea_id = req.params.id

   //Checking if id is present or not ,if present return the id
   if(ideas[idea_id]){
      res.status(200).send(ideas[idea_id])
   }else{
      res.status(404).send({
         message: "Id not found"
      })
   }
}

/**
 * Controller to create a new idea
 */
exports.createIdea=(req,res)=>{
   //Read the request body
   idea_object=req.body
   id++;
   idea_object["id"]=id  //setting the id in new idea object
   ideas[id]=idea_object

   //Add the new object provided in the ideas object

   //Return the  response
   res.status(201).send(idea_object)
}

/**
 * Controller for Updating the idea
 */
exports.updateIdea = (req,res)=>{
   
   //Read the idea id
   idea_id=req.params.id

   //Check if idea id is present
   if(ideas[idea_id]){
      idea_obj=req.body
      ideas[idea_id]=idea_obj
      res.status(200).send(idea_obj)
   }else{
      return res.status(404).send({
         message:"Id not found"
      })
   }
   //Read the new idea body and replace it

   //Return the updated idea
}

exports.deleteIdea=(req,res)=>{

   //Fetch the idea and check if its present , if present then delete
   idea_id=req.params.id

   if(ideas[idea_id]){
      delete ideas[idea_id]
      res.status(200).send({
         message:"Idea successfully deleted"
      })
   }else{
      return res.status(404).send({
         message:"Id not found"
      })
   }
    
}
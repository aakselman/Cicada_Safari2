import React from 'react';

export default class User extends React.Component
{
    
   
    static currentUser = 
    {
        Username: "",
        Password: "",
        email:"",
        Country: "",
        Rank_O:0,
        Rank_C:0,
        origin:""
      };

    static Answers = 
    {
        one: "",
        two: "",
        three:"",
        four:""
      };

    static getCurrentUser() 
    {
        return currentUser;
    }
}

    


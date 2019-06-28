
##Backend Architect**

##Back-end Development Role Description**

You have been learning all about NodeJS and Express and SQL in order to craft Web Servers and build API's for consumption by client side applications. You will use these skills to be in charge of building out the back-end API for your project.


##Data Schema (Data Structures)**

**users**
{
    "id": 1,                     //integer and autoincremented in database
    "username": "Todd"          //String, required
    "password": "password"      //STring, required, password is stored hashed.
    "email": "email@gmail.com"  //String, required
    "adviceGiver": false        //if false the rest of info 
    "expertise": null           //will be null if not adviceGiver //required if adviceGiver === true;
    "yearsOfExperience": 10        //integer, null if not adviceGiver, required if adviceGiver === true;
    "age": 30                   //integer and optional

}

messages
{
    "id": 1                                //integer and autoincremented in database
    "isAnswered": true or false             //boolean, requied
    "private": true or false                //boolean, requied
    "message": "here is what I need help with"      //string, required
    "type": "Counseling"                        //string, required
    "title": "The title of the message"         //string, required
    "user_id": 5                               //id of user who posted message, required.

}

**#advisorGroup**
{
    "id": 1           //integer and autoincremented in database
    "id_advisor": 4  //id of adviceGiver who says will help. foreign keys, required
    "id_message": 5     //id of message adviceGiver says they can help with. foreign keys, required
    "id_seeker": 3      //id of the user who posted they would like help, required

}

##SUMMARY TABLE OF API ENDPOINTS**


|**TABLE**     |  **METHOD**   |   **ENDPOINT**    |   **Description**  |
|---------------|----------------|--------------------|---------------------|

|auth      |      post        |    auth/register     |  used to register user, need user obj. |


auth      |      post      |      auth/login     |     used to login, uses username and password, sent in the body of request to authenticate      |       

users      |     get       |      /users         |     gets a list of users  |

users      |     get      |       /users/id      |      gets the user by the user id    |

users      |     put       |      /users/id       |    updates the user with the user id.   |

users       |    delete     |     /users/id     |      deletes the user form database with the id.  |

messages    |    get        |     /messages      |     gets list of messages not set to private  |

messages    |    post      |      /messages      |    posts message with above messages obj supplied  |

messages    |    put        |     /messages/id    |    updates message with the message id.   |

messages    |    delete     |     /messages/id    |    deletes the message from the database with the id    |

advisorsGroup  | get       |      /myMentors/id     |    returns all of the currently logged in users mentors. takes id of user logged in.  |

advisorsGroup  |  get       |      /myMentors    |      return a list of all the users who are advisors.   |

advisorsGroup  |  post      |     /myMentors    |      ability for user to add an advice giver as a mentor.  needs { advisor_id and seeker_id }  |

announcements  | get     |        /announcements   |   return a string of announcements  |
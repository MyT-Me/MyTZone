//This Section Validates JSON Schema's of All User Related Data Schemas
// Login and Sign Up

'use strict';
module.exports = {
    login: {
        "type": "object",
        "title": "login",
        "description": "Login Schema Validation JSON",
        "properties": {
            "userName": {
                "type": "string"
            },
            "password": {
                "type": "string"
            }
        },
        "required": ['userName', 'password'],
        "additionalProperties": false
    },
    registration: {
        "type": "object",
        "title": "registration",
        "description": "Registration Schema Validation JSON",
        "properties": {
            "userName": {
              "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "middleInitial":{
                "type": "string"
            },
            "firstYear" : {
                "type": ["number","string"]
            },
            "dateOfBirth": {
                "type": "string"
            },
            "email": {
                "type": "string",
                "format": "email"
            },
            "password": {
                "type": "string",
            }
        },
        "required": ['userName','lastName', 'firstName','firstYear','dateOfBirth','email','password'],
        "additionalProperties": false
    }
};
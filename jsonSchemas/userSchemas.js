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
    }
};
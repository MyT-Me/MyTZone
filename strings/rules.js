var parameters = require('../strings/apiStrings');
var TABLE = "table";
var rules = {  }
var educationTable = {
    headers: {
        "school": "School Name",
        "field": "Major",
        "typeOfDegree": "Program type",
        "status": "Status",
        "honors": "Honors",
        "end": "Yr Completed/Expected"
      },
      sequence: ["school", "field", "typeOfDegree","status","end"],
      hidden: ["id"]
}

var workExTable = {
    headers: {
        
    },
    sequence: [],
    hidden: ["id"]
}

var tools = {
    headers: {
        "category": "category",
        "software": "Method/Skill Name",
        "vendor": "Vendor/Distributor",
        "linkedin": "Endorsments",
        "formal": "formalCertification",
        "usage": "Usage in Last 3 Years",
        "timestamp": "timeStamp",
        "proficiencyType": "Proficiency Type",
        "proficiencyYear": "Proficiency Year"
    },
    sequence: ["category","software","vendor","linkedin","proficiencyType","proficiencyYear","usage","formal"],
    hidden: ["id"]
}

var skills = {
    headers: {
        category: "category",
        software: "Software/Device Name",
        vendor: "Vendor/Distributor",
        linkedin: "Endorsements",
        formal: "Formal Certification",
        usage: "Usage in Last 3 Years",
        timestamp: "timeStamp",
        id: "customId",
        proficiencyType: "Proficiency Type",
        proficiencyYear: "Proficiency Year"  
    },
    sequence: ["category","software","vendor","linkedin","proficiencyType","proficiencyYear","usage","formal"],
    hidden: ["id"]
}
var tableObj = {}
tableObj[parameters.EDUCATION] = educationTable;
tableObj[parameters.TOOLS] = tools;
tableObj[parameters.SKILLS] = skills;
rules[TABLE] = tableObj; 
module.exports = rules;
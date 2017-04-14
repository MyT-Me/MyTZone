module.exports = {
    dbUserName:'revaries',
    dbpassword:'myTzone',
    getMongoUrl: function(){
        return 'mongodb://'+this.dbUserName+":"+this.dbpassword+'@ds161400.mlab.com:61400/mytzone'
    }
}

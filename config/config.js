module.exports={
    MONGO_IP:process.env.MONGO_IP || "mongo",
    MONGO_PORT:process.env.MONGO_PORT || 27017,
    MONGO_USER:process.env.MONGO_USER ,
    MONGO_PASSWORD:process.env.MONGO_PASSWORD ,
    PORT: process.env.PORT || 3000,
    DB1_URL: process.env.DB1_URL || "mongo",
    DB2_URL: process.env.DB2_URL || "mongo",
}
let DBCInstance = null;
global.DatabaseConnection = class DatabaseConnection {
    get url() {
        return 'mongodb://localhost:27017/myproject';
    }
    get username() {
        return 'admin';
    }
    get connection() {
        let connection;
        // Do something to get the connection to the DB.
        return connection;
    }
    get password() {
        return 'localhost';
    }
    static get instance() {
        if(DBCInstance === null || 
           DBCInstance.getConnection().isClosed()) {
            DBCInstance = new DatabaseConnection();
        }
        return DBCInstance;
    }
}
import * as SQLite from 'expo-sqlite';

const DatabaseConnection = {
    getConnection: () => SQLite.openDatabase("database.db")
};

export default DatabaseConnection;
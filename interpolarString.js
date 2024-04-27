createStringConnection()

function createStringConnection(databaseName, user, password) {
  
  const connectionString = `connect:DBCONNECT;user=${user};password=${password};initial_database=${databaseName}`;

  return connectionString;
}
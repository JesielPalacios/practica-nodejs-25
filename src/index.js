import app from "./app";

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server running on port', app.get('port'));
});

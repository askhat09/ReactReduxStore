import WithBookstoreService from "../hoc/with-bookstore-service";
import "./app.scss";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return <div className="app">App</div>;
};

export default WithBookstoreService()(App);

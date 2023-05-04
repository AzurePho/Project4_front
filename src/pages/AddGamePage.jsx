import AddGameForm from "../components/AddGameForm";
import "../sass/landingpage.scss";

function AddGamePage() {
  return (
    <div className="page">
      <div className="page__register">
        <AddGameForm />
      </div>
    </div>
  );
}

export default AddGamePage;

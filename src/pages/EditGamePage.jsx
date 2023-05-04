import EditGameForm from "../components/EditGameForm";
import "../sass/landingpage.scss";

function EditGamePage() {
  return (
    <div className="page">
      <div className="page__register">
        <EditGameForm />
      </div>
    </div>
  );
}

export default EditGamePage;

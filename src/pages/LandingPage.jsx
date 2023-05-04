import LoginForm from "../components/LoginForm";
import "../sass/landingpage.scss";

function LandingPage() {
  return (
    <div className="page">
      <div className="page__login">
        <LoginForm />
      </div>
    </div>
  );
}

export default LandingPage;

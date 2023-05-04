import RegisterForm from "../components/RegisterForm";
import "../sass/landingpage.scss";

function RegisterPage() {
  return (
    <div className="page">
      <div className="page__register">
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;

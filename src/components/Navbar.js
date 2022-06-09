import React from "react";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { auth } from "./../shared/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
const Navbar = () => {
  const [is_login, setIsLogin] = React.useState();
  console.log(auth.currentUser);
  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  });
  return (
    <Container className="nav-wrap">
      <Link to="/">
        <FontAwesomeIcon className="home-icon" icon={faHouse} />
      </Link>
      {is_login ? (
        <Button
          variant="outline-primary"
          onClick={() => {
            signOut(auth);
          }}
        >
          로그아웃
        </Button>
      ) : (
        <div className="nav-btns">
          <Link to="/join">
            <Button variant="primary">회원가입</Button>
          </Link>
          <Link to="/login">
            <Button variant="outline-primary">로그인</Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Navbar;

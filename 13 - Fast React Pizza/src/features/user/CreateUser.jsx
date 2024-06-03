import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 mt-6 text-sm text-stone-600 md:text-base">
        👋 Welcome {userName}! Please start by telling us your name:
      </p>

      {!userName ? (
        <>
          <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input mb-8 w-72"
          />

          {username !== "" && (
            <div>
              <Button type="primary">Start ordering</Button>
            </div>
          )}
        </>
      ) : (
        <Button to={"/menu"} type="primary">
          Check Our Menu
        </Button>
      )}
    </form>
  );
}

export default CreateUser;

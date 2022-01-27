import { useState } from "react";
import { useSelector } from "react-redux"; // zeby dostac sie do state
import { useDispatch } from "react-redux"; // zeby zmienic state? czyli wyslac akcje..dispatch an action
import { buyCake } from "../redux";

const NewCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>(hooks, action.payload) Num of cakes: {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number}
      </button>
    </div>
  );
};

export default NewCakeContainer;

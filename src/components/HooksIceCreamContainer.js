import { useSelector } from "react-redux"; // zeby dostac sie do state
import { useDispatch } from "react-redux"; // zeby zmienic state? czyli wyslac akcje..dispatch an action
import { buyIceCream } from "../redux";

const HooksIceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>(hooks) Num of iceCream: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy an IceCream</button>
    </div>
  );
};

export default HooksIceCreamContainer;

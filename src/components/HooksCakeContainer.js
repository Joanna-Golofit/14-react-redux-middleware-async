import { useSelector } from "react-redux"; // zeby dostac sie do state
    import { useDispatch } from "react-redux"; // zeby zmienic state? czyli wyslac akcje..dispatch an action
import { buyCake } from "../redux";
    
    const HooksCakeContainer = () => {
      
      const numOfCakes = useSelector(state => state.cake.numOfCakes)
      const dispatch = useDispatch()


      return (
        <div>
          <h2>(hooks) Num of cakes: {numOfCakes}</h2>
          <button onClick={() => dispatch(buyCake())}>Buy a Cake</button>
        </div>
      );
};

export default HooksCakeContainer;

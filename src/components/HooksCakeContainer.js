import { useSelector } from "react-redux"; // zeby dostac sie do state

const HooksCakeContainer = () => {
  
  const numOfCakes = useSelector(state => state.numOfCakes)
  return <div>
    <h2>(hooks) Num of cakes: {numOfCakes}</h2>
    <button>Buy a Cake</button>
  </div>;
};

export default HooksCakeContainer;

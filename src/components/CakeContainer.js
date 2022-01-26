// import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => { // to jest props dzieki connect
  // console.log(props);

  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <button onClick = {props.buyCake}>Buy a Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

//the connect function connects component to store

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

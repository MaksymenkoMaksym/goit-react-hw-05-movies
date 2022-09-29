// import PropTypes from 'prop-types'; // ES6
import { Dna } from 'react-loader-spinner';
import Div from './Loader.styled';
const Loader = () => (
  <Div>
    <Dna
      visible={true}
      height="800"
      width="800"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </Div>
);

// Loader.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
// };
export default Loader;

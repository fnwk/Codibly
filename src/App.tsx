import { useSelector } from "react-redux";

import Modal from "./models/modal";

import { Options, Title, Wrapper } from "./styles/styledComponents";
import Pagination from "./components/Pagination";
import ProductList from "./components/ProductList";
import ProductsPerPage from "./components/ProductsPerPage";
import Searchbar from "./components/Searchbar";
import ColorModal from "./components/ColorModal";

const App = () => {
  const showModal = useSelector(
    (state: { modal: Modal }) => state.modal.showModal
  );

  return (
    <>
      {showModal && <ColorModal />}
      <Title>Find your colors</Title>
      <Wrapper>
        <Options>
          <ProductsPerPage />
          <Searchbar />
        </Options>
        <ProductList />
      </Wrapper>
      <Pagination />
    </>
  );
};

export default App;

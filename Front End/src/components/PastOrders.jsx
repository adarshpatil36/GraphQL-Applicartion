import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { ENV } from "../config";
import PastOrderCard from "./PastOrderCard";
import { useHistory } from "react-router";

const PastOrders = ({ userData }) => {
  const [orders, setOrders] = useState([]);
  const [paginateData, setPaginateData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getData();
  }, [offset, orders]);

  useEffect(() => {
    getOrders();
  }, []);

  const handlePageClick = (e) => {
    if (e.target.id === "next") {
      setOffset(offset + 1);
    } else {
      if (offset > 0) {
        setOffset(offset - 1);
      }
    }
  };

  const getData = () => {
    const data = orders;
    const slice = data.slice(offset * perPage, (offset + 1) * perPage);
    setPaginateData(slice);
    setPageCount(Math.ceil(data.length / perPage));
  };

  let history = useHistory();
  const redirectToDashboard = () => {
    history.push("/dashboard");
  };
  const getOrders = () => {
    console.log(userData);
    fetch(`${ENV.LOCAL_HOST}/orders/${userData._id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  };
  return (
    <div>
      <NavBar />
      <div className="postOrder">
        <div>Past Orders</div>
        <button type="button" onClick={redirectToDashboard}>
          Back to home
        </button>
      </div>
      {Object.keys(paginateData).length > 0 && (
        <div className="OrderItem">
          <div className="cart_section">
            <div className="container-fluid">
              {Object.values(paginateData).map((item) => (
                <PastOrderCard selectedRestaurant={item} />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="paginationButtons">
        <button id="prev" onClick={(e) => handlePageClick(e)}>
          Prev
        </button>
        {`Current Page No. ${offset + 1}`}
        <button id="next" onClick={(e) => handlePageClick(e)}>
          Next
        </button>
      </div>
    </div>
  );
};

PastOrders.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({
  userData: state.data.userData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PastOrders);

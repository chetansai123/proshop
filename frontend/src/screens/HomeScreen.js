import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.jsx";
const url = process.env.REACT_APP_URL;

const HomeScreen = () => {
  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    const res = await axios.get(`${url}products`);
    setProducts(res?.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        {products?.map((product) => (
          <Col key={product._id} lg={4} md={6} sm={12} xl={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

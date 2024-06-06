import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} lg={4} md={6} sm={12} xl={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

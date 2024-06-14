import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListGroup, Row, Col, Image, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
const url = process.env.REACT_APP_URL;

const ProductScreen = () => {
  const [product, setProduct] = useState();
  const { id: productId } = useParams();

  const fetchProduct = async () => {
    const res = await axios.get(`${url}products/${productId}`);
    console.log(res);
    setProduct(res?.data);
  };

  useState(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Link className="btn btn-dark " to="/">
        Go Back
      </Link>
      <Row className="mt-5">
        <Col md={5}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item as="h3">{product?.name}</ListGroup.Item>
            <ListGroup.Item>
              {<Rating value={product?.rating} text={product?.numReviews} />}
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
            <ListGroup.Item className="description">
              Description: {product?.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      ${product?.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="dark" disabled={product?.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

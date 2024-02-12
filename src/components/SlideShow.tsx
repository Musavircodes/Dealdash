import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";

const SlideShow = ({ data }: any) => {
  return (
    <Carousel className="carousel-container">
      {data.map((item: any, index: number) => (
        <Carousel.Item key={index}>
          <Card>
            <Row>
              <div
                style={{
                  width: "100vw",
                  height: "200px",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#ffc107",
                  objectFit: "contain",
                }}
              >
                <div className="d-flex">
                  <div>
                    {" "}
                    <img
                      className="slide-images"
                      style={{ borderRadius: "5px" }}
                      src={item.thumbnail}
                      alt={item.title}
                    />
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-center ">
                    <Card.Title className="mobile-text">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="d-none d-sm-block">
                      {item.description}
                    </Card.Text>
                  </div>
                </div>
              </div>
            </Row>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SlideShow;

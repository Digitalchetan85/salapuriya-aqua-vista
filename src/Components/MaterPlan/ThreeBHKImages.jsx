import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/floor-plans/3BHK-3B-2T.png";
import Image2 from "../../images/floor-plans/3BHK-3B-3T.png";
import Image3 from "../../images/floor-plans/3BHK-3B-3T-1.png";

const ThreeBHKImages = () => {
  const ThreeBHKImages = [
    { id: 1, imgName: Image1, alt: "", tag: "" },
    { id: 2, imgName: Image2, alt: "", tag: "" },
    { id: 3, imgName: Image3, alt: "", tag: "" },
  ];

  return (
    <div>
      <h2 className="text-center"> Coming Soon</h2>
      {/* <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {ThreeBHKImages.map((item) => (
                <Col md={3} key={item.id}>
                  <div className="m-1 text-center border rounded">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container> */}
    </div>
  );
};

export default ThreeBHKImages;

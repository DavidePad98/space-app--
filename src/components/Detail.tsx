import { Card, Col, Container, Row } from "react-bootstrap";
import ResultInterface from "../interfaces/result";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [details, setDetails] = useState<ResultInterface>({});
  const params = useParams();

  const fetchSingleArticle = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/" + params.id
      );
      if (response.ok) {
        const arrayOfArticle = await response.json();
        console.log("ar", arrayOfArticle);
        setDetails(arrayOfArticle);
      } else {
        throw new Error("errore nel recupero dei libri");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <Container className="vh-100">
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={6}>
          <Card className="border-0 h-100 text-white bg-transparent ">
            <Card.Title className="mb-4">{details.title}</Card.Title>
            <Card.Img variant="top" src={details.image_url} />
            <Card.Body>
              <Card.Text>{details.summary}</Card.Text>
              <Card.Text className="text-end fs-c">
                <Link to={details.url} className="text-white fw-bold ">
                  {details.news_site}
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Detail;

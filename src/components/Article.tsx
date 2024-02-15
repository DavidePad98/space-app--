import { Button, Card, Col } from "react-bootstrap";
import ResultInterface from "../interfaces/result";
import { useNavigate } from "react-router-dom";

interface ArticleProps {
  articleData: ResultInterface;
}

const Article = ({ articleData }: ArticleProps) => {
  const navigate = useNavigate();

  return (
    <Col xs={12} md={3}>
      <Card className="h-100 p-2 border-0 bg-transparent text-white">
        <Card.Img variant="top" src={articleData.image_url} />
        <Card.Body className=" d-flex justify-content-between flex-column">
          <Card.Title>{articleData.title}</Card.Title>
          <Card.Text>{articleData.news_site}</Card.Text>
          <Button
            className="bc"
            onClick={() => navigate("/detail/" + articleData.id)}
          >
            Mostra dettagli<i className="px-3 bi bi-search"></i>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Article;

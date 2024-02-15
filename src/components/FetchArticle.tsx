import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ResultInterface from "../interfaces/result";
import Article from "./Article";

const FetchArticle = () => {
  const [article, setArticle] = useState<ResultInterface[]>([]);

  const fetchSpaceArticle = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        // andiamo avanti
        const arrayOfArticle = await response.json();
        console.log(arrayOfArticle);
        // salviamo l'array dei libri nello state
        setArticle(arrayOfArticle.results);
      } else {
        // lanciamoci nel catch
        throw new Error("errore nel recupero dei libri");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSpaceArticle();
  }, []);

  return (
    <Container fluid className="px-5 my-4">
      <Row className="g-3">
        <h1 className="text-center text-white my-5 x">SPACE ARTICLES</h1>
        {article.map((e) => (
          <Article articleData={e} key={e.id} />
        ))}
      </Row>
    </Container>
  );
};
export default FetchArticle;

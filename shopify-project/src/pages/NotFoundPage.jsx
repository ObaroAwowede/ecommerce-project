import { Header } from "../components/Header";
import "./NotFoundPage.css";
export function NotFound({cart}) {
  return (
    <>
      <title>404 Page not found</title>
      <Header cart={cart}/>

      <div className="error-page">
        Page Not Found
      </div>
    </>
  );
}

import { Header } from "../components/Header";
import "./NotFoundPage.css";
export function NotFound() {
  return (
    <>
      <title>404 Page not found</title>
      <Header />

      <div className="error-page">
        Page Not Found
      </div>
    </>
  );
}

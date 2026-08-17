import { Link } from 'react-router-dom';

export const ActionCard = () => {
  return (
    <div>
      <h1>ActionCard</h1>
      <Link to="/topics">
        <button>Temas</button>
      </Link>
      <Link to="/exam">
        <button>Examen</button>
      </Link>
    </div>
  );
};

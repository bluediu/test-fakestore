import { useNavigate } from 'react-router-dom';

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      ⬅ Go back
    </button>
  );
};

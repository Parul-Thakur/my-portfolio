import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 mt-4 text-white bg-[#6da8d3] hover:bg-[#4682A9] rounded-full font-semibold transition"
    >
      ← Back
    </button>
  );
};

export default BackButton;

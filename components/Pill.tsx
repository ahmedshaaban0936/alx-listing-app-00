const Pill: React.FC<PillProps> = ({ label }) => {
    return (
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
        {label}
      </button>
    );
  };
  
  export default Pill;
  
function ButtonConnexion({ width }) {

  return (
    <button type="submit" className={`w-${width || 'full'} py-3.5 px-4 mt-4 rounded-md bg-black text-white font-bold relative`}>
      Continuer
      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3">
        &rarr;
      </span>
    </button>
  );
}

export default ButtonConnexion;

function ButtonConnexion({ width }) {

  return (
    <button
      type="submit"
      className={`${width || 'w-full'} py-3.5 px-4 mt-4 rounded-md bg-black text-white font-bold relative`}>
      Continuer
      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3">
      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.00001 12.8538L6.10418 11.958L10.9583 7.12467H0.645844V5.87467H10.9583L6.10418 1.04134L7.00001 0.145508L13.3542 6.49967L7.00001 12.8538Z" fill="white"/>
</svg>

      </span>
    </button>
  );
}

export default ButtonConnexion;

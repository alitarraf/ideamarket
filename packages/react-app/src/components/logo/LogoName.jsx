import image from "./logoTitle.png";

const LogoName = ({ size }) => {
  const logoSrc = image;
  const altTag = "Tidai";
  return (
    <div className="flex-shrink-0 flex items-center px-4">
      {size ? (
        <img className={`h-${size} w-${size}`} src={logoSrc} alt={altTag} />
      ) : (
        <img className="h-10 w-auto" src={logoSrc} alt={altTag} />
      )}
    </div>
  );
};
export default LogoName;

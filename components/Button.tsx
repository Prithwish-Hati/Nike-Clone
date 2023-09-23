import Image from "next/image";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: any) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <Image
          src={iconURL}
          width={25}
          height={25}
          alt="arrow right icon"
          className="ml-2 p-1 rounded-full bg-white"
        />
      )}
    </button>
  );
};

export default Button;

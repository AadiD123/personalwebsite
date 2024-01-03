import { ArrowBack, ArrowForward } from "@mui/icons-material";

export function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 right-0 z-10 cursor-pointer`}
      onClick={onClick}
    >
      <ArrowForward style={{ fontSize: "35px" }} /> {/* Adjust the fontSize */}
    </div>
  );
}

export function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 left-0 z-10 cursor-pointer`}
      onClick={onClick}
    >
      <ArrowBack style={{ fontSize: "35px" }} /> {/* Adjust the fontSize */}
    </div>
  );
}

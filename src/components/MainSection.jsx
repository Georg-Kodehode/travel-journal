import data from "../data";
import Location from "./Location";

export default function MainSection() {
  const locations = data.map((item) => {
    return <Location key={item.key} item={item} />;
  });
  return <div className="main">{locations}</div>;
}

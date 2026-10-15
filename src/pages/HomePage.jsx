import heroImg from "../assets/summer-shopping-banner.png";

export default function HomePage() {
  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="w-full h-full object-cover object-center block"
      />
    </div>
  );
}
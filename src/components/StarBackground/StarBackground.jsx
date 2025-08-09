import Starfield from "react-starfield";

const StarBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Starfield
        starCount={10010} // তারা কয়টা হবে
        starColor={[255, 255, 255]} // সাদা রঙ
        speedFactor={0.05} // তারার গতি
        backgroundColor="black" // ব্যাকগ্রাউন্ড কালার
      />
    </div>
  );
};

export default StarBackground;



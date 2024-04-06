import "./App.css"
import { useState } from "react"
import ComponentNavbar from "./assets/Component/Navbar.jsx"
import ComponentContent from "./assets/Component/Content.jsx";
import ComponentOrder from "./assets/Component/Order.jsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  let [setPage] = useState("LandingPage")
  return (
    <>
      <div className="apps">
        <ComponentNavbar setPage={setPage} />
        <ComponentContent />
        <ComponentOrder />
      </div >
    </>
  )
}

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Scene } from "./Configration";

export default function App() {
  const [visibleObject, setVisibleObject] = useState("Platak");

  const handleSelection = (objectName) => {
    setVisibleObject(objectName);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Sidebar for UI */}
      <div
        style={{
          width: "200px",
          backgroundColor: "#fff",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        {[
          { name: "Aabbou_Overkapping", img: "/public/overkapping.png" },
          { name: "Kabschuur", img: "/public/kabchir.png" },
          { name: "Platak", img: "/public/Platak.png" },
          { name: "Zadeldak", img: "/public/Zadeldak.png" },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => handleSelection(item.name)}
            style={{
              border: visibleObject === item.name ? "2px solid black" : "none",
              borderRadius: "6px",
              marginBottom: "20px",
              cursor: "pointer",
              backgroundColor: "transparent",
              padding: "3px",
              position: "relative", // Position for label overlay
            }}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: visibleObject === item.name ? "110px" : "100px", // Increase size
                height: visibleObject === item.name ? "90px" : "100px",
                objectFit: "contain",
                borderRadius: "8px",
                transition: "0.3s ease", // Smooth transition
              }}
            />

            {/* Bold Label */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px", // Position below the image
                left: "50%",
                transform: "translateX(-50%)",
                color: visibleObject === item.name ? "black" : "gray", // Black for selected
                fontWeight: visibleObject === item.name ? "bold" : "normal",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {item.name}
            </div>
          </button>
        ))}
      </div>

      {/* Canvas for 3D Scene */}
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{ flex: 1 }}
      >
        <ambientLight intensity={0.1} />

        {/* Scene with dynamic visibility */}
        <Scene visibleObject={visibleObject} />

        {/* Environment Map */}
        <Environment preset="warehouse" />

        {/* Orbit Controls */}
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

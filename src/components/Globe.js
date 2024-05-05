"use client";
import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";

function GlobeComponent() {
  const [countries, setCountries] = useState({ features: [] });
  const globeEl = useRef();
  const [size, setSize] = useState(1000); // Default size for server-side rendering

  useEffect(() => {
    // Set initial globe controls
    const controls = globeEl.current.controls();
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3;
    controls.minPolarAngle = Math.PI / 2; // restrict to equator
    controls.maxPolarAngle = Math.PI / 2; // restrict to equator

    // Check if we are on the client side before accessing the window object
    if (typeof window !== "undefined") {
      setSize(window.innerWidth < 768 ? 500 : 800);
    }

    // Load data
    fetch("ne_110m_admin_0_countries.geojson")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <Globe
        ref={globeEl}
        hexPolygonsData={countries.features}
        height={size} // Use the size variable here
        width={size} // And here
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor="magenta"
        hexPolygonColor={() => "#e011dd"}
        hexPolygonAltitude={0.06}
      />
    </div>
  );
}

export default GlobeComponent;

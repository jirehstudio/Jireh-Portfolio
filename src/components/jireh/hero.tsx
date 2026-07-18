"use client";


import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  const [projectText, setProjectText] = useState("Accepting new projects");

  useEffect(() => {
    const targetDate = new Date();
    // Look ahead 30 days so that in the final month of a quarter we book for the next quarter
    targetDate.setDate(targetDate.getDate() + 30);
    const quarter = Math.floor(targetDate.getMonth() / 3) + 1;
    const year = targetDate.getFullYear();
    setProjectText(`Accepting 3 new projects for Q${quarter} ${year}`);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-12">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute inset-0 noise" />

      {/* Cyan orb top-right */}
      <div className="orb animate-pulse-soft -top-20 -right-20 h-[420px] w-[420px] bg-cyan/30" />
      <div className="orb top-40 -left-32 h-[360px] w-[360px] bg-[#00b4d8]/20" />

      {/* Background Video (Globe) */}
      <div className="absolute inset-0 z-0 opacity-40 flex items-center justify-center">
        {/* Responsive dark shadow silhouette directly behind the globe */}
        <div className="absolute w-[140%] max-w-[800px] aspect-square bg-[#00f5d4]/50 blur-[120px] rounded-full pointer-events-none translate-y-[20px] -z-10" />
        <HeroVisual />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full pt-16 sm:pt-24">
        <div className="flex flex-col items-center text-center relative">
          {/* Soft dark shadow backdrop for text readability */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-5xl h-[120%] bg-black/55 blur-[100px] rounded-[100%] pointer-events-none -z-10" />

          {/* Top: Copy */}
          <div className="w-full max-w-4xl flex flex-col items-center">
            <Reveal amount={0} delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/60 px-3 py-1.5 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                <span className="text-xs text-mist tracking-wide">
                  {projectText}
                </span>
              </div>
            </Reveal>

            <Reveal amount={0} delay={0.25}>
              <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                <span className="gradient-text">Crafting digital</span>
                <br className="hidden sm:block" />
                <span className="gradient-text"> excellence for </span>
                <br className="hidden sm:block" />
                <span className="gradient-accent">ambitious teams.</span>
              </h1>
            </Reveal>

            <Reveal amount={0} delay={0.4}>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-fog leading-relaxed text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Jireh Studio is a digital design and engineering agency crafting premium brand websites,
                high-conversion storefronts, and custom software. We blend world-class UI/UX, robust development,
                revenue marketing, and custom workflow AI to scale your business.
              </p>
            </Reveal>

            <Reveal amount={0} delay={0.55}>
              <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
                <a href="#contact" className="btn-primary">
                  Start a project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#work" className="btn-ghost">
                  View selected work
                </a>
              </div>
            </Reveal>

          {/* Stat row - Hidden for now
            <dl className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16 max-w-2xl mx-auto">
              {[
                { k: "150+", v: "Projects launched" },
                { k: "300%", v: "Average ROI" },
                { k: "4–6w", v: "First milestone" },
              ].map((s) => (
                <div key={s.k} className="flex flex-col items-center">
                  <dt className="font-display text-2xl sm:text-3xl font-semibold text-white">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs text-fog leading-tight">{s.v}</dd>
                </div>
              ))}
            </dl>
            */}
          </div>

        </div>

        {/* Trusted-by strip - Hidden for now
        <div className="mt-20 sm:mt-28">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-fog mb-5">
            <span>Trusted by founders &amp; operators across</span>
            <div className="flex-1 h-px bg-line" />
          </div>
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-12">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex items-center gap-12 pr-12">
                  {LOGOS.map((logo, i) => (
                    <span
                      key={`${dup}-${i}`}
                      className="font-display text-lg sm:text-xl font-semibold text-fog/60 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}

const LOGOS = [
  "NORTHWIND",
  "FinTech.io",
  "Lumen Labs",
  "Vertex",
  "Cobalt",
  "Orbital",
  "Helix",
  "Solstice",
];

const HUB_COUNTRY_MAPPING: Record<string, string> = {
  "Mumbai, India": "India",
  "Dubai": "United Arab Emirates",
  "Muscat, Oman": "Oman",
  "Tokyo": "Japan",
  "Sydney": "Australia",
  "Singapore": "Malaysia",
  "Hong Kong": "China",
  "Cape Town": "South Africa",
  "London, UK": "United Kingdom",
  "Paris": "France",
  "Berlin": "Germany",
  "New York": "United States of America",
  "Toronto": "Canada",
  "Los Angeles": "United States of America",
  "Sao Paulo": "Brazil",
};

function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    let renderer: any;
    let controls: any;
    let animationFrameId: number;
    let handleResizeListener: () => void;
    let mouseMoveListener: (event: MouseEvent) => void;
    let containerElement: HTMLDivElement | null = null;
    let hudElements: any[] = [];

    const initGlobe = async () => {
      // 1. Dynamic imports to avoid SSR ReferenceErrors
      const THREE = await import("three");
      const ThreeGlobe = (await import("three-globe")).default;
      const { TrackballControls } = await import(
        "three/examples/jsm/controls/TrackballControls.js"
      );

      if (!active || !containerRef.current) return;

      containerElement = containerRef.current;
      const container = containerElement;
      let currentHighlightsStr = "";
      let countriesInitialized = false;
      const countryMeshes = new Map<string, { cap: any[], stroke: any[] }>();
      let prevHighlights: string[] = [];
      let prevCount = 0;
      let stableFrames = 0;


      // Strategic global hub cities (exact coordinates)
      const HubGeoCoordinates = [
        { lat: 19.0760, lng: 72.8777, name: "Mumbai, India", project: "Jireh Studio", color: "#fbbf24", isHQ: true }, // HQ
        { lat: 25.2048, lng: 55.2708, name: "Dubai", color: "#00f5d4" },
        { lat: 23.5859, lng: 58.4059, name: "Muscat, Oman", project: "Matti Sirvio Art Galleria", color: "#3a86ff" },
        { lat: 35.6812, lng: 139.7671, name: "Tokyo", color: "#00f5d4" },
        { lat: -33.8688, lng: 151.2093, name: "Sydney", color: "#3a86ff" },
        { lat: 1.3521, lng: 103.8198, name: "Singapore", color: "#00f5d4" },
        { lat: 22.3193, lng: 114.1694, name: "Hong Kong", color: "#3a86ff" },
        { lat: -33.9249, lng: 18.4241, name: "Cape Town", color: "#00f5d4" },
        { lat: 51.5074, lng: -0.1278, name: "London, UK", color: "#3a86ff" },
        { lat: 48.8566, lng: 2.3522, name: "Paris", color: "#00f5d4" },
        { lat: 52.5200, lng: 13.4050, name: "Berlin", color: "#3a86ff" },
        { lat: 40.7128, lng: -74.0060, name: "New York", color: "#00f5d4" },
        { lat: 43.6510, lng: -79.3470, name: "Toronto", color: "#3a86ff" },
        { lat: 34.0522, lng: -118.2437, name: "Los Angeles", color: "#00f5d4" },
        { lat: -23.5505, lng: -46.6333, name: "Sao Paulo", color: "#3a86ff" },
        { lat: -20.3484, lng: 57.5522, name: "Mauritius", project: "Sunzee Travel", color: "#00f5d4" }
      ];

      // Generate Hub & Spoke arcs (randomized directions and timing)
      const hq = HubGeoCoordinates.find(h => h.isHQ)!;
      const generatedArcs = HubGeoCoordinates.filter(h => !h.isHQ).map((hub, i) => {
        const toHQ = Math.random() > 0.5;
        return {
          startLat: toHQ ? hub.lat : hq.lat,
          startLng: toHQ ? hub.lng : hq.lng,
          endLat: toHQ ? hq.lat : hub.lat,
          endLng: toHQ ? hq.lng : hub.lng,
          color: i % 2 === 0 ? "#00f5d4" : "#3a86ff",
          order: Math.random() * 2, // stagger intervals
          startCountry: toHQ ? (HUB_COUNTRY_MAPPING[hub.name] || null) : "India",
          endCountry: toHQ ? "India" : (HUB_COUNTRY_MAPPING[hub.name] || null)
        };
      });

      // 2. Initialize Globe with theme values and datasets
      const Globe = new ThreeGlobe()
        .globeMaterial(new THREE.MeshPhongMaterial({ color: "#0b0d19", transparent: true, opacity: 0.85 }))
        .showAtmosphere(true)
        .atmosphereColor("#00f5d4")
        .atmosphereAltitude(0.15)
        .arcsData([])
        .arcColor("color")
        .arcDashLength(0.4)
        .arcDashGap(2)
        .arcDashInitialGap((d: any) => d.order)
        .arcDashAnimateTime(3000)
        .arcStroke(0.6);

      // Convert hub coordinates to local 3D vector points on the 100-radius sphere for shader distance calculation
      const hubVectors = HubGeoCoordinates.map(hub => {
        const coords = Globe.getCoords(hub.lat, hub.lng, 0);
        return new THREE.Vector3(coords.x, coords.y, coords.z);
      });

      const waveUniforms = {
        uTime: { value: 0 },
        uHubs: { value: hubVectors },
        uColors: { value: HubGeoCoordinates.map(h => new THREE.Color(h.color)) }
      };

      const customMaterial = new THREE.MeshPhongMaterial({
        color: "#0c0d1b", // Dark navy base landmass color
        transparent: true,
        opacity: 0.85,
        shininess: 6
      });

      customMaterial.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = waveUniforms.uTime;
        shader.uniforms.uHubs = waveUniforms.uHubs;
        shader.uniforms.uColors = waveUniforms.uColors;

        shader.fragmentShader = `
          uniform float uTime;
          uniform vec3 uHubs[${HubGeoCoordinates.length}];
          uniform vec3 uColors[${HubGeoCoordinates.length}];
          varying vec3 vLocalPosition;
        ` + shader.fragmentShader;

        shader.vertexShader = `
          varying vec3 vLocalPosition;
        ` + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
          "\t#include <begin_vertex>",
          `\t#include <begin_vertex>
          vLocalPosition = position;`
        );

        shader.fragmentShader = shader.fragmentShader.replace(
          "\tvec4 diffuseColor = vec4( diffuse, opacity );",
          `
          vec3 finalColor = diffuse;
          float totalGlow = 0.0;
          // Base glow calculation
          
          for (int i = 0; i < ${HubGeoCoordinates.length}; i++) {
            // Give each hub a slightly staggered wave based on its index
            float cycleTime = mod(uTime + (float(i) * 0.5), 4.0); 
            float d = distance(vLocalPosition, uHubs[i]);
            
            // Expand radius slower and further
            float currentRadius = cycleTime * 15.0; 
            
            // Ring thickness and shape
            float wave = smoothstep(3.0, 0.0, abs(d - currentRadius));
            
            // Fade out as it gets further from the hub
            float maxDist = 30.0;
            float distAttenuation = smoothstep(maxDist, 0.0, d);
            
            // Fade out over the cycle time so it disappears smoothly before snapping back
            float timeFade = smoothstep(2.0, 1.0, cycleTime);
            
            float glow = wave * distAttenuation * timeFade * 2.5;
            totalGlow += glow;
            finalColor = mix(finalColor, uColors[i], glow * 0.85);
          }
          
          vec4 diffuseColor = vec4( finalColor, opacity * (0.4 + totalGlow * 0.6) );
          `
        );
      };

      // Position and orient active hub area in viewport on load
      Globe.position.y = -8;   // Bring the globe a little higher on the screen
      Globe.rotation.y = 4.41;  // Start on Mumbai landmass
      Globe.rotation.x = 0.22;  // Tilt slightly to reveal northern hemisphere hubs

      // Load local countries.geojson for continent hex polygons
      fetch("/countries.geojson")
        .then((res) => res.json())
        .then((countries) => {
          if (!active) return;
          // 7-color palette for country differentiation (dark tones that pair with the glow shader)
          const countryPalette = [
            "rgba(12, 20, 38, 0.9)",   // 1 – deep navy
            "rgba(16, 26, 42, 0.9)",   // 2 – slate navy
            "rgba(10, 22, 34, 0.9)",   // 3 – dark teal-navy
            "rgba(18, 18, 36, 0.9)",   // 4 – muted indigo
            "rgba(14, 24, 40, 0.9)",   // 5 – steel blue
            "rgba(20, 20, 32, 0.9)",   // 6 – charcoal violet
            "rgba(12, 16, 30, 0.9)"    // 7 – midnight
          ];

          Globe.hexPolygonsData(countries.features)
            .hexPolygonResolution(3)
            .hexPolygonMargin(0.6)
            .hexPolygonColor((d: any) => {
              const mc = d.properties?.MAPCOLOR7 || 1;
              return countryPalette[(mc - 1) % countryPalette.length];
            });
            
          // Setup custom HUD container for high-res HTML text overlays
          const hudContainer = document.createElement("div");
          hudContainer.style.position = "absolute";
          hudContainer.style.top = "0px";
          hudContainer.style.left = "0px";
          hudContainer.style.width = "100%";
          hudContainer.style.height = "100%";
          hudContainer.style.pointerEvents = "none";
          hudContainer.style.overflow = "hidden"; // so clamped elements don't bleed out
          container.appendChild(hudContainer);
          
          hudElements = HubGeoCoordinates.map(d => {
            const el = document.createElement("div");
            el.className = `absolute pointer-events-auto transition-opacity duration-300`;
            
            if (d.project) {
              const border = d.isHQ ? "border-amber-400/40" : "border-white/10";
              const shadow = d.isHQ ? "shadow-amber-400/20" : "shadow-cyan/10";
              
              el.innerHTML = `
                <div class="relative flex flex-col gap-0.5 rounded-lg border ${border} bg-[#0c101e]/80 backdrop-blur-md px-3 py-2 text-white shadow-xl ${shadow} cursor-pointer hover:scale-105 transition-transform" style="transform: translate(-50%, -120%);">
                  ${d.isHQ ? `<span class="text-[9px] font-bold text-amber-400 tracking-widest mb-1 flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> GLOBAL HQ</span>` : ''}
                  <span class="text-[9px] uppercase tracking-wider" style="color: ${d.color}">${d.name}</span>
                  <span class="text-xs font-semibold whitespace-nowrap">${d.project}</span>
                  <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0c101e]/80 border-b border-r ${border} rotate-45"></div>
                </div>
              `;
            } else {
              el.innerHTML = `
                <div class="relative flex items-center gap-1.5 cursor-pointer hover:scale-110 transition-transform" style="transform: translate(-50%, -50%);">
                  <div class="w-1.5 h-1.5 rounded-full" style="background-color: ${d.color}; box-shadow: 0 0 8px ${d.color};"></div>
                  <span class="text-[10px] font-semibold tracking-wide drop-shadow-md whitespace-nowrap" style="color: rgba(255, 255, 255, 0.95); text-shadow: 0 1px 4px rgba(0,0,0,0.8);">${d.name}</span>
                </div>
              `;
            }
            
            el.style.opacity = "0"; // hidden initially
            hudContainer.appendChild(el);
            return { el, data: d, pos: new THREE.Vector3(), isCard: !!d.project };
          });

          // Glowing continent/country borders via the polygons layer
          Globe.polygonsData(countries.features)
            .polygonCapColor(() => "rgba(0,0,0,0)")        // Fully transparent cap
            .polygonSideColor(() => "rgba(0,0,0,0)")       // Fully transparent sides
            .polygonStrokeColor(() => "rgba(0, 245, 212, 0.22)")  // Dim cyan border by default
            .polygonAltitude(0.005);                       // Thin offset above the surface
        })
        .catch((err) => console.error("Error loading countries GeoJSON:", err));

      // 3. Setup Three.js Scene, Camera & Renderer
      const scene = new THREE.Scene();
      scene.add(Globe);

      // Add Drift Starfield Background
      const starCount = 600;
      const starsGeometry = new THREE.BufferGeometry();
      const starsPositions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount * 3; i += 3) {
        const r = 240 + Math.random() * 200;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        starsPositions[i] = r * Math.sin(phi) * Math.cos(theta);
        starsPositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        starsPositions[i + 2] = r * Math.cos(phi);
      }
      starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3));
      const starsMaterial = new THREE.PointsMaterial({
        color: "#3a86ff",
        size: 1.5,
        transparent: true,
        opacity: 0.45,
        sizeAttenuation: true
      });
      const starField = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(starField);

      // Add Surface Hover Highlight Mesh
      const highlightGeometry = new THREE.SphereGeometry(2.5, 16, 16);
      const highlightMaterial = new THREE.MeshBasicMaterial({
        color: "#00f5d4",
        transparent: true,
        opacity: 0.0, // Invisible by default
        blending: THREE.AdditiveBlending
      });
      const hoverHighlight = new THREE.Mesh(highlightGeometry, highlightMaterial);
      scene.add(hoverHighlight);

      // Add Ambient and Colored Highlight Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      // Tech-aesthetic directional lighting (Cyan & Blue highlights on the globe edges)
      const dLight1 = new THREE.DirectionalLight("#00f5d4", 1.8);
      dLight1.position.set(-1, 1, 1);
      scene.add(dLight1);

      const dLight2 = new THREE.DirectionalLight("#3a86ff", 1.8);
      dLight2.position.set(1, -1, -1);
      scene.add(dLight2);

      const width = container.clientWidth || 500;
      const height = container.clientHeight || 500;
      const aspect = width / height;

      const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
      camera.position.z = width < 768 ? 320 : 220;
      
      // Shift the camera view frustum to move the globe 12% down the screen
      // without changing perspective or clipping the WebGL canvas at the top
      camera.setViewOffset(width, height, 0, -height * 0.12, width, height);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      // 4. Setup Controls
      controls = new TrackballControls(camera, renderer.domElement);
      controls.noPan = true;
      controls.noZoom = true;
      controls.rotateSpeed = 2.0;
      controls.dynamicDampingFactor = 0.05;

      // Setup Raycaster for Mouse Hover Highlights
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      mouseMoveListener = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(Globe.children, true);

        if (active) {
          if (intersects.length > 0) {
            const hitPoint = intersects[0].point;
            hoverHighlight.position.copy(hitPoint);
            highlightMaterial.opacity = 0.75;
            container.style.cursor = "pointer";
          } else {
            highlightMaterial.opacity = 0.0;
            container.style.cursor = "grab";
          }
        }
      };
      container.addEventListener("mousemove", mouseMoveListener);

      // State for dynamic camera sequences
      const sequenceLocations = [
        { lat: 19.0760, lng: 72.8777 },  // Mumbai
        { lat: 23.5859, lng: 58.4059 },  // Muscat
        { lat: 51.5074, lng: -0.1278 },  // London
        { lat: 40.7128, lng: -74.0060 }, // New York
        { lat: -20.3484, lng: 57.5522 }  // Mauritius
      ];
      let seqIndex = 0;
      let nextMoveTime = Date.now(); // Start scrolling instantly

      const startTime = Date.now();
      let arcsAdded = false;
      const animate = () => {
        if (!active) return;
        
        const now = Date.now();
        // Update shader time uniform (elapsed seconds, not epoch)
        waveUniforms.uTime.value = (now - startTime) * 0.001;

        // Lazy load arcs and activate HUD cleanly (avoids Hot-Reload timeout bugs)
        if (!arcsAdded && (now - startTime > 3500)) {
          Globe.arcsData(generatedArcs);
          arcsAdded = true;
        }

        // Initialize unique materials for each country once they are fully loaded in ThreeJS
        if (!countriesInitialized && arcsAdded) {
          Globe.traverse((obj: any) => {
            if (obj.__globeObjType === "polygon") {
              const countryName = obj.__data?.properties?.ADMIN;
              if (countryName && !countryMeshes.has(countryName)) {
                const entry = { cap: [] as any[], stroke: [] as any[] };
                
                obj.traverse((child: any) => {
                  if (child.isMesh) {
                    if (child.material && !child.material.__isCloned) {
                      child.material = child.material.clone();
                      child.material.__isCloned = true;
                    }
                    entry.cap.push(child);
                  } else if (child.isLine || child.isLineSegments) {
                    if (child.material && !child.material.__isCloned) {
                      child.material = child.material.clone();
                      child.material.__isCloned = true;
                    }
                    entry.stroke.push(child);
                  }
                });
                
                if (entry.cap.length > 0 || entry.stroke.length > 0) {
                  countryMeshes.set(countryName, entry);
                }
              }
            }
          });
          
          const currentCount = countryMeshes.size;
          if (currentCount > 0 && currentCount === prevCount) {
            stableFrames++;
            if (stableFrames > 60) { // Stable for 60 frames (~1 second)
              countriesInitialized = true;
              console.log("Cached unique materials for all", countryMeshes.size, "countries.");
            }
          } else {
            stableFrames = 0;
            prevCount = currentCount;
          }
        }

        // Dynamic country highlighting based on active connection pulses
        if (countriesInitialized && arcsAdded) {
          const elapsedSec = (now - startTime) * 0.001;
          const animateTimeSec = 3.0; // matching arcDashAnimateTime(3000)
          const activeHighlights = new Set<string>();

          generatedArcs.forEach((arc) => {
            let dashPos = (elapsedSec / animateTimeSec - arc.order) % 1.0;
            if (dashPos < 0) dashPos += 1.0;

            // Connection touches start point
            if (dashPos < 0.15) {
              if (arc.startCountry) activeHighlights.add(arc.startCountry);
            }
            // Connection touches end point
            if (dashPos > 0.85) {
              if (arc.endCountry) activeHighlights.add(arc.endCountry);
            }
          });

          const highlightsStr = Array.from(activeHighlights).sort().join(",");
          if (highlightsStr !== currentHighlightsStr) {
            currentHighlightsStr = highlightsStr;

            // Reset previous highlights to dim
            prevHighlights.forEach((country) => {
              const meshes = countryMeshes.get(country);
              if (meshes) {
                meshes.cap.forEach((mesh) => {
                  if (mesh.material) {
                    mesh.material.color.set("#000000");
                    mesh.material.opacity = 0.0;
                  }
                });
                meshes.stroke.forEach((line) => {
                  if (line.material) {
                    line.material.color.set("#00f5d4");
                    line.material.opacity = 0.22;
                  }
                });
              }
            });

            // Set new highlights to bright glowing cyan
            activeHighlights.forEach((country) => {
              const meshes = countryMeshes.get(country);
              if (meshes) {
                meshes.cap.forEach((mesh) => {
                  if (mesh.material) {
                    mesh.material.color.set("#00f5d4");
                    mesh.material.opacity = 0.25;
                  }
                });
                meshes.stroke.forEach((line) => {
                  if (line.material) {
                    line.material.color.set("#00f5d4");
                    line.material.opacity = 1.0;
                  }
                });
              }
            });

            prevHighlights = Array.from(activeHighlights);
          }
        }

        // Sequence Rotation Logic
        if (now > nextMoveTime) {
          seqIndex = (seqIndex + 1) % sequenceLocations.length;
          nextMoveTime = now + 7000; // Hold at the new location for 7 seconds
        }

        const dest = sequenceLocations[seqIndex];
        const targetY = (dest.lng * Math.PI / 180) + Math.PI;
        const targetX = dest.lat * Math.PI / 180;

        // Calculate shortest path for Y rotation to avoid spinning the wrong way
        let diffY = targetY - Globe.rotation.y;
        while (diffY < -Math.PI) diffY += Math.PI * 2;
        while (diffY > Math.PI) diffY -= Math.PI * 2;
        
        const actualTargetY = Globe.rotation.y + diffY;

        // Add a subtle drift so the globe isn't perfectly static while holding
        const driftY = (now - (nextMoveTime - 7000)) * 0.00003; 
        
        // Smoothly interpolate (pan) to the target coordinates
        Globe.rotation.y += (actualTargetY + driftY - Globe.rotation.y) * 0.04;
        Globe.rotation.x += (targetX - Globe.rotation.x) * 0.04;

        // Background stars continue drifting
        starField.rotation.y += 0.0002;
        starField.rotation.x += 0.0001;

        // Dynamically apply shader material to hex polygon meshes
        // hexPolygon objects are Mesh instances directly (not Groups with children)
        Globe.traverse((obj: any) => {
          if (obj.__globeObjType === "hexPolygon" && obj.isMesh && obj.material !== customMaterial) {
            obj.material = customMaterial;
          }
        });
        
        controls.update();
        renderer.render(scene, camera);

        // Update custom HUD Overlays with Edge Clamping logic
        if (arcsAdded) {
          const w = container.clientWidth;
          const h = container.clientHeight;
          const R = 100; // default three-globe radius
          
          const globeCenter = new THREE.Vector3();
          Globe.getWorldPosition(globeCenter);
          
          const camToCenter = new THREE.Vector3().subVectors(camera.position, globeCenter);
          const dCam = camToCenter.length();
          const horizonCos = R / dCam;
          
          // Pre-calculate globe center and radius in screen space for clamping
          const center2D = globeCenter.clone().project(camera);
          const cX = (center2D.x * 0.5 + 0.5) * w;
          const cY = -(center2D.y * 0.5 - 0.5) * h;
          
          const fov = camera.fov * Math.PI / 180;
          const heightAtCenter = 2 * dCam * Math.tan(fov / 2);
          const screenRadius = (R / heightAtCenter) * h;

          hudElements.forEach(item => {
            const coords = Globe.getCoords(item.data.lat, item.data.lng, 0.005); // Surface level to meet arcs
            item.pos.set(coords.x, coords.y, coords.z);
            
            const worldPos = item.pos.clone();
            Globe.localToWorld(worldPos);
            
            // Check occlusion by taking dot product of vector to point and vector to camera
            const centerToPoint = new THREE.Vector3().subVectors(worldPos, globeCenter).normalize();
            const dot = centerToPoint.dot(camToCenter.clone().normalize());
            const isVisible = dot > horizonCos;
            
            worldPos.project(camera);
            let screenX = (worldPos.x * 0.5 + 0.5) * w;
            let screenY = -(worldPos.y * 0.5 - 0.5) * h;
            
            const contentDiv = item.el.firstElementChild as HTMLElement;
            if (isVisible) {
              item.el.style.left = `${screenX}px`;
              item.el.style.top = `${screenY}px`;
              item.el.style.opacity = "1";
              item.el.style.zIndex = item.isCard ? "20" : "10";
              if (contentDiv) {
                contentDiv.style.transform = item.isCard ? "translate(-50%, -120%) scale(1)" : "translate(-50%, -50%) scale(1)";
              }
            } else {
              // Clamp to edge (HUD logic)
              const dx = screenX - cX;
              const dy = screenY - cY;
              const len = Math.sqrt(dx*dx + dy*dy);
              const clampR = screenRadius + (item.isCard ? 40 : 20); // 40px padding outside the globe edge
              
              if (len > 0) {
                screenX = cX + (dx / len) * clampR;
                screenY = cY + (dy / len) * clampR;
              }
              item.el.style.left = `${screenX}px`;
              item.el.style.top = `${screenY}px`;
              item.el.style.opacity = "0.3"; // Dimmed when behind the globe
              item.el.style.zIndex = "1";
              if (contentDiv) contentDiv.style.transform = "translate(-50%, -50%) scale(0.75)";
            }
          });
        }

        animationFrameId = requestAnimationFrame(animate);
      };
      animate();

      // 6. Handle Resize
      handleResizeListener = () => {
        if (!containerRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        // Re-apply the 12% view offset on resize
        camera.setViewOffset(w, h, 0, -h * 0.12, w, h);
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        camera.position.z = w < 768 ? 320 : 220;
      };
      window.addEventListener("resize", handleResizeListener);
    };

    initGlobe();

    return () => {
      active = false;
      if (containerElement && mouseMoveListener) {
        containerElement.removeEventListener("mousemove", mouseMoveListener);
      }
      if (handleResizeListener) {
        window.removeEventListener("resize", handleResizeListener);
      }
      if (renderer && renderer.domElement && containerElement) {
        try {
          containerElement.removeChild(renderer.domElement);
        } catch (e) {
          // ignore
        }
      }
      if (renderer) renderer.dispose();
      if (controls) controls.dispose();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="h-full w-full pointer-events-auto cursor-grab active:cursor-grabbing flex items-center justify-center animate-floaty scale-110 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" 
    />
  );
}

function FloatingChip({
  className,
  label,
  value,
  accent,
  icon,
}: {
  className: string;
  label: string;
  value: string;
  accent: "cyan" | "coral";
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`absolute ${className} animate-floaty`}
      style={{ animationDelay: `${Math.random() * 1.5}s` }}
    >
      <div className="glass-card px-3 py-2 flex items-center gap-2">
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-md ${accent === "cyan" ? "bg-cyan/10 text-cyan" : "bg-coral/10 text-coral"
            }`}
        >
          {icon}
        </span>
        <div className="pr-1">
          <div className="text-[10px] uppercase tracking-wider text-fog">{label}</div>
          <div
            className={`text-sm font-semibold ${accent === "cyan" ? "text-white" : "text-coral"
              }`}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

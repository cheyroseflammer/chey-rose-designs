// import React, { useEffect, useState, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Smiley from "./Smiley";

// const CanvasEl = () => {
// 	const [width, setWidth] = useState(0);
// 	useEffect(() => {
// 		function size() {
// 			setWidth(window.innerWidth);
// 		}
// 		size();
// 	}, [setWidth]);
// 	return (
// 		<Canvas
// 			className="canvas"
// 			camera={{ fov: 35, zoom: 1, near: 1, far: 1000 }}
// 		>
// 			<ambientLight intensity={0.5} />
// 			<pointLight color="white" intensity={1} position={[10, 10, 10]} />
// 			<Suspense fallback={null}>
// 				<Smiley position={[0, -1, 0]} />
// 			</Suspense>
// 			<OrbitControls
// 				autoRotate={true}
// 				enableZoom={false}
// 				enablePan={false}
// 				enableRotate={false}
// 				autoRotateSpeed={width < 724 ? 5 : 2}
// 			/>
// 		</Canvas>
// 	);
// };

// export default CanvasEl;

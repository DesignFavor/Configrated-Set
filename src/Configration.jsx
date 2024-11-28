import React from "react";
import { useGLTF } from "@react-three/drei";

export function Scene({ visibleObject }) {
  const { nodes, materials } = useGLTF("./model/configration.glb");

  return (
    <group dispose={null}>
      {/* Aabbou_Overkapping */}
      {(visibleObject === "Aabbou_Overkapping" || visibleObject === "Overkapping") && (
        <group position={[-2.352, 1.336, 0.008]} scale={[1.324, 1.324, 1.72]}>
          <mesh geometry={nodes.Aabbou_Overkapping_1.geometry} material={materials.Brick} />
          <mesh geometry={nodes.Aabbou_Overkapping_2.geometry} material={materials["Material.002"]} />
          <mesh geometry={nodes.Aabbou_Overkapping_3.geometry} material={materials["Door Handle"]} />
          <mesh geometry={nodes.Aabbou_Overkapping_4.geometry} material={materials["Material.003"]} />
          <mesh geometry={nodes.Aabbou_Overkapping_5.geometry} material={materials["1 bh6601_1_face_vidro_transparente"]} />
          <mesh geometry={nodes.Aabbou_Overkapping_6.geometry} material={materials["esquadria branca"]} />
          <mesh geometry={nodes.Aabbou_Overkapping_7.geometry} material={materials["Borracha preta"]} />
          <mesh geometry={nodes.Aabbou_Overkapping_8.geometry} material={materials["Plastico preto"]} />
          <mesh geometry={nodes.Aabbou_Overkapping_9.geometry} material={materials.Vermelho3425} />
        </group>
      )}

      {/* Platak */}
      {(visibleObject === "Platak" || visibleObject === "Aabbou_Overkapping") && (
        <group position={[-0.741, 1.344, 0.026]} scale={[0.045, 0.654, 0.045]}>
          <mesh geometry={nodes.Platak_1.geometry} material={materials["Bright brown fine pine wood"]} />
          <mesh geometry={nodes.Platak_2.geometry} material={materials["Wood Black"]} />
        </group>
      )}

      {/* Kabschuur */}
      {visibleObject === "Kabschuur" && (
        <group position={[0.062, 1.936, 0.004]} rotation={[0, 0, -0.427]} scale={[0.065, 0.065, 0.064]}>
          <mesh geometry={nodes.Kabschuur_1.geometry} material={materials["Wood Black"]} />
          <mesh geometry={nodes.Kabschuur_2.geometry} material={materials["Bright brown fine pine wood"]} />
          <mesh geometry={nodes.Kabschuur_3.geometry} material={materials["Dark wood"]} />
        </group>
      )}

      {/* Zadeldak */}
      {visibleObject === "Zadeldak" && (
        <group position={[0.047, 1.686, 0.001]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[0.057, 0.958, 0.023]}>
          <mesh geometry={nodes.Zadeldak_1.geometry} material={materials["Bright brown fine pine wood"]} />
          <mesh geometry={nodes.Zadeldak_2.geometry} material={materials["Wood Black"]} />
          <mesh geometry={nodes.Zadeldak_3.geometry} material={materials["Dark wood"]} />
        </group>
      )}

      {/* Static Elements */}
      <mesh geometry={nodes.floor.geometry} material={materials.Tiles} position={[0.079, 0.052, 0.041]} scale={[2.552, 3.56, 2.818]} />
 
    </group>
  );
}


useGLTF.preload("./model/configration.glb");

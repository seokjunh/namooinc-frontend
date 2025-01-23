"use client";

import { useEffect, useState } from "react";
import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";

const KakaoMap = () => {
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
  const [scriptLoad, setScriptLoad] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      setScriptLoad(true);
    });
  });
  return (
    <div className="border shadow-lg">
      {scriptLoad ? (
        <Map
          center={{ lat: 37.5167085, lng: 127.0287715 }}
          level={4}
          style={{ width: "100%" }}
          className="h-[20rem] sm:h-[25rem] lg:h-[35rem]"
        >
          <MapMarker
            position={{ lat: 37.5167085, lng: 127.0287715 }}
          ></MapMarker>
          <MapTypeControl position={"TOPRIGHT"} />
          <ZoomControl position={"RIGHT"} />
        </Map>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default KakaoMap;

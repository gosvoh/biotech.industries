"use client";

import { ReactifiedModule } from "@yandex/ymaps3-types/reactify";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import React, { useState } from "react";
import ReactDOM from "react-dom";

export type ReactifyApi = ReactifiedModule<
  typeof import("@yandex/ymaps3-types")
>;

const Map = ({ api }: { api: ReactifyApi | null }) => {
  if (!api) return null;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
    YMapControls,
  } = api;

  return (
    <YMap location={{ center: [30.338403, 59.927259], zoom: 17 }}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapControls position="left" />

      <YMapMarker coordinates={[30.338403, 59.927259]}>
        <Link href={"https://itmo.ru"} target="_blank">
          <div className="bg-black hover:bg-slate-700 transition-all text-white rounded-full px-4 py-2 flex flex-row gap-2 text-nowrap items-center">
            <GraduationCap className="w-10 h-10" />
            Университет ИТМО
          </div>
        </Link>
      </YMapMarker>
    </YMap>
  );
};

export default function YandexMap(props: React.HTMLAttributes<HTMLDivElement>) {
  const [reactifyApi, setReactifyApi] = useState<ReactifyApi | null>(null);
  const apiKey = "***REMOVED***";

  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`}
        onLoad={async () => {
          const [ymaps3React] = await Promise.all([
            ymaps3.import("@yandex/ymaps3-reactify"),
            ymaps3.ready,
          ]);
          const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
          setReactifyApi(reactify.module(ymaps3));
        }}
      />
      <div {...props}>
        <Map api={reactifyApi} />
      </div>
    </>
  );
}

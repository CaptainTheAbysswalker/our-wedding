import { YMapLocationRequest } from "ymaps3";

export const initMap = async () => {
  await ymaps3.ready;

  const LOCATION: YMapLocationRequest = {
    center: [29.813107, 60.170556],
    zoom: 17
  };

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  const el = document.getElementById('map')
  if (!el) return ;
  const map = new YMap(el, {location: LOCATION});
  map.addChild(new YMapDefaultSchemeLayer({}));
}
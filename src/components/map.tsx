import React, { useEffect } from "react";

import { initMap } from '../app/helpers/map';

export const Map = () => {
    useEffect(() => {
        initMap();
      }, [])

    return <div id="map" />
}
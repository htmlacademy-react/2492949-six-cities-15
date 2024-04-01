import { useEffect, useRef } from 'react';
import leaflet, { layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TOffer } from '../../types/offers';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../consts';
import useMap from '../../hooks/use-map';

type TMapProps = {
  offers: TOffer[];
  activeOfferId?: string | null;
  page: string;
};

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function Map({ offers, activeOfferId, page }: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = offers[0].city;
  const map = useMap(mapRef);

  useEffect(() => {
    if (city && map) {
      const loc: leaflet.LatLngExpression = {
        lat: city.location.latitude,
        lng: city.location.longitude,
      };
      map.setView(loc, city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (offers) {
      if (map) {
        const markerLayer = layerGroup().addTo(map);
        offers.forEach((offer) => {
          leaflet
            .marker(
              {
                lat: offer.location.latitude,
                lng: offer.location.longitude,
              },
              {
                icon:
                  offer.id === activeOfferId
                    ? activeMarkerIcon
                    : defaultMarkerIcon,
              }
            )
            .addTo(markerLayer);
        });
      }
    }
  }, [activeOfferId, map, offers]);

  return (
    <section
      ref={mapRef}
      className={page === 'offer' ? 'offer__map map' : 'cities__map map'}
    >
    </section>
  );
}

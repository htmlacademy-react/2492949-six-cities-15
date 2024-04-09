import { useEffect, useRef } from 'react';
import leaflet, { layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../consts';
import useMap from '../../hooks/use-map';
import { TCityName, TOffer } from '../../types/offers';
import { CITIES_LOCATIONS } from '../../consts';
import { useAppSelector } from '../../hooks';

type TMapProps = {
  offers: TOffer[];
  activeOfferId?: string | null;
  page: string;
  activeCity?: TCityName;
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

export function Map({
  offers,
  activeOfferId,
  page,
  activeCity,
}: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const offerPlace = useAppSelector(
    (state) => state.singleOffer.offer?.city
  )?.location;
  const city = CITIES_LOCATIONS.find(
    (item) => item.name === activeCity
  )?.location;

  const map = useMap(mapRef);

  useEffect(() => {
    if (city && map) {
      const loc: leaflet.LatLngExpression = {
        lat: city.latitude,
        lng: city.longitude,
      };
      map.setView(loc, city.zoom);
    } else if (offerPlace && map) {
      const loc: leaflet.LatLngExpression = {
        lat: offerPlace.latitude,
        lng: offerPlace.longitude,
      };
      map.setView(loc, offerPlace.zoom);
    }
  }, [map, city, offerPlace]);

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

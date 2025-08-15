import { getRandomWaypoint, mockDestination, mockOptions } from '../mock/waypoints.js';

const WAYPOINT_COUNT = 7;

export default class WaypointModel {
  #waypoints = Array.from({ length: WAYPOINT_COUNT }, getRandomWaypoint);
  #offers = mockOptions;
  #destination = mockDestination;

  get waypoints() {
    return structuredClone(this.#waypoints);
  }

  get offers() {
    return structuredClone(this.#offers);
  }

  getOffersByType(type) {
    const allOffers = this.offers;
    return allOffers.find((offer) => offer.type === type);
  }

  getOffersById(type, itemsId) {
    const offersType = this.getOffersByType(type);
    return offersType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }

  get destinations() {
    return structuredClone(this.#destination);
  }

  getDestinationsById(id) {
    const allDestination = this.destinations;
    return allDestination.find((item) => item.id === id);
  }
}

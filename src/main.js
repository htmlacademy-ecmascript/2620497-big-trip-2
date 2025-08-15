import TripPresenter from './presenter/trip-presenter.js';
import WaypointModel from './model/waypoint-model.js';

const siteFiltersElement = document.querySelector('.trip-main__trip-controls');
const siteMainElement = document.querySelector('.trip-events');
const waypointModel = new WaypointModel();
const presenter = new TripPresenter({ headerContainer: siteFiltersElement, mainContainer: siteMainElement, waypointModel });
presenter.init();

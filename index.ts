import { deleteExactMarker, deleteMarkers, getMarkers, postMarker, updatePos } from "./firebase.config";
let markers: google.maps.Marker[] = []
let MarkerLabel = 0;

async function initMap(): Promise<void> {

    //init map and markers
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { Marker } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    const markersList = await getMarkers()

    const map = new Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 37.39094933041195, lng: -122.02503913145092 },
        zoom: 14,
        mapId: '4504f8b37365c3d0',
    });

    markersList.sort((a, b) => a.next - b.next).forEach(m => {
        const marker = new Marker({
            position: m.location,
            draggable: true,
            label: m.id,
            map: map,
        })

        marker.addListener('dragend', () => { 
            let pos = {
                location: {
                    lat: marker.getPosition()?.lat(),
                    lng: marker.getPosition()?.lng()
                }
            }
            updatePos(pos, m.id.toString())
        });

        marker.addListener('dblclick', () => {
            marker.setMap(null)
            deleteExactMarker(m.id.toString())
        })

        MarkerLabel = Number(m.next)
        markers.push(marker)
    })

    function addMarker(location: google.maps.LatLng, map: google.maps.Map) {
        const marker = new Marker({
            position: location,
            draggable: true,
            label: MarkerLabel.toString(),
            map: map
        })

        marker.addListener('dblclick', () => {
            marker.setMap(null)
            deleteExactMarker(apiMarker.id.toString())
        })

        marker.addListener('dragend', (event) => { 
            let pos = {
                location: {
                    lat: marker.getPosition()?.lat(),
                    lng: marker.getPosition()?.lng()
                }
            }
            updatePos(pos, apiMarker.id.toString())
        });
        const apiMarker = {
            location: {
                lat: location.lat(),
                lng: location.lng(),
            },
            timestamp: new Date,
            next: MarkerLabel + 1,
            id: MarkerLabel
        }

        postMarker(apiMarker, apiMarker.id.toString())
        MarkerLabel++
        markers.push(marker)
    }

    //addMarkerOnMap
    google.maps.event.addListener(map, "click", (event) => {
        addMarker(event.latLng, map);
    });

    //deleteButton
    document.getElementById('deleteButton')?.addEventListener('click', async () => {
        markers.forEach(m => m.setMap(null))
        markers = []
        MarkerLabel = 0
        deleteMarkers()
    })
}

declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;
export { };

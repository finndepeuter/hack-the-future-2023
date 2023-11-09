<script>

    const icons = {
        DANGER: new L.Icon({
            iconUrl: redIcon,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        }),
        PHOTO: new L.Icon({
            iconUrl: greenIcon,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        }),
        EXOTIC: new L.Icon({
            iconUrl: yellowIcon,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }
    export let type;
    const icon = icons[type];
	import { onMount, onDestroy } from 'svelte';
	import L from 'leaflet';
    import redIcon from '$lib/assets/redIcon.png';
    import greenIcon from '$lib/assets/greenIcon.png';
    import yellowIcon from '$lib/assets/yellowIcon.png';

    export let latlng;
    export let title;
	export let map;
	let marker;

	onMount(() => {

		marker = L.marker([latlng.latitude, latlng.longitude], {icon: icon})
            .addTo(map)
            .bindTooltip(title);


	});
	onDestroy(() => {
		marker.remove();
	});
</script>


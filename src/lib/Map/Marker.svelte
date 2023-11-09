<script>
	import { onMount, onDestroy } from 'svelte';
	import L from 'leaflet';
    import icon from '$lib/assets/redIcon.png';
	export let latlng;
    export let title;
	export let map;
	let marker;
    let redIcon;
	onMount(() => {
        redIcon = new L.Icon({
            iconUrl: icon,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
        console.log(redIcon.iconUrl);
		marker = L.marker([latlng.latitude, latlng.longitude], {icon: redIcon})
            .addTo(map)
            .bindTooltip(title);


	});
	onDestroy(() => {
		marker.remove();
	});
</script>


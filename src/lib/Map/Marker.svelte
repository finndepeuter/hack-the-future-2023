<script>
	import { onMount, onDestroy } from 'svelte';
	import L from 'leaflet';
	export let latlng;
    export let title;
	export let map;
	let marker;
	onMount(() => {
		marker = L.marker([latlng.latitude, latlng.longitude])
            .addTo(map)
            .bindTooltip(title);

	});
	onDestroy(() => {
		marker.remove();
	});
</script>

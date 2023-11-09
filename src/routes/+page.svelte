<script>
	const formatter = Intl.DateTimeFormat('nl-BE', { dateStyle: 'medium', timeStyle: 'short' });
	import Map from '$lib/Map/Map.svelte';
	export let data;
	$: sightings = data.sightings.map((s) => ({
		...s,
		timestamp: formatter.format(new Date(s.timestamp))
	}));
	function showData() {
		document.getElementById('form').style.display = "block";
	}

</script>


<div class="container">
	<div class="map-container">
		<Map markers={sightings.map((s) => ({ id: s.id, location: s.location, title: s.title ,type: s.type}))} />
	</div>
	<div class="list-container">
				<a href="/profile">
					<button>
					View Profile
					</button>
				</a>
		<button on:click={showData}>Create new sighting</button>
		<form method="POST" action="?/add" id="form" style="display: none">

			<label for="title">Title</label>
			<input type="text" name="title" id="title"/>
			<br>
			<label for="description">Description</label>
			<input type="text" name="description" id="description"/>

			<br>
			<label for="latitude">Latitude</label>
			<input type="number" name="latitude" id="latitude"/>
			<br>
			<label for="longitude">Longitude</label>
			<input type="number" name="longitude" id="longitude"/>

			<fieldset>
				<legend>Type of sighting:</legend>
				<div>
					<input type="radio" id="DANGER" name="type" value="DANGER" />
					<label for="DANGER">DANGER</label>

					<input type="radio" id="PHOTO" name="type" value="PHOTO" />
					<label for="PHOTO">PHOTO</label>

					<input type="radio" id="EXOTIC" name="type" value="EXOTIC" />
					<label for="EXOTIC">EXOTIC</label>
				</div>
			</fieldset>
			
			<br>

			<button>Save</button>
		</form>
		<h1>Sightings</h1>
		{#each sightings.reverse() as sighting}
			{#if sighting.type === "DANGER"}
			<div class="list-item danger">
				<span>{sighting.timestamp} by {sighting.username}</span>
				<h2>{sighting.title}</h2>
				<span>{sighting.description}</span>
			</div>
				{/if}
			{#if sighting.type === "PHOTO"}
				<div class="list-item photo">
					<span>{sighting.timestamp} by {sighting.username}</span>
					<h2>{sighting.title}</h2>
					<span>{sighting.description}</span>
				</div>
			{/if}
			{#if sighting.type === "EXOTIC"}
				<div class="list-item exotic">
					<span>{sighting.timestamp} by {sighting.username}</span>
					<h2>{sighting.title}</h2>
					<span>{sighting.description}</span>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
	}

	.map-container {
		width: 70%;
		height: 100%;
		
	}

	.list-container {
		width: 30%;
		height: 100%;
		padding: 1rem 2rem;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-left: 1px solid black;
	}

	.list-item {
		border: 1px solid black;
		padding: 1rem;
	}

	label, input, button{
		margin: 8px;
	}
	button{
		padding: 5px;
		width: 100%;

	}

	.danger {
		border: 3px solid red;
		border-radius: 25px;
	}

	.photo {
		border: 3px solid green;
		border-radius: 25px;
	}

	.exotic {
		border: 3px solid gold;
		border-radius: 25px;
	}
</style>


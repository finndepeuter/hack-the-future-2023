<script>
    const formatter = Intl.DateTimeFormat('nl-BE', { dateStyle: 'medium', timeStyle: 'short' });
    import Map from '$lib/Map/Map.svelte';
    export let data;
    $: sightings = data.sightings.map((s) => ({
        ...s,
        timestamp: formatter.format(new Date(s.timestamp))
    }));

</script>

<div class="container">
    <h1>Profile</h1>
    <p>
        Name: NatureExplorer123
    </p>

    <div class="profileSightings ">
        <h1>Sightings</h1>
        {#each sightings as sighting}
            {#if sighting.username == "NatureExplorer123"}
            <div class="list-item">
                <span>{sighting.timestamp} by {sighting.username}</span>
                <h2>{sighting.title}</h2>
                <span>{sighting.description}</span>
            </div>
            {/if}
        {/each}
    </div>
</div>

<style>
    .container{
        padding: 5px;
        padding-left: 2rem;
    }
</style>
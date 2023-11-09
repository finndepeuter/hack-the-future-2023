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
    <div class="profileInformation">
        <p>
            Name: NatureExplorer123
        </p>
    </div>
    <br>
    <h2>Sightings</h2>
    <div class="profileSightings ">
        {#each sightings.reverse() as sighting}
            {#if sighting.username == "NatureExplorer123"}
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

            {/if}
        {/each}
    </div>
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
        padding: 5px;
        padding-left: 2rem;
    }
    .profileSightings{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding:1rem;

    }

    .list-item {
        border: 1px solid black;
        padding: 1rem;
        margin: 1rem;

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
<script lang="ts">
	import MenuItem from '$lib/MenuItem.svelte';
</script>

<div>
	<ul class="menu w-60 menu-lg menu-vertical bg-base-200 content-center rounded-box">
		<li class="menu-title text-lg text-center">Pick a Day</li>
		{#each Array(25) as _, i}
			<li><MenuItem itemLabel="Day {i + 1}" href="/day{i + 1}" /></li>
		{/each}
	</ul>
</div>

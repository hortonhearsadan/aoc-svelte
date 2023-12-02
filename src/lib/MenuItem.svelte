<script lang="ts">
	export let itemLabel: string = 'button';
	export let href: string = '/';
</script>

<div lang="ts">
	<a {href} class="text-secondary w-full text-center">{itemLabel}</a>
</div>

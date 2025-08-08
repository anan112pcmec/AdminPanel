<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
    import Sidebar from './Sidebar.svelte';
	import Page from './+page.svelte';
    import { page } from '$app/state';


	let { children } = $props();
	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<div class="grid grid-rows-[5%_95%] h-screen">
	<div class="grid grid-cols-[20%_60%_20%]">
		<div>Logo</div>
		<div>
			{#if page.url.href == "http://localhost:5173/users"} 
			<div>
				mantap
			</div>
			{:else if page.url.href}...{/if}
		</div>
		<div>Badge</div>
	</div>
	<div class="grid grid-cols-[13%_87%]">
		<div class="kolom1 mt-5">
			<Sidebar/>
		</div>
		<div class="mt-5">{@render children?.()}</div>
	</div>
</div>


	


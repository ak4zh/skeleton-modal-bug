<script>
	import { modalStore } from "@skeletonlabs/skeleton";
    import { superForm } from 'sveltekit-superforms/client';

    const { form, enhance, errors } = superForm({}, {
        onUpdate: ({ form }) => {
			if (form.valid) modalStore.close()
		}
    });
</script>

<form class="flex gap-4 card" method="POST" use:enhance>
    <input class="input" name="name" bind:value={$form.name}/> 
    <button class="btn variant-priamey-warning">Submit</button>
</form>
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
    name: z.string()
});

export const load = async () => {
    const form = await superValidate(schema);
    return { form };
};

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, schema);
        return { form }
    }
}

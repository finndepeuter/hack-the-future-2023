import { randomUUID } from 'crypto';
import { db } from '../lib/db';

export const ssr = false;

export async function load() {
	const { sightings } = await db.getData('sightings');
	return {
		sightings
	};
}

export const actions = {
	add: async ({ request }) => {
		const formData = await request.formData();
		await db.push(
			'/sightings[]',
			{
				id: randomUUID(),
				username: 'NatureExplorer123',
				location: {
					latitude: formData.get('latitude'),
					longitude: formData.get('longitude')
				},
				timestamp: new Date().toISOString(),
				title: formData.get('title'),
				description: formData.get('description')
			},
			true
		);
	}
};

import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

type ResponseError = [Error, null];
type ResponseSuccess<T> = [null, T];
type Response<T> = ResponseError | ResponseSuccess<T>;

/**
 * Just some fake validation function
 */
function validate<T>(data: unknown): Response<T> {
	if (data) {
		return [null, data as T];
	}
	return [new Error(''), null];
}

// The return from the function is { numberProp: number; stringProp: string }
export const load = (async () => {
	const [responseError, success] = validate<{ numberProp: number; stringProp: string }>({
		numberProp: 1,
		stringProp: 'test'
	});

	if (responseError) {
		throw error(400, { message: 'test' });
	}

	return success;
}) satisfies PageServerLoad;

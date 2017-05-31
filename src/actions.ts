export const REQUEST_GISTS = 'REQUEST_GISTS';
export const RECEIVED_GISTS = 'RECEIVED_GISTS';

export const REQUEST_ONE_GIST = 'REQUEST_ONE_GIST';
export const RECEIVED_ONE_GIST = 'RECEIVED_ONE_GIST';


export function loadGists(user: string) {
    return {
        type: REQUEST_GISTS,
    }
}
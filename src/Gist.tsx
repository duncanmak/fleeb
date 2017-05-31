import * as React from 'react';

interface Gist {created_at: string, owner: { login: string }}

export const Gist = ({created_at, owner}: Gist) =>
    <div><h2>{owner.login}</h2> {created_at}</div>;

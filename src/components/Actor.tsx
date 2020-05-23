import React from 'react'
import { StyledActor } from './styled/StyledActor';
import { Cast } from '../types/tmdb';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

const Actor = (props: {actor: Cast}) => {
    const {actor} = props;
    return (
        <StyledActor>
            <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`} alt='actorThumb'/>
            <span className="actor-name">{actor.name}</span>
            <span className="actor-character">{actor.character}</span>

        </StyledActor>
    )
}

export default Actor


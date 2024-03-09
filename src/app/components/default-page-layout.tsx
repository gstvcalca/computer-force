"use client"

import styled from "styled-components";

export const DefaultPageLayout = styled.div`
    padding: 8em 2em 0 2em;
    min-height: 90vh;
    background-color: var(--bg-primary);

    @media (min-width: ${props => props.theme.TabletBreakpoint}){
        padding: 5em 4em 0 7em;
    }
`

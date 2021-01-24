import React, { ReactElement } from 'react';
import './style.css';

interface Props {
Direction:string,
OnClick:()=>void,
ArrowType:string,
}

export default function Arrow(props: Props): ReactElement {
    return (
        <div 
		className={ `slide-arrow ${props.Direction}` } 
		onClick={ props.OnClick }>
		{ props.ArrowType } 
	</div>
    )
}

import React, { ReactElement } from 'react'

interface Props {
    BtnName:string,
    ClassName?:string,
}

export default function CustomButton(props: Props): ReactElement {
    return (
        <button className={props.ClassName}>
        {props.BtnName}
        </button>
  )
}
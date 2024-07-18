/* eslint-disable react/prop-types */
export function Post(props) {
    return (
        <div>
            <h1>{props.author} + {props.content}</h1>
        </div>
    )
}
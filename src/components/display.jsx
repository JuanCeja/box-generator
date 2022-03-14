import React from 'react'

const Display = (props) => {


    return (
        <div>
            <fieldset>
            {JSON.stringify(props.colors)}
                <legend>Display</legend>
                    
                    <div>
                        {
                            props.colors.map((color, i) => {
                                console.log(color)
                                return <li key = {i}
                                style={{
                                    backgroundColor: color,
                                    height: '100px',
                                    width: '100px'
                                }}></li>
                            })
                        }
                    </div>
            </fieldset>

        </div>
    )
}

export default Display
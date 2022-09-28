import React from 'react'

// function ForwardRefsDemo() {
//   return (
//     <div>
//         <input type = 'text' />
//     </div>
//   )
// }

const ForwardRefsDemo = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type='text' ref = {ref}/>
        </div>
    )

}
)

export default ForwardRefsDemo
import React from 'react';

const ContainerWrapper = <P extends object>(Component:React.ComponentType<P>): React.ComponentType<P>=>{
  return (props) =>(
    <div className='container-fluid'>
      <Component {...props}>
        {/* any children could go here*/ }
      </Component>

    </div>
  );
  }

  export default ContainerWrapper;
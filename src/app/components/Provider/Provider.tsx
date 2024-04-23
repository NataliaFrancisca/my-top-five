'use client';

import { SessionProvider } from 'next-auth/react';

const Provider = (props: {children: any}) => {

    return(
        <SessionProvider basePath='/api/auth'>
            {props.children}
        </SessionProvider>
    )
}

export default Provider;
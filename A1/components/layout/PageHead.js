import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
        
            <Head>
                <title>
                    {headTitle ? headTitle : "A1-Flash News"}
                </title>
            </Head>
        </>
    )
}

export default PageHead
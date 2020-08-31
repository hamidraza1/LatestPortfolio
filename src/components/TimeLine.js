import React from 'react';
import Layout from './Layout';

const TimeLine = () => {
    const data = [
        {
            "title":"Started learning Html/css",
            "date":"Feb 20, 2020",
            "svg":"undraw_static_website_0107"
        },
        {
            "title":"Started learning Html/css",
            "date":"Feb 20, 2020",
            "svg":"undraw_static_website_0107"
        }
    ]
    return ( <Layout>
        <div className="w-full flex-auto bg-red-500">hi</div>
    </Layout> );
}
 
export default TimeLine;
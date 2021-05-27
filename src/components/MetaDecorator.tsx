import React from "react";
import {Helmet} from "react-helmet";

type MetaDecoratorProps={
    title:string,
    description:string,
}
const MetaDecorator: React.FC<MetaDecoratorProps> = ({title,description}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Helmet>
    )

}
export default MetaDecorator;
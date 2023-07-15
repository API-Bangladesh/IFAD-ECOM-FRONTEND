import React, {Fragment} from 'react'
import Products from '../../../components/Modules/products/Products'
import TopButton from '../../../components/Modules/topbutton/TopButton'
import {useRouter} from "next/router";

const CategoryPage = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <section>
            <Products categoryId={id}/>
            <TopButton/>
        </section>
    )
}

export default CategoryPage;
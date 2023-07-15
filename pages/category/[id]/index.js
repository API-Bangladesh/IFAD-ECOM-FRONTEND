import React, {Fragment} from 'react'
import Products from '../../../components/Modules/products/Products'
import TopButton from '../../../components/Modules/topbutton/TopButton'

const CategoryPage = () => {
    return (
        <Fragment>
            <section>
                <Products/>
                <TopButton/>
            </section>
        </Fragment>
    )
}

export default CategoryPage;
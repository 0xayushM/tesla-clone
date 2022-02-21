import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title = "Model S"
                description = "Order Online for Touchless Delivery"
                bgimage = "model-s.jpg"
                leftbtn = "Custom Order"
                rgtbtn = "Existing Inventory"
            />
            <Section
                title = "Model 3"
                description = "Order Online for Touchless Delivery"
                bgimage = "model-3.jpg"
                leftbtn = "Custom Order"
                rgtbtn = "Existing Inventory"
            />
            <Section
                title = "Model X"
                description = "Order Online for Touchless Delivery"
                bgimage = "model-x.jpg"
                leftbtn = "Custom Order"
                rgtbtn = "Existing Inventory"
            />
            <Section
                title = "Model Y"
                description = "Order Online for Touchless Delivery"
                bgimage = "model-y.jpg"
                leftbtn = "Custom Order"
                rgtbtn = "Existing Inventory"
            />
            <Section
                title = "Lowest Cost Solar Panels in America"
                description = "Money Back Guarantee"
                bgimage = "solar-panel.jpg"
                leftbtn = "Order now"
                rgtbtn = "Learn more"
            />
            <Section
                title = "Solar for New Roofs"
                description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                bgimage = "solar-roof.jpg"
                leftbtn = "Order now"
                rgtbtn = "Learn more"
            />
            <Section
                title = "Accessories"
                description = ""
                bgimage = "accessories.jpg"
                leftbtn = "Shop now"
            />
        </Container>
    )
}
export default Home

const Container = styled.div`
    height: 100vh;

`



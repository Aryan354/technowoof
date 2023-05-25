import React, { Component } from 'react'
import Title from "./Title";
import { MdRateReview, MdPriceCheck } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { TiGroup } from "react-icons/ti";
export default class Services extends Component {
    state={
        services: [
            {
                icon: <MdRateReview />,
                title: "Unaffiliated Reviews",
                info: "We are independent and we act like it. Unaffiliated, genuine and user-centric reviews only."
            },
            {
                icon: <GiSandsOfTime />,
                title: "Performance-Over-Time",
                info: "Its not all glitter and shine for us. We pay attention to the nitty-gritty. How gadgets hold up after rigorous useage for a long time. "
            },
            {
                icon: <MdPriceCheck />,
                title: "Direction to Best Prices",
                info: "We don't leave you hanging after you've made your selection. Links and dircdtions to the best available current prices. We are with you. "
            },
            {
                icon: < TiGroup/>,
                title: "Community",
                info: "We are as strong as our community of enthusiats. Forums for discussions and healthy debates. We are all in this together."
            }
        ]
    };
    
    render() {
        return (
            <section className= "services">
            <Title title= "Why Us?" />
            <div className= "services-center">
            {this.state.services.map((item, index) => {
                return (
                <article key={index} className= "service">
                    <span>  {item.icon} </span>
                    <h6>  {item.title} </h6>
                    <p> {item.info} </p>
                </article>
                )
                
            })}
            </div>
            </section>
        )
    }
}

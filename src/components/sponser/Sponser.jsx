import React, { Fragment } from "react";
import "./Sponser.css"

const Sponsored = ()=>{
    return(
        <Fragment>
            <section className="sponsored">
                <h5>sponsored</h5>
                <div className="box-sponsored">
                    <img src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" alt=""/>
                    <div className="text-sponsored">
                        <p>Find an easier way to work with data with help from our experts</p>
                        <a href="https://www.mongodb.com/home">mongodb.com</a>
                    </div>
                </div>
                <div className="box-sponsored">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbA54n-VGjMV3fJ8UOsiukFkvBPcRWBH6jkXHKnppDrEOD0gXmLUgtI2oRbmcy-F01Z8E&usqp=CAU" alt=""/>
                    <div className="text-sponsored">
                        <p>Experience an all-new generation of incredible</p>
                        <a href="https://www.playstation.com/en-us/">playstation.com</a>
                    </div>
                </div>
                <div className="box-sponsored">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirHxQzoWPUFgJlbSq2gVRsXZjZ_cxygZL7OKlpKk5DI_rWHQf4gGOFh_BKjKax2wb7OY&usqp=CAU" alt=""/>
                    <div className="text-sponsored">
                        <p>Unite remote teams with Adobe Document Cloud for business.</p>
                        <a href="https://adobe.com/">adobe.com</a>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Sponsored
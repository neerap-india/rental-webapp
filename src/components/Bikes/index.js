import React from "react";
import { Card } from 'antd';
import SvgIcon from "../../common/SvgIcon";
import './styles.scss';
const { Meta } = Card;

class Bikes extends React.Component {
	render() {
		return (
            <div className="cards">
                {this.props.data.length ? this.props.data.map((data) => {
                    return <div className="card"> <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={data.img} />}
                >
                <Meta title={data.brand.toUpperCase() +" "+data.model.toUpperCase()} description={data.price + " / day"} />
                </Card></div>
                }) : <div style={{display: "contents"}}><SvgIcon
                src= "404.svg"
                width="50%"
                height="50%"
               /><p>Something went wrong. Please try after sometime, we regret the inconvience caused</p></div>
               }             
             </div>
		);
	}
}

export default Bikes;

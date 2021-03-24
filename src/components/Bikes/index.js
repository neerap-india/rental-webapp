import React from "react";
import { Card } from 'antd';
import './styles.scss';
const { Meta } = Card;

class Bikes extends React.Component {
	render() {
		return (
            <div className="cards">
                {this.props.data.map((data) => {
                    return <div className="card"> <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={data.img} />}
                >
                <Meta title={data.brand.toUpperCase() +" "+data.model.toUpperCase()} description={data.price + " / day"} />
                </Card></div>
                })}               
                
            </div>
		);
	}
}

export default Bikes;

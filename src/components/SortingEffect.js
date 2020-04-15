import React from 'react';
import {
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import Button from '@material-ui/core/Button';
class SortingEffect extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
        },
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
        },
      ],
    };
    this.changedata = this.changedata.bind(this);
  }
  changedata(e) {
    e.preventDefault();
    this.setState({
      data: [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
        },
      ],
    });
    console.log('click!');
  }
  render() {
    return (
      <div>
        <BarChart width={730} height={250} data={this.state.data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='pv' fill='#8884d8' />
          <Bar dataKey='uv' fill='#82ca9d' />
        </BarChart>
        <Button onClick={(e) => this.changedata(e)}>Hello World</Button>
      </div>
    );
  }
}

export default SortingEffect;

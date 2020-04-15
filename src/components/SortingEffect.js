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

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
class SortingEffect extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: '4000',
          uv: 4000,
        },
        {
          name: '3000',
          uv: 3000,
        },
        {
          name: '2000',
          uv: 2000,
        },
        {
          name: '1000',
          uv: 1000,
        },
        {
          name: '5000',
          uv: 8000,
        },
        {
          name: '5000',
          uv: 400,
        },
        {
          name: '5000',
          uv: 2323,
        },
        {
          name: '5000',
          uv: 4222,
        },
        {
          name: '5000',
          uv: 900,
        },
      ],
    };
    this.changedata = this.changedata.bind(this);
    this.dataChanged = this.dataChanged.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
  }

  async bubbleSort(array) {
    for (let i = 0; i < array.length; ++i) {
      for (let j = i; j < array.length - 1; ++j) {
        if (array[i].uv > array[j + 1].uv) {
          let temp = array[i].uv;
          array[i].uv = array[j + 1].uv;
          array[i].name = '' + array[j + 1].uv;
          array[j + 1].uv = temp;
          array[j + 1].name = '' + temp;
          this.setState({ data: Array.from(array) });
          console.log('changing!', i);
          await sleep(2000);
        }
      }
    }
  }
  dataChanged(data) {
    this.setState({
      data: data,
    });
    console.log('the state', this.state.data);
  }
  changedata(e) {
    e.preventDefault();
    let array = this.state.data;
    this.bubbleSort(array);
    // this.dataChanged(array);
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
          <Bar dataKey='uv' fill='#8884d8' />
        </BarChart>
        <Button onClick={(e) => this.changedata(e)}>Hello World</Button>
      </div>
    );
  }
}

export default SortingEffect;

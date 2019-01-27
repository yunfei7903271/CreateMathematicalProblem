import React, { Component } from 'react';
import { InputNumber, Select, Button, Table } from 'antd';
import 'antd/dist/antd.css';

const Option = Select.Option;
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    render: (index,name)=> <a href="javascript:;">{index}</a>,
  },
  {
    title: '计算题',
    dataIndex: 'problem',
    key: 'problem',
  },
  {
    title: '数量',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: text => <a href="javascript:;">移除</a>,
  },
]
let problemArray=[];
export class Home extends Component {
  static displayName = Home.name;

  componentWillMount() {
    this.state = {
      array: [],
      single: {
        index:0,
        num1: 0,
        num2: 0,
        operation: 'add',
        count: 0
      }
    }
  }

  inputNumber_1_OnChange = (value) => {
    let data =Object.assign({}, this.state.single, { num1: value,index:problemArray.length })
    this.setState({
      single: data
    })
  }

  inputNumber_2_OnChange = (value) => {
    let data= Object.assign({}, this.state.single, { num2: value,index:problemArray.length })
    this.setState({
      single:data
    })
  }

  operation_OnChange = (value) => {
    let data =Object.assign({}, this.state.single, { operation: value ,index:problemArray.length})
    this.setState({
      single: data
    })
  }

  count_OnChange = (value) => {
    let data =Object.assign({}, this.state.single, { count: value ,index:problemArray.length})
    this.setState({
      single: data
    })
  }

  btn_OnClick = () => {
    problemArray.push(this.state.single);
    this.setState({
      array:problemArray
    })
    console.log(this.state.single);
    console.log(this.state.array);
  }

  render() {
    return (
      <div>
        <h1>数学计算题自动生成</h1>
        <div>
          <h3>配置100条计算题</h3>
          <p>
            <InputNumber size="small" min={1} max={100} defaultValue={1} onChange={this.inputNumber_1_OnChange} />
            <span>位数</span>
            <Select size="small" defaultValue="add" onChange={this.operation_OnChange}>
              <Option value="add">加</Option>
              <Option value="subtract">减</Option>
              <Option value="multiply">乘</Option>
              <Option value="divide">除</Option>
            </Select>
            <InputNumber size="small" min={1} max={100} defaultValue={1} onChange={this.inputNumber_2_OnChange} />
            <span>位数</span>
            <span style={{ paddingLeft: '20px' }}>生成:</span>
            <InputNumber size="small" min={1} max={100} defaultValue={1} onChange={this.count_OnChange} />
            <span>条</span>
            <Button type="primary" onClick={this.btn_OnClick}>添加</Button>
          </p>
        </div>
        <div>
        <Table columns={columns} dataSource={this.state.array} ></Table>
        </div>
      </div>
    );
  }
}

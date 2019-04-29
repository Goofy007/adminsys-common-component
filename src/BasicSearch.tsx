import React from 'react'
import { Input, Select, Form, Button, Checkbox, Radio } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;

const data = [
    {
        type: "text",
        name: "姓名"
    },
    {
        type: "select",
        name: "城市",
        selectList: [{ key: "北京", value: 1 }, { key: "上海", value: 2 }]
    }
]

class BasicSearchForm extends React.Component<any, any> {
    renderFormItem(item: { type: string, name: string, selectList?: Array<object> }) {
        let { getFieldDecorator } = this.props.form;
        if (item.type === "text") {
            return <Form.Item label={item.name} key={item.name}>
                {getFieldDecorator('name', {

                })(
                    <Input />
                )}
            </Form.Item >
        }
        if (item.type === "select") {
            return <Form.Item label={item.name} key={item.name}>
                {getFieldDecorator('city', {

                })(
                    <Select>
                        {
                            item.selectList &&
                            item.selectList.map((selectOption: any) => {
                                return <Option key={selectOption.value} value={selectOption.value}>{selectOption.key}</Option>
                            })

                        }
                    </Select>
                )}
            </Form.Item>
        }
    }

    handleSearch = () => {
        let values = this.props.form.getFieldsValue()
        this.props.onSearch(values)
    }

    handleReset = () => {
        this.props.form.resetFields()
        this.props.onReset()
    }
    render() {
        return (
            <div>
                <Form>
                    {data.map((item: any) => {
                        return this.renderFormItem(item)
                    })}
                </Form>
                <div>
                    <Button type="primary" onClick={this.handleSearch}>查询</Button>
                    <Button onClick={this.handleReset}>重置</Button>
                </div>
            </div>
        )
    }
}


const WrappedBasicSearchForm = Form.create()(BasicSearchForm);

export default WrappedBasicSearchForm;

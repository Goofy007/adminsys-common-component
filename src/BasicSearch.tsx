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
            return <Form.Item label={item.name}>
                {getFieldDecorator('name', {

                })(
                    <Input />
                )}
            </Form.Item >
        }
        if (item.type === "select") {
            return <Form.Item label={item.name}>
                {getFieldDecorator('city', {

                })(
                    <Select>
                        {
                            item.selectList &&
                            item.selectList.map((selectOption: any) => {
                                return <Option value={selectOption.value}>{selectOption.key}</Option>
                            })

                        }
                    </Select>
                )}
            </Form.Item>
        }
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
                    <Button type="primary" onClick={this.props.onSearch}>查询</Button>
                    <Button onClick={this.props.onReset}>重置</Button>
                </div>
            </div>
        )
    }
}


const WrappedBasicSearchForm = Form.create()(BasicSearchForm);

export default WrappedBasicSearchForm;

import React from 'react'
import { Input, Select, Form, Button, Checkbox, Radio } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;

interface IBasicSearchProps {
    data: Array<object>,
    onSearch: (values: object) => {},
    form: any
}

interface SearchItemProps {
    type: string,
    name: string,
    width: number,
    initialValue: string | number
    selectList?: Array<object>
}
class BasicSearchForm extends React.Component<IBasicSearchProps, any> {
    renderFormItem(item: SearchItemProps) {
        let { getFieldDecorator } = this.props.form;
        if (item.type === "text") {
            return <Form.Item label={item.name} key={item.name}>
                {getFieldDecorator('name', {
                    initialValue: item.initialValue
                })(
                    <Input style={{ width: item.width }} />
                )}
            </Form.Item >
        }
        if (item.type === "select") {
            return <Form.Item label={item.name} key={item.name}>
                {getFieldDecorator('city', {
                    initialValue: item.initialValue
                })(
                    <Select style={{ width: item.width }}>
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
    }
    render() {
        return (
            <div>
                <Form layout="inline">
                    {this.props.data.map((item: any) => {
                        return this.renderFormItem(item)
                    })}
                    <Form.Item><Button type="primary" onClick={this.handleSearch}>查询</Button></Form.Item>
                    <Form.Item><Button onClick={this.handleReset}>重置</Button></Form.Item>
                </Form>
            </div>
        )
    }
}

const WrappedBasicSearchForm = Form.create()(BasicSearchForm);

export default WrappedBasicSearchForm;

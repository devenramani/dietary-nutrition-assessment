import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Form, Input, Select, Card, Typography, InputNumber, Radio, Space, Divider } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const App = () => {

  const [form] = Form.useForm();

  const [showResults, setShowResults] = React.useState(false)

  const totalDietNutriBalScoreRes = (nutriBalScore) => {
    if (nutriBalScore >= 10 && nutriBalScore <= 20) { return "Concerning (to seek diet counselling immediately)"; }
    else if (nutriBalScore >= 21 && nutriBalScore <= 30) { return "Can be better (to seek diet counselling and monitor dietary nutrition balance)"; }
    else if (nutriBalScore >= 31 && nutriBalScore <= 40) { return "Satisfactory (to self-monitor balanced diet)"; }
  }

  const carbFatScoreRes = (carbFatScore) => {
    if (carbFatScore >= 3 && carbFatScore <= 6) { return "Concerning (to seek diet counselling immediately)"; }
    else if (carbFatScore >= 7 && carbFatScore <= 9) { return "Can be better (reduce refined/packaged carbs and sugar; increase fiber)"; }
    else if (carbFatScore >= 10 && carbFatScore <= 12) { return "Satisfactory (to self-monitor balanced diet)"; }
  }

  const protienScoreRes = (protienScore) => {
    if (protienScore >= 3 && protienScore <= 6) { return "Concerning (to seek diet counselling immediately)"; }
    else if (protienScore >= 7 && protienScore <= 9) { return "Can be better (increase dals, soy and for nonvegetarians : eggs, chicken, fish)"; }
    else if (protienScore >= 10 && protienScore <= 12) { return "Satisfactory (to self-monitor balanced diet)"; }
  }

  const microNutrientScoreRes = (microNutrientScore) => {
    if (microNutrientScore >= 4 && microNutrientScore <= 8) { return "Concerning (to seek diet counselling immediately)"; }
    else if (microNutrientScore >= 9 && microNutrientScore <= 12) { return "Can be better (increase green vegetables, fruits and milk/curd in diet)"; }
    else if (microNutrientScore >= 13 && microNutrientScore <= 16) { return "Satisfactory (to self-monitor balanced diet)"; }
  }

  const waterScoreRes = (waterScore) => {
    if (waterScore < 3) { return "Increase water intake"; }
    else if (waterScore >= 3) { return "Satisfactory (to maintain at least 1.5 L water intake daily)"; }
  }

  const Results = () => (
    <div id="results" className="search-results">
      Some Results
    </div>
  )

  const onFinish = (values) => {
    console.log(values);

    let nutriBalScore = values.Q1 + values.Q2 + values.Q3 + values.Q4 + values.Q5 + values.Q6 + values.Q7 + values.Q8 + values.Q9 + values.Q10;
    let carbFatScore = values.Q1 + values.Q2 + values.Q3;
    let protienScore = values.Q4 + values.Q5 + values.Q6;
    let microNutrientScore = values.Q5 + values.Q6 + values.Q7 + values.Q8;
    let waterScore = values.Q9;

    console.log(nutriBalScore);
    console.log(carbFatScore);
    console.log(protienScore);
    console.log(microNutrientScore);
    console.log(waterScore);


    console.log(totalDietNutriBalScoreRes(nutriBalScore));
    console.log(carbFatScoreRes(carbFatScore));
    console.log(protienScoreRes(protienScore));
    console.log(microNutrientScoreRes(microNutrientScore));
    console.log(waterScoreRes(waterScore));

    setShowResults(true)
  };

  const onReset = () => {
    setShowResults(false)
    form.resetFields();
    
  };



  return (
    <div style={{ padding: 16, margin: 'auto' }}>
      <Typography variant="h4" align="center" component="h2" >
        Dietary Nutrition Assessment
      </Typography>

      <Card bordered={true} style={{ width: 'auto', }}>

        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} size="large" layout="horizontal">

          <Form.Item
            name="Name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name={['Age']} label="Age" rules={[{ type: 'number', min: 0, max: 99, required: true }]}>
            <InputNumber />
          </Form.Item>

          <Form.Item name="Gender" label="Gender" rules={[{ required: true }]}>
            <Select placeholder="Select a option and change input text above" allowClear>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Divider />

          <div id="questions">

            <Typography>
              <Title level={4}>Question 1.</Title>
              How often do you eat packaged foods, deep fried foods, or refined flour (maida) foods like pizza, pasta, fries/chips,
              bhajiya/pakodas, burger, noodles, biscuits, cakes, sweets, etc.?
            </Typography>
            <Form.Item name={['Q1']} rules={[{ required: true }]}>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>Regularly (5 days or more/week)</Radio>
                  <Radio value={2}>Sometimes (2-4 times/week)</Radio>
                  <Radio value={3}>Occasionally (not more than once a week)</Radio>
                  <Radio value={4}>No or rarely (not more than twice a month)</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Divider />

            <Typography>
              <Title level={4}>Question 2.</Title>
              Do you take whole grains (multigrain/brown bread, brown rice, whole wheat chapatis) in your meals?
            </Typography>
            <Form.Item name={['Q2']} rules={[{ required: true }]}>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>No or rarely (not more than twice a month)</Radio>
                  <Radio value={2}>Occasionally (not more than once a week)</Radio>
                  <Radio value={3}>Sometimes (2-4 times/week)</Radio>
                  <Radio value={4}>Regularly (5 days or more/week)</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Divider />

            <Typography>
              <Title level={4}>Question 3.</Title>
              How many tea spoons of sugar do you take in a day as part of beverages (tea/coffee/milk) or soft drinks/juices?
              (For 1 glass of readymade fruit juice count 4 teaspoons; For 1 bottle 200ml of cola/soft drink count 6 teaspoons).
            </Typography>
            <Form.Item name={['Q3']} rules={[{ required: true }]}>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>10 teaspoons or more</Radio>
                  <Radio value={2}>6-9 teaspoons</Radio>
                  <Radio value={3}>3-5 teaspoons</Radio>
                  <Radio value={4}>less than 3 teaspoons</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Divider />

            <Typography>
              <Title level={4}>Question 4.</Title>
              Do you take pulses (daals), or soyabean in your diet?
            </Typography>
            <Form.Item name={['Q4']} rules={[{ required: true }]}>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>No or rarely (not more than twice a month)</Radio>
                  <Radio value={2}>Occasionally (not more than once a week)</Radio>
                  <Radio value={3}>Sometimes (2-4 times/week)</Radio>
                  <Radio value={4}>Regularly (5 days or more/week)</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Divider />

            <Typography>
              <Title level={4}>Question 5.</Title>
              Do you eat non-vegetarian food?
            </Typography>
            <Form.Item name={['Q5']} rules={[{ required: true }]}>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>No, I am Vegetarian</Radio>
                  <Radio value={2}>Only eat eggs</Radio>
                  <Radio value={3}>Yes, I eat meat/chicken and eggs</Radio>
                  <Radio value={4}>Yes, I eat meat/chicken, fish and eggs</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Divider />

            <Typography>
              <Title level={4}>Question 6.</Title>
              Do you take dairy products like milk, cheese, curd or paneer (tofu) in your diet?
            </Typography>
            <Form.Item name={['Q6']} rules={[{ required: true }]}>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>No (vegan/intolerance) or rarely (not more than twice a month)</Radio>
                  <Radio value={2}>Occasionally (not more than once a week)</Radio>
                  <Radio value={3}>Sometimes (2-3 times/week)</Radio>
                  <Radio value={4}>Regularly (5 days or more/week)</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Divider />

            <Typography>
              <Title level={4}>Question 7.</Title>
              How often do you eat green vegetables and salads?
            </Typography>
            <Form.Item name={['Q7']} rules={[{ required: true }]}>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>No or rarely (not more than twice a month)</Radio>
                  <Radio value={2}>Occasionally (not more than once a week)</Radio>
                  <Radio value={3}>Sometimes (2-4 times/week)</Radio>
                  <Radio value={4}>Regularly (5 days or more/week)</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Divider />

            <Typography>
              <Title level={4}>Question 8.</Title>
              How often do you eat fruits?
            </Typography>
            <Form.Item name={['Q8']} rules={[{ required: true }]}>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>No or rarely (not more than twice a month)</Radio>
                  <Radio value={2}>Occasionally (not more than once a week)</Radio>
                  <Radio value={3}>Sometimes (2-4 times/week)</Radio>
                  <Radio value={4}>Regularly (5 days or more/week)</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Divider />

            <Typography>
              <Title level={4}>Question 9.</Title>
              How many glasses of water do you drink in a day? (One glass is 200-250ml)
            </Typography>
            <Form.Item name={['Q9']} rules={[{ required: true }]}>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>Less than 6</Radio>
                  <Radio value={2}>6 to 9</Radio>
                  <Radio value={3}>10 to 12</Radio>
                  <Radio value={4}>More than 12</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Divider />

            <Typography>
              <Title level={4}>Question 10.</Title>
              Do you have physical exercise like brisk walking, cycling, swimming, yoga, aerobics etc. for at least half hour.
            </Typography>

            <Form.Item name={['Q10']} rules={[{ required: true }]}>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>No or rarely (not more than twice a month)</Radio>
                  <Radio value={2}>Occasionally (not more than once a week)</Radio>
                  <Radio value={3}>Sometimes (2-4 times/week)</Radio>
                  <Radio value={4}>Regularly (5 days or more/week)</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Divider />

          </div>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>

        </Form>

        {showResults ? <Results /> : null}
      </Card>

    </div>
  );
};

export default App;
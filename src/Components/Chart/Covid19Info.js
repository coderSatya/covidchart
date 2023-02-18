import React from "react";
import covid19info from "../Images/covid19info.png";
import { Row, Col, Collapse } from "antd";

import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Covid19Info = () => {
  return (
    <>
      <div
        style={{ marginLeft: "250px", marginBottom: "50px", marginTop: "5px" }}
      >
        <img src={covid19info} alt="omnicorn" width="900px" height="300px" />
      </div>
      <Row justify="space-around">
        <Col span={9}>
          {/* <div style={{ marginLeft: "200px" }}> */}
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            className="site-collapse-custom-collapse"
          >
            <Panel
              header="What are signs and symptoms of the coronavirus disease?"
              key="1"
              className="site-collapse-custom-panel"
            >
              <p>
                Signs and symptoms include respiratory symptoms and include
                fever, cough and shortness of breath. In more severe cases,
                infection can cause pneumonia, severe acute respiratory syndrome
                and sometimes death. Standard recommendations to prevent the
                spread of COVID-19 include frequent cleaning of hands using
                alcohol-based hand rub or soap and water; covering the nose and
                mouth with a flexed elbow or disposable tissue when coughing and
                sneezing; and avoiding close contact with anyone that has a
                fever and cough.
              </p>
            </Panel>
            <Panel
              header="What are some atypical symptoms of COVID-19?"
              key="2"
              className="site-collapse-custom-panel"
            >
              <p>
                Some people may develop symptoms that are not typical to
                COVID-19. These include symptoms such as loss of smell, loss of
                taste, and diarrhea. This means that some of the people placed
                in the category of asymptomatic carriers could be shifted to the
                mildly symptomatic category keeping these symptoms in mind.
              </p>
            </Panel>
            <Panel
              header="Why do some people get fever after taking COVID-19 vaccine?"
              key="3"
              className="site-collapse-custom-panel"
            >
              <p>
                This immune response is triggered by an antigen present in the
                vaccine. The blood flow in the body is increased to increase the
                circulation of the defensive immune cells in the body. This can
                lead to an increase in body temperature, which can consequently
                show up as fever.
              </p>
            </Panel>
          </Collapse>
          {/* </div> */}
        </Col>

        <Col span={9}>
          {/* <div style={{ marginLeft: "400px" }}> */}
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            className="site-collapse-custom-collapse"
          >
            <Panel
              header="In what conditions does COVID-19 survive the longest?"
              key="4"
              className="site-collapse-custom-panel"
            >
              <p>
                Coronaviruses die very quickly when exposed to the UV light in
                sunlight. Like other enveloped viruses, SARS-CoV-2 survives
                longest when the temperature is at room temperature or lower,
                and when the relative humidity is low (50%).
              </p>
            </Panel>
            <Panel
              header="What causes COVID-19?"
              key="5"
              className="site-collapse-custom-panel"
            >
              <p>
                COVID-19 is caused by infection with the severe acute
                respiratory syndrome coronavirus 2 (SARS-CoV-2) virus strain.
              </p>
            </Panel>
            <Panel
              header="What are some possible complications after recovering from COVID-19?"
              key="6"
              className="site-collapse-custom-panel"
            >
              <p>
                Recovered patients after acute COVID-19 illness may continue to
                experience various signs and symptoms including fatigue, body
                ache, cough, sore throat, difficulty in breathing, etc.
              </p>
            </Panel>
          </Collapse>
          {/* </div> */}
        </Col>
      </Row>
    </>
  );
};

export default Covid19Info;

import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa';
import { PopupboxContainer, PopupboxManager } from 'react-popupbox';
import * as Yup from 'yup';

import api from '../../services/api';

import { Wrapper, FormContainer, ToolList, LightBoxWrapper } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Informar nome da ferramenta'),
  link: Yup.string().required('Informar link da ferramenta'),
  description: Yup.string().required('Forneça descrição da ferramenta'),
  tags: Yup.string().required('Informe tags para a ferramenta'),
});

export default class ToolsList extends Component {
  state = {
    toolList: [],
  };

  async componentDidMount() {
    const { toolList } = this.state;

    const response = await api.get('/tools');

    this.setState({
      toolList: [...toolList, response.data],
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.lightBox();
  };

  addTool = (data) => {
    const { toolname, toollink, tooldescription, tooltags } = data;
    const tagArray = tooltags.split(',');

    const listTags = tagArray.map((tag) => tag.trim());

    const tool = api.post('/tools', {
      title: toolname,
      link: toollink,
      description: tooldescription,
      tags: listTags,
    });

    // console.log(data);
  };

  lightBox() {
    this.content = (
      <LightBoxWrapper>
        <span>
          <FaPlus />
          Add New Tool
        </span>

        <Form schema={schema} onSubmit={this.addTool}>
          <span className="name"> Tool Name</span>
          <Input name="toolname" id="toolname" />

          <span className="link"> Tool Link</span>
          <Input name="toollink" id="toollink" />

          <span className="description"> Tool Description</span>
          <Input multiline name="tooldescription" id="tooldescription" />

          <span className="tags"> Tags </span>
          <Input name="tooltags" id="tooltags" />

          <button type="submit">Add Tool</button>
        </Form>
      </LightBoxWrapper>
    );

    PopupboxManager.open({ content: this.content });
  }

  render() {
    const { toolList } = this.state;
    return (
      <>
        <Wrapper>
          <FormContainer>
            <form>
              <div className="input-container">
                <FaSearch />
                <input
                  className="search"
                  type="text"
                  placeholder="Search tool"
                />

                <label htmlFor="searchtags">
                  <input className="boxcheck" type="checkbox" id="searchtags" />
                  <span>search in tags only</span>
                </label>
              </div>
              <button type="button" onClick={this.handleSubmit}>
                <FaPlus /> Add
              </button>
            </form>

            <PopupboxContainer />
          </FormContainer>

          <ToolList>
            {toolList.map((tools, index) => (
              <ul key={index}>
                {tools.map((item) => (
                  <li key={item.id}>
                    <span className="toolTitle">
                      <a href={item.link}>{item.title}</a>
                      <button type="button">
                        <FaTimes /> remove
                      </button>
                    </span>
                    <span className="toolDescription">{item.description}</span>
                  </li>
                ))}
              </ul>
            ))}
          </ToolList>
        </Wrapper>
      </>
    );
  }
}
